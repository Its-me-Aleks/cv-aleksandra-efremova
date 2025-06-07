import nodemailer from "nodemailer";
import formidable from "formidable";
import { promises as fs } from "fs";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  files?: Array<{
    name: string;
    buffer: Buffer;
  }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing environment variables");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const form = formidable({ multiples: true });
    const [fields, files] = await new Promise<
      [formidable.Fields, formidable.Files]
    >((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          reject(err);
        }
        resolve([fields, files]);
      });
    });

    console.log("Received form fields:", fields);

    const formData: FormData = {
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name || "",
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email || "",
      subject: Array.isArray(fields.subject)
        ? fields.subject[0]
        : fields.subject || "",
      message: Array.isArray(fields.message)
        ? fields.message[0]
        : fields.message || "",
    };

    if (files.files) {
      const fileArray = Array.isArray(files.files)
        ? files.files
        : [files.files];
      formData.files = await Promise.all(
        fileArray.map(async (file) => ({
          name: file.originalFilename || "file",
          buffer: await fs.readFile(file.filepath),
        }))
      );
    }

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified");
    } catch (error) {
      console.error("SMTP connection error:", error);
      return res
        .status(500)
        .json({ message: "Email service configuration error" });
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "efremova_aleksandra@yahoo.com",
      subject: "New Contact Form Submission",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
      attachments: formData.files?.map((file) => ({
        filename: file.name,
        content: file.buffer,
      })),
    });

    console.log("Email sent successfully:", info);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in contact form handler:", error);
    res.status(500).json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
