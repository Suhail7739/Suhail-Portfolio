"use client"

import { Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} Suhail Khan. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Languages:</span>
            <span className="text-foreground">English</span>
            <span>•</span>
            <span className="text-foreground">Hindi</span>
            <span>•</span>
            <span className="text-foreground">Urdu</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:suhailkhna786@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suhail-khan-292025290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Suhail7739"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
