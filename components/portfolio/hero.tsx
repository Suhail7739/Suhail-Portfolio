"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <div className="mb-6">
            <span className="text-primary font-mono text-sm tracking-wider">
              Hello, I&apos;m
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Suhail Khan
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-8">
            Full Stack Developer
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Results-driven Full Stack Developer with 2 years of experience
            building scalable, high-performance web applications using Java,
            Spring Boot, Node.js, React.js, and Next.js. Experienced in Agile
            environments, delivering production-grade solutions with
            cross-functional teams.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bangalore, India</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 7739810900</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>suhailkhna786@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-medium">
              <a href="mailto:suhailkhna786@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium"
            >
              <a
                href="https://www.linkedin.com/in/suhail-khan-292025290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium"
            >
              <a
                href="https://github.com/Suhail7739"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center lg:justify-end -mt-10 lg:-mt-20">
          <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src="/suhail-img.png"
              alt="Suhail Khan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}