"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-primary font-mono text-sm tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Let&apos;s Work Together</h2>
        </div>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, 
          a question, or just want to say hello, feel free to reach out!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:suhailkhna786@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>suhailkhna786@gmail.com</span>
          </a>
          <a
            href="tel:+917739810900"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 7739810900</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Bangalore, India</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="font-medium">
            <a href="mailto:suhailkhna786@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium">
            <a href="https://www.linkedin.com/in/suhail-khan-292025290/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium">
            <a href="https://github.com/Suhail7739" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
