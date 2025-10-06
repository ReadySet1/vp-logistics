import Script from "next/script"

export function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  const scriptSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL

  if (!websiteId || !scriptSrc) {
    return null
  }

  return (
    <Script
      async
      src={scriptSrc}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  )
}
