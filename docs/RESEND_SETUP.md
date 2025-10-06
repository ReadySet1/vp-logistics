# Resend Email Integration Setup

This project uses [Resend](https://resend.com) for sending emails from the contact form and quote requests.

## Setup Instructions

### 1. Get Your Resend API Key

1. Sign up for a free account at [resend.com](https://resend.com)
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```bash
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Email configuration
RESEND_FROM_EMAIL=VP Logistics <noreply@yourdomain.com>
RESEND_TO_EMAIL=contact@yourdomain.com
```

Replace:
- `re_your_api_key_here` with your actual Resend API key
- `noreply@yourdomain.com` with your verified sending domain
- `contact@yourdomain.com` with the email address where you want to receive inquiries

### 3. Domain Verification (Production)

For production use, you'll need to verify your domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Add the required DNS records to your domain provider
4. Wait for verification (usually takes a few minutes)

### 4. Testing

During development, you can use Resend's test mode:
- Emails will be sent to your Resend dashboard
- You won't need a verified domain for testing

## Email Features

The integration includes:

### Contact Form
- Location: Bottom of the landing page
- Sends to: `RESEND_TO_EMAIL`
- Includes: Name, email, company, message

### Quote Request Form
- Location: "Get Quote" modal (accessible from header and CTA buttons)
- Sends to: `RESEND_TO_EMAIL`
- Includes: Contact info, service type, locations, package details

## Email Templates

Both emails use professional HTML templates with:
- VP Logistics branding (red/black color scheme)
- Responsive design
- Clear formatting of submitted data
- Call-to-action for 24-hour response

## Fallback Behavior

If `RESEND_API_KEY` is not configured:
- Forms will still work and return success
- Submissions will be logged to the console
- No actual emails will be sent
- Users will still see success messages

This allows development without Resend configuration.

## API Routes

- **Contact Form**: `/api/contact` (POST)
- **Quote Requests**: `/api/quote` (POST)

Both routes include:
- Input validation
- Email format validation
- Error handling
- Detailed logging

## Troubleshooting

### Emails not sending?
1. Check that `RESEND_API_KEY` is set correctly in `.env.local`
2. Verify your API key is active in Resend dashboard
3. Check server logs for error messages
4. Ensure your sending domain is verified (for production)

### Getting 400 errors?
- Verify all required form fields are filled
- Check email format is valid
- Look at browser console for validation errors

### Emails going to spam?
- Verify your domain with SPF and DKIM records
- Use a verified sending domain
- Avoid spam trigger words in templates

