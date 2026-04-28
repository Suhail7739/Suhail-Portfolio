"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.E. – Computer Science and Engineering",
    institution: "AMC Engineering College, VTU",
    location: "Bangalore",
    period: "2020 – 2024",
    grade: "CGPA: 7.8",
  },
  {
    degree: "Higher Secondary – PCM (BSEB)",
    institution: "Shiv Janam Ray College",
    location: "Bihar",
    period: "2018 – 2019",
    grade: "63.5%",
  },
  {
    degree: "Secondary Education – BSEB",
    institution: "Hari Ram High School",
    location: "Bihar",
    period: "2016 – 2017",
    grade: "69.80%",
  },
]

export function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-24 py-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">My Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Education</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mt-3">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
