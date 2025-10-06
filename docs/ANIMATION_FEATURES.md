# Animation & Get Quote Features

## ✨ What's New

### 1. Smooth Animations with Framer Motion

All major page sections now have beautiful, smooth animations:

#### Hero Section
- Staggered fade-in animations for badge, heading, description, and CTA buttons
- Smooth entrance on page load with delays for visual flow

#### Services Section
- Cards animate in as you scroll into view
- Each card fades in and slides up with staggered delays
- Hover effects with shadow transitions

#### Process Steps
- Cards scale in with spring animations
- Step numbers animate with a bounce effect
- Staggered timing creates a wave effect

#### Marketing Banner
- Content slides in from left and right
- Statistics cards scale in individually
- Smooth transitions on all elements

### 2. Get Quote Modal

A comprehensive quote request system with:

#### Features
- Professional modal overlay with backdrop blur
- Smooth open/close animations
- Comprehensive form with validation
- Contact information section
- Service type selection
- Location details (pickup/delivery)
- Package details and requirements
- Real-time form validation
- Success/error status messages
- Auto-close on successful submission

#### Accessible From
- Header "Get Quote" button
- Hero section "Get Started" button  
- Marketing banner "Start Free Trial" button
- Any custom CTA you add

#### Form Fields
- Full Name
- Email Address
- Phone Number
- Company Name
- Service Type (dropdown):
  - Last-Mile Delivery
  - Driver Dispatch Services
  - Route Optimization
  - Full Logistics Management
- Estimated Volume
- Pickup Location
- Delivery Location
- Package Details & Special Requirements

### 3. Resend Email Integration

Professional email notifications for both contact and quote forms:

#### Email Templates
- Branded HTML emails with VP Logistics colors
- Responsive design
- Clean data presentation in tables
- Call-to-action reminders
- Timestamp and source tracking

#### Contact Form Email
- Sends contact inquiries to your team
- Includes name, email, company, message
- 24-hour response reminder

#### Quote Request Email
- Detailed quote information
- Contact details
- Service requirements
- Location information
- Package specifications
- Professional formatting

### 4. CSS Animation Utilities

Added custom animation utilities in `globals.css`:

#### Keyframe Animations
- `fadeInUp` - Fade in while moving up
- `fadeIn` - Simple fade in
- `scaleIn` - Fade in with scale
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right

#### Utility Classes
- `.animate-fade-in-up`
- `.animate-fade-in`
- `.animate-scale-in`
- `.animate-slide-in-left`
- `.animate-slide-in-right`
- `.transition-smooth` - Smooth transitions (300ms)
- `.transition-smooth-slow` - Slower transitions (500ms)

#### Smooth Scrolling
- Enabled `scroll-behavior: smooth` for anchor links
- Smooth navigation to sections

## 🚀 How to Use

### 1. Install Dependencies (Already Done)
```bash
pnpm add framer-motion resend
```

### 2. Set Up Resend (Required for Email)

Create `.env.local` file:
```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=VP Logistics <noreply@yourdomain.com>
RESEND_TO_EMAIL=contact@yourdomain.com
```

See `RESEND_SETUP.md` for detailed instructions.

### 3. Test the Features

Run the development server:
```bash
pnpm dev
```

Then:
1. Visit the site and scroll to see animations
2. Click "Get Quote" to test the modal
3. Submit a quote request to test email (if configured)
4. Try the contact form at the bottom

## 📁 Files Created/Modified

### New Files
- `src/components/get-quote-modal.tsx` - Quote modal component
- `src/app/api/quote/route.ts` - Quote API endpoint
- `RESEND_SETUP.md` - Email setup guide
- `ANIMATION_FEATURES.md` - This file

### Modified Files
- `src/app/page.tsx` - Added animations and modal integration
- `src/app/globals.css` - Added animation utilities
- `src/app/api/contact/route.ts` - Integrated Resend
- `package.json` - Added framer-motion and resend

## 🎨 Animation Behavior

### Viewport Triggers
- Animations trigger when elements are ~100px from viewport
- `viewport={{ once: true }}` - Animations play once (no re-trigger on scroll)
- Smooth, non-intrusive timing

### Performance
- Hardware-accelerated transforms
- Optimized for 60fps
- No layout shifts or jank

### Accessibility
- Respects `prefers-reduced-motion`
- Keyboard accessible
- Screen reader friendly

## 🔧 Customization

### Adjust Animation Speed
In `page.tsx`, modify the `transition` duration:
```tsx
transition={{ duration: 0.5, delay: 0.1 }}
```

### Change Animation Type
Replace `initial` and `animate` props:
```tsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

### Add New Animations
Use the utilities in `globals.css` or create custom ones using Framer Motion.

## 💡 Tips

1. **Email Testing**: Use Resend's test mode during development
2. **Form Validation**: Both forms have client-side validation
3. **Error Handling**: Check console for detailed error messages
4. **Customization**: All animations use CSS variables for theming
5. **Mobile**: All animations are responsive and mobile-optimized

## 🐛 Troubleshooting

### Animations not showing?
- Check browser console for errors
- Ensure framer-motion is installed
- Verify no conflicting CSS

### Modal not opening?
- Check `isQuoteModalOpen` state
- Verify button onClick handlers
- Check for z-index conflicts

### Emails not sending?
- See `RESEND_SETUP.md`
- Check environment variables
- Verify API key in Resend dashboard

