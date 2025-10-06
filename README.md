# VP Logistics Landing Page

A modern, responsive landing page for VP Logistics - built with cutting-edge web technologies to showcase logistics and transportation services.

## Features

- 🚀 **Next.js 15** with App Router and Turbopack for blazing-fast development
- 🎨 **Tailwind CSS 4** for modern, responsive design
- 🔧 **TypeScript** for type-safe development
- 🎯 **Radix UI** components for accessible user interfaces
- ⚡ **Lucide React** icons for clean, modern iconography
- 📱 **Fully Responsive** design optimized for all devices
- 🔍 **SEO Optimized** with meta tags, Open Graph, Twitter Cards, and structured data
- 📊 **Analytics Ready** with Umami Analytics integration
- 📧 **Contact Form** with validation and API endpoint
- 🎨 **Premium Logo** with gradient effects and modern styling
- ✨ **Smooth Animations** with Framer Motion for engaging user experience
- 📋 **Get Quote Modal** with comprehensive quote request form
- 📮 **Resend Email Integration** for professional email notifications

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4 with CSS animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API
- **Language**: TypeScript
- **Development**: Turbopack for fast builds

## Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vp-logistics
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- `RESEND_API_KEY`: Your Resend API key for email functionality
- `RESEND_FROM_EMAIL`: Email address for sending emails
- `RESEND_TO_EMAIL`: Email address to receive form submissions
- `NEXT_PUBLIC_SITE_URL`: Your production URL (optional)
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`: Your Umami Analytics website ID (optional)
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL`: Your Umami Analytics script URL (optional)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Your Google Search Console verification code (optional)

For detailed email setup instructions, see [docs/RESEND_SETUP.md](./docs/RESEND_SETUP.md)

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

```
vp-logistics/
├── src/
│   ├── app/
│   │   ├── api/          # API routes (contact, quote)
│   │   ├── globals.css   # Global styles and animations
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Landing page
│   ├── components/
│   │   ├── ui/           # UI components (button, card, input, etc.)
│   │   ├── get-quote-modal.tsx  # Quote request modal
│   │   └── logo.tsx      # VP Logistics logo
│   └── lib/              # Utility functions
├── docs/                 # Documentation
│   ├── ANIMATION_FEATURES.md
│   ├── RESEND_SETUP.md
│   └── QA_TESTING.md
├── public/               # Static assets
└── ...
```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## Documentation

Detailed documentation is available in the [docs](./docs) directory:

- **[Animation Features](./docs/ANIMATION_FEATURES.md)** - Smooth animations and Get Quote modal
- **[Resend Email Setup](./docs/RESEND_SETUP.md)** - Email configuration guide
- **[QA Testing](./docs/QA_TESTING.md)** - Quality assurance and testing results

## Deployment

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push to main

Alternatively, you can deploy to other platforms that support Node.js applications.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential.
