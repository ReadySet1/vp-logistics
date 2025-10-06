"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Shield, MapPin, Users, CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Logo } from "@/components/logo"
import { GetQuoteModal } from "@/components/get-quote-modal"
import { motion } from "framer-motion"

export default function VPLogisticsLanding() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Process
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button onClick={() => setIsQuoteModalOpen(true)}>Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Professional Last-Mile Delivery Solutions
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Reliable Logistics
              <span className="text-primary"> You Can Trust</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
            >
              Leading logistics partner specializing in efficient package delivery, driver management, and comprehensive
              supply chain solutions with advanced tracking and professional service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg" className="h-12 px-8" onClick={() => setIsQuoteModalOpen(true)}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Logistics Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From driver dispatch to quality assurance, we handle every aspect of your delivery needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Driver Dispatch Services",
                description: "Comprehensive morning dispatch including route optimization and system finalization",
                features: ["Route optimization", "Address verification", "Dashboard management"],
                badge: "5:51 AM - 9:04 AM",
                delay: 0,
              },
              {
                icon: MapPin,
                title: "Package Delivery Management",
                description: "Real-time tracking and professional delivery with quality assurance protocols",
                features: ["Real-time tracking", "Quality assurance", "Damage prevention"],
                badge: "Continuous Monitoring",
                delay: 0.1,
              },
              {
                icon: Shield,
                title: "24/7 Problem Resolution",
                description: "Immediate response to driver inquiries and delivery issues with emergency protocols",
                features: ["Emergency protocols", "Technical support", "Real-time assistance"],
                badge: "9:00 AM - End of Day",
                delay: 0.2,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: service.delay }}
              >
                <Card className="relative overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <service.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                      <Badge variant="outline">{service.badge}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Quality Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              6-step quality assurance process ensuring accurate package tracking and delivery
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: 1, title: "Package Verification", desc: "Ensure all packages are scanned into the system" },
              { step: 2, title: "Financial Compliance", desc: "Proper scanning ensures payment and avoids penalties" },
              { step: 3, title: "Re-scan Safety Protocol", desc: "When in doubt, re-scan packages for safety" },
              {
                step: 4,
                title: "Scanning Troubleshooting",
                desc: "Adjust phone angle or lighting for better scanning",
              },
              { step: 5, title: "Label Replacement", desc: "Handle damaged or invalid labels through operations" },
              { step: 6, title: "Damage Control", desc: "Immediate handling of damaged or leaking packages" },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: item.step * 0.05 }}
              >
                <Card className="text-center h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.step * 0.05 + 0.2, type: "spring" }}
                      className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4"
                    >
                      {item.step}
                    </motion.div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Banner */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90"></div>
              <div className="relative px-8 py-16 md:px-16 md:py-20">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                      Limited Time Offer
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                      Scale Your Business with Professional Logistics
                    </h2>
                    <p className="text-lg opacity-90 mb-6">
                      Join hundreds of businesses who trust VP Logistics for reliable, on-time delivery. Get started
                      today and experience the difference professional logistics makes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => setIsQuoteModalOpen(true)}
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        Schedule Demo
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "99.8%", label: "On-Time Delivery", delay: 0.4 },
                        { value: "24/7", label: "Support Available", delay: 0.5 },
                        { value: "500+", label: "Happy Clients", delay: 0.6 },
                        { value: "5★", label: "Average Rating", delay: 0.7 },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: stat.delay }}
                        >
                          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-colors duration-300">
                            <CardContent className="p-4 text-center">
                              <div className="text-2xl font-bold">{stat.value}</div>
                              <div className="text-sm opacity-80">{stat.label}</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-lg opacity-90">
                Contact us today for professional logistics solutions tailored to your business needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Send us a message and we&apos;ll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Input
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                      <Input
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    <Textarea
                      placeholder="Tell us about your logistics needs..."
                      className="min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {submitStatus === "success" && (
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Thank you! We&apos;ll get back to you within 24 hours.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="text-sm text-red-600 dark:text-red-400">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="opacity-90">5:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="opacity-90">Available during business hours</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 opacity-80" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="opacity-90">24/7 response within 4 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <p className="opacity-90">
                    We provide comprehensive logistics services across multiple regions with our professional driver
                    network and advanced tracking systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                Professional last-mile delivery solutions with reliable, on-time service and advanced tracking.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Driver Dispatch</li>
                <li>Package Delivery</li>
                <li>Route Optimization</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Process</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Driver Resources</li>
                <li>Technical Support</li>
                <li>Emergency Contact</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 VP Logistics. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Get Quote Modal */}
      <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}
