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
    const form = formidable({ multiples: true });
    const [fields, files] = await new Promise<
      [formidable.Fields, formidable.Files]
    >((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

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

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "efremova_aleksandra@yahoo.com",
      subject: "New Contact Form Submission",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
      attachments: formData.files?.map((file) => ({
        filename: file.name,
        content: file.buffer,
      })),
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
