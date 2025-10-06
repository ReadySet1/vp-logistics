"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Package, Truck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface GetQuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  pickupLocation: string
  deliveryLocation: string
  packageDetails: string
  estimatedVolume: string
}

export function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    pickupLocation: "",
    deliveryLocation: "",
    packageDetails: "",
    estimatedVolume: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          pickupLocation: "",
          deliveryLocation: "",
          packageDetails: "",
          estimatedVolume: "",
        })
        setTimeout(() => {
          onClose()
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Quote form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof QuoteFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-auto"
            >
              <Card className="relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>

                <CardHeader>
                  <CardTitle className="text-2xl">Get a Custom Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours with a customized quote for your
                    logistics needs.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Contact Information
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Input
                          placeholder="Full Name *"
                          required
                          value={formData.name}
                          onChange={handleChange("name")}
                        />
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={formData.email}
                          onChange={handleChange("email")}
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number *"
                          required
                          value={formData.phone}
                          onChange={handleChange("phone")}
                        />
                        <Input
                          placeholder="Company Name *"
                          required
                          value={formData.company}
                          onChange={handleChange("company")}
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Truck className="h-5 w-5 text-primary" />
                        Service Details
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                            value={formData.serviceType}
                            onChange={handleChange("serviceType")}
                          >
                            <option value="">Select Service Type *</option>
                            <option value="last-mile">Last-Mile Delivery</option>
                            <option value="driver-dispatch">Driver Dispatch Services</option>
                            <option value="route-optimization">Route Optimization</option>
                            <option value="full-logistics">Full Logistics Management</option>
                          </select>
                        </div>
                        <Input
                          placeholder="Estimated Volume (packages/day) *"
                          required
                          value={formData.estimatedVolume}
                          onChange={handleChange("estimatedVolume")}
                        />
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location Details
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Input
                          placeholder="Pickup Location/Area *"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange("pickupLocation")}
                        />
                        <Input
                          placeholder="Delivery Location/Area *"
                          required
                          value={formData.deliveryLocation}
                          onChange={handleChange("deliveryLocation")}
                        />
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Package Details & Special Requirements (size, weight, fragility, timing, etc.) *"
                        className="min-h-[120px]"
                        required
                        value={formData.packageDetails}
                        onChange={handleChange("packageDetails")}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 p-3 rounded-md"
                      >
                        ✓ Quote request submitted successfully! We&apos;ll contact you within 24 hours.
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 p-3 rounded-md"
                      >
                        ✗ Something went wrong. Please try again or contact us directly.
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Request Quote"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

