import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] px-6 py-12 font-sans">
      <section className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#1A1A1A] mb-4"
        >
          Nagaraj Neelam
        </motion.h1>

        <p className="text-xl text-[#3D3D3D] mb-8">
          Aspiring Software Engineer | MERN Stack | AI & Backend Enthusiast | FAANG Preparation Journey 🚀
        </p>

        <div className="flex gap-4 mb-8">
          <Button className="bg-[#1A1A1A] text-white">Download Resume</Button>
          <Button variant="outline">Contact Me</Button>
        </div>

        <section className="grid gap-6">
          <Card className="shadow-xl rounded-2xl border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">About Me</h2>
              <p className="text-[#3D3D3D] text-lg leading-relaxed">
                Passionate about building scalable web apps and AI-driven systems. Currently focused on FAANG-level DSA, system design, and developing AI-powered healthcare projects.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Projects</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#3D3D3D] text-lg">
                <li>
                  <strong>Health Nexus:</strong> Smart healthcare appointment system analyzing health records & recommending doctors via OpenAPI.
                </li>
                <li>
                  <strong>MediVault:</strong> EHR management system with secure APIs for healthcare data.
                </li>
                <li>
                  <strong>AI Virtual Doctor:</strong> Ongoing project building an AI agent for medical consultations.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Skills</h2>
              <p className="text-[#3D3D3D] text-lg">
                JavaScript | TypeScript | Node.js | Express.js | MongoDB | React.js | NestJS | AI/ML | Databases | System Design | DSA
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl rounded-2xl border border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4">Contact</h2>
              <div className="flex gap-6 text-[#1A1A1A]">
                <a href="mailto:nagaraj@example.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/nagaraj-neelam" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/nagarajneelam" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
