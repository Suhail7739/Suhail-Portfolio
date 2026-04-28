// "use client"

// import { ExternalLink, Sparkles } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"

// const projects = [
//   {
//     title: "TEadifyz AI",
//     subtitle: "AI-Powered Advertising Platform",
//     description:
//       "Built an AI-powered digital advertising automation platform with integrations for Meta and Google Ads APIs, streamlining campaign creation and management. Features AI-generated ad creatives and smart audience targeting using data-driven insights, improving campaign conversion rates and overall ad ROI. Includes a real-time analytics and performance tracking dashboard.",
//     technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
//     isAI: true,
//   },
//   {
//     title: "SharePost.AI",
//     subtitle: "Social Media Management Platform",
//     description:
//       "Developed a cross-platform social media management tool enabling simultaneous content publishing to Facebook and Instagram from a unified dashboard. Integrated AI-powered content generation to assist users in creating high-engagement posts and automating calendar-based scheduling workflows. Built multi-account management features and streamlined PostgreSQL queries and Node.js APIs.",
//     technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
//     isAI: true,
//   },
//   {
//     title: "Treez Agent",
//     subtitle: "AI-Powered Real Estate Assistant",
//     description:
//       "Expanded an AI-powered real estate discovery platform helping buyers and investors identify high-ROI properties using intelligent, preference-based recommendations. Integrated a 24/7 conversational AI sales agent covering apartments, villas, farmlands, and plots, improving lead engagement and buyer conversion rates. Designed high-conversion property listing pages with location insights and pricing data.",
//     technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
//     isAI: true,
//   },
// ]

// export function Projects() {
//   return (
//     <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-12">
//           <span className="text-primary font-mono text-sm tracking-wider">What I&apos;ve Built</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Projects</h2>
//         </div>
        
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <div className="flex items-center gap-2 mb-1">
//                     <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
//                       {project.title}
//                     </h3>
//                     {project.isAI && (
//                       <Sparkles className="w-4 h-4 text-primary" />
//                     )}
//                   </div>
//                   <p className="text-primary text-sm font-medium">{project.subtitle}</p>
//                 </div>
//               </div>
              
//               <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
//                 {project.description}
//               </p>
              
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.technologies.map((tech) => (
//                   <Badge
//                     key={tech}
//                     variant="secondary"
//                     className="text-xs bg-secondary text-secondary-foreground"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
              
//               <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
//                 <ExternalLink className="w-4 h-4 mr-2" />
//                 View Project
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
