import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Interface for quote request data
 */
interface QuoteRequestData {
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

/**
 * POST /api/quote
 * Handles quote request submissions and sends emails via Resend
 */
export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequestData = await request.json()
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      pickupLocation,
      deliveryLocation,
      packageDetails,
      estimatedVolume,
    } = body

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !company ||
      !serviceType ||
      !pickupLocation ||
      !deliveryLocation ||
      !packageDetails ||
      !estimatedVolume
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Format service type for display
    const serviceTypeDisplay = serviceType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "VP Logistics <noreply@vp-logistics.com>",
          to: process.env.RESEND_TO_EMAIL || "contact@vp-logistics.com",
          subject: `New Quote Request from ${name} - ${company}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Quote Request</title>
              </head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new quote request from your website</p>
                </div>
                
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <h2 style="color: #DC2626; margin-top: 0;">Contact Information</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #DC2626;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #DC2626;">${phone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
                    </tr>
                  </table>

                  <h2 style="color: #DC2626; margin-top: 30px;">Service Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Service Type:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${serviceTypeDisplay}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Estimated Volume:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${estimatedVolume}</td>
                    </tr>
                  </table>

                  <h2 style="color: #DC2626; margin-top: 30px;">Location Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Pickup Location:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${pickupLocation}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Delivery Location:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${deliveryLocation}</td>
                    </tr>
                  </table>

                  <h2 style="color: #DC2626; margin-top: 30px;">Package Details</h2>
                  <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
                    <p style="margin: 0; white-space: pre-wrap;">${packageDetails}</p>
                  </div>

                  <div style="margin-top: 30px; padding: 20px; background: #fef2f2; border-left: 4px solid #DC2626; border-radius: 4px;">
                    <p style="margin: 0; color: #991B1B;">
                      <strong>⏰ Response Required:</strong> Please respond to this quote request within 24 hours.
                    </p>
                  </div>
                </div>

                <div style="margin-top: 20px; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
                  <p style="margin: 0;">This email was sent from your VP Logistics website contact form</p>
                  <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</p>
                </div>
              </body>
            </html>
          `,
        })

        console.log("Quote request email sent successfully via Resend")
      } catch (emailError) {
        console.error("Failed to send email via Resend:", emailError)
        // Don't fail the request if email fails - log it and continue
      }
    } else {
      console.log("RESEND_API_KEY not configured - Quote request logged only:", {
        name,
        email,
        phone,
        company,
        serviceType,
        pickupLocation,
        deliveryLocation,
        packageDetails,
        estimatedVolume,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your quote request. We'll get back to you within 24 hours.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

