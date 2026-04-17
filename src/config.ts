export const siteConfig = {
  name: "Ekam Singh Bhatia",
  title: "Full Stack Developer",
  description: "Portfolio website of Ekam",
  accentColor: "#1d4ed8",
  social: {
    email: "ekamsingh643@gmail.com",
    linkedin: "https://www.linkedin.com/in/ekam-bhatia-335840168/",
    github: "https://github.com/bhat0155",
    blog: "https://www.ekamblogs.ca/",
  },
  aboutMe:
    "I am a Full Stack Developer dedicated to building scalable, high-performance web and mobile applications. With a robust technical foundation in React, Next.js, Node.js, and PostgreSQL, I specialize in architecting user-centered products that balance clean code with thoughtful design. My expertise extends to mobile development using React Native and Flutter, ensuring seamless cross-platform experiences. Beyond application code, I bring a strong background in Cloud Infrastructure and DevOps. I am Microsoft Azure (AZ-900) certified and proficient in managing AWS services (S3, SES, EC2) to deploy and scale applications effectively. I am also experienced in implementing CI/CD pipelines, ensuring reliable, automated delivery of impactful software solutions. Driven by a commitment to technical excellence, I focus on turning complex requirements into streamlined, production-ready systems.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Prisma",
    "PostgreSQL",
    "AWS (EC2, S3, CloudFront)",
    "Tailwind CSS",
    "Firebase",
    "SwiftUI",
    "Flutter",
    "Git & GitHub",
    "Figma",
  ],
  projects: [
    {
      name: "Bhangrascape.ca",
      description:
        "Bhangrascape.ca — a full-stack event and community platform built with Next.js, Prisma, and AWS, connecting dancers and organizers through interactive polls, media sharing, and event management.",
      link: "https://bhangrascape.ca/",
      skills: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Node.js",
        "Express",
        "AWS (S3, EC2, CloudFront)",
        "Tailwind CSS",
        "DaisyUI",
        "NextAuth.js",
      ],
    },
   
{
  name: "Receipt-Checker",
  description:
    "A full-stack tool where users upload a grocery receipt, the backend extracts items using Google Vision OCR + an LLM, then checks them against recent Canadian recall data. Built with React + Vite on the frontend and Node.js/Express, Prisma, and PostgreSQL on the backend, deployed on AWS EC2 with Nginx, HTTPS, PM2, caching, and automated cleanup.",
  link: "https://receiptchecker.ca/",
 skills: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Express",
  "Prisma ORM",
  "PostgreSQL",
  "Google Cloud Vision API",
  "OpenAI / LLM Integration",
  "AWS (EC2, Nginx, HTTPS)",
  "CI/CD (GitHub Actions)",
],
},
 {
name: "XEffect",
description:
"A 21-day habit tracker with a public progress page and a private dashboard, powered by Google OAuth, JWT cookies, a streak engine, and AI milestone messages for motivation and support1.",
link: "https://xeffect.ca/",
skills: [
"React",
"TypeScript",
"Tailwind CSS",
"DaisyUI",
"Express",
"Node.js",
"Prisma",
"PostgreSQL",
"Google OAuth",
"JWT",
"Swagger/OpenAPI",
"Vercel",
"Render",
],
}
  ],
  experience: [
    {
      company: "The Beer Store",
      title: "Warehouse Clerk (Co-op)",
      dateRange: "Aug 2023 - Dec 2023",
      bullets: [
        "Maintained 98% accuracy in inventory audits, developing strong attention to detail — a skill I now apply when debugging complex code and verifying data integrity in backend systems.",
        "Collaborated with cross-functional teams to reduce product handling time by 15%, mirroring agile teamwork and iteration cycles used in software development.",
        "Operated digital inventory systems efficiently, reinforcing my understanding of structured data handling and process optimization.",
      ],
    },
    {
      company: "Amazon",
      title: "Seller Support Associate",
      dateRange: "Oct 2020 - Nov 2022",
      bullets: [
        "Handled over 1,000 tax-related support cases for EU sellers with a 95% resolution rate, enhancing my analytical thinking and ability to troubleshoot complex problems under pressure.",
        "Adapted quickly to advanced internal tools and workflows, strengthening my capacity to learn new technologies and development frameworks efficiently.",
        "Authored SOP documentation that reduced new hire ramp-up time by 20%, demonstrating my commitment to clarity and maintainability — principles I apply when writing clean, well-documented code.",
      ],
    },
  ],
  education: [
    {
      school: "Algonquin College",
      degree: "Mobile Application Design and Development",
      dateRange: "2024–2025",
      achievements: [
        "Graduated Magna Cum Laude with a 3.7 GPA",
        "Dean's List in all semesters",
      ],
    },
    {
      school: "Algonquin College",
      degree: "Post-Graduate Certificate in Supply Chain Management",
      dateRange: "2023",
      achievements: [
        "Graduated Magna Cum Laude with a 3.65 GPA",
        "Dean's List in all semesters",
      ],
    },
  ],
};