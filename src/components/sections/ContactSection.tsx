"use client";

import { useState, FormEvent } from "react";
import { FadeIn } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Linkedin, Github, MapPin, Loader2 } from "lucide-react";
import { RadialGradient } from "@/components/ui/background-effects";

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ContactSection({ scrollToSection }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Nagaraj Neelam",
            reply_to: formData.email,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("EmailJS error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-[72px] relative z-10">
      <RadialGradient position="top-left" color="mint" opacity={0.04} />
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              <Card className="p-6 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-[rgb(var(--color-accent-mint))]/20">
                    <Mail className="w-5 h-5 text-[rgb(var(--color-accent-mint))]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[rgb(var(--color-text-secondary))]">Email</h3>
                    <a 
                      href="mailto:neelamnagaraj99@gmail.com" 
                      className="text-white hover:text-[rgb(var(--color-accent-mint))] transition-colors"
                    >
                      neelamnagaraj99@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-[rgb(var(--color-accent-lavender))]/20">
                    <MapPin className="w-5 h-5 text-[rgb(var(--color-accent-lavender))]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[rgb(var(--color-text-secondary))]">Location</h3>
                    <p className="text-white">Telangana, India</p>
                  </div>
                </div>
              </Card>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/neelamnagarajgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))] rounded-lg hover:border-[rgb(var(--color-accent-mint))] transition-colors flex items-center justify-center"
                >
                  <Github className="w-5 h-5 text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/nagarajneelam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-[rgb(var(--color-bg-elevated))] border border-[rgb(var(--color-border-hairline))] rounded-lg hover:border-[rgb(var(--color-accent-mint))] transition-colors flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 text-[rgb(var(--color-text-secondary))] hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={200}>
            <Card className="p-8 bg-[rgb(var(--color-bg-elevated))] border-[rgb(var(--color-border-hairline))]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                    className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows={6}
                    required
                    className="bg-transparent border-[rgb(var(--color-border-hairline))] focus:border-[rgb(var(--color-accent-mint))] focus:ring-[rgb(var(--color-accent-mint))]/20"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-[rgb(var(--color-accent-mint))]/10 border border-[rgb(var(--color-accent-mint))]/30 rounded-lg">
                    <p className="text-[rgb(var(--color-accent-mint))] text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">
                      Failed to send message. Please try again or email me directly.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(var(--color-accent-mint))] text-black hover:bg-[rgb(var(--color-accent-mint))]/90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}