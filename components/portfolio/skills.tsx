"use client"

import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Node.js", "RESTful APIs", "Microservices Architecture", "Spring Security", "JWT"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Zustand"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Neon (Serverless PostgreSQL)"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, API Gateway, IAM)", "Docker", "Vercel"],
  },
  {
    title: "Security & Auth",
    skills: ["JWT Authentication", "Spring Security", "Role-Based Access Control (RBAC)"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Agile/Scrum", "REST API Design", "Microservices"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">What I Know</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Technical Skills</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
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
