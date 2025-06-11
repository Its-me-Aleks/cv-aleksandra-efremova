export const config = {
  contact: {
    email:
      import.meta.env.VITE_CONTACT_EMAIL || "efremova_aleksandra@yahoo.com",
    phone: import.meta.env.VITE_PHONE_NUMBER || "+38971232040",
    location:
      import.meta.env.VITE_LOCATION ||
      "Skopska 23, 2300 Kochani, North Macedonia",
  },
  social: {
    github:
      import.meta.env.VITE_GITHUB_URL || "https://github.com/Its-me-Aleks",
    linkedin:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://www.linkedin.com/in/aleksandra-efremova-aleks/",
  },
  site: {
    url:
      import.meta.env.VITE_SITE_URL ||
      "https://its-me-aleks.github.io/cv-aleksandra-efremova/",
    name: import.meta.env.VITE_SITE_NAME || "Aleksandra Efremova - CV",
    description:
      import.meta.env.VITE_SITE_DESCRIPTION ||
      "Frontend Developer CV and Portfolio",
  },
} as const;
