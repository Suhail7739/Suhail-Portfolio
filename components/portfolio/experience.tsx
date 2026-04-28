"use client"

import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Treez Enterprise",
    period: "November 2025 – Present",
    highlights: [
      "Improved and maintained scalable web applications using Java, Spring Boot, and Node.js (backend) and React.js, Next.js, and Tailwind CSS (frontend), serving production workloads.",
      "Enhanced and executed RESTful APIs and microservices following industry best practices, ensuring high availability, scalability, and maintainability.",
      "Architected and improved MongoDB and MySQL database schemas, improving query performance, data integrity, and overall application scalability.",
      "Deployed and managed cloud infrastructure on AWS (EC2, S3, RDS, Lambda, API Gateway, IAM) and Vercel, maintaining high-availability production environments.",
      "Integrated backend services with React.js and Next.js frontends via REST APIs, ensuring seamless data flow and efficient client-side state management.",
      "Collaborated with UI/UX designers, QA engineers, and product managers in Agile sprints to consistently deliver high-quality software on schedule.",
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "React.js", "Next.js", "AWS", "MongoDB", "MySQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Lauren Information Technologies Pvt. Ltd.",
    period: "December 2024 – November 2025",
    highlights: [
      "Built and maintained full-stack e-commerce applications using Spring Boot and React.js, supporting end-to-end product browsing, cart, and checkout workflows.",
      "Applied secure authentication and authorization using Spring Security and JWT, including Email OTP verification for enhanced login and registration security.",
      "Expanded bulk data upload functionality by processing Excel files and persisting structured data into MongoDB, significantly reducing manual data entry overhead.",
      "Planned and enhanced MySQL and MongoDB schemas to support complex business queries with low latency and high data integrity.",
      "Delivered RESTful API integrations across the full stack, enabling reliable data exchange between services and frontend interfaces.",
      "Conducted code reviews and maintain clean, well-documented codebases, improving team productivity and reducing bug rates in production deployment.",
    ],
    technologies: ["Spring Boot", "React.js", "Spring Security", "JWT", "MongoDB", "MySQL", "REST APIs"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">Where I&apos;ve Worked</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Professional Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex">
                    <span className="text-primary mr-3 mt-1.5 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-primary border-primary/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
