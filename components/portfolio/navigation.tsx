"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            SK<span className="text-primary">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="mailto:suhailkhna786@gmail.com">Hire Me</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm" className="w-full">
                <a href="mailto:suhailkhna786@gmail.com">Hire Me</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
