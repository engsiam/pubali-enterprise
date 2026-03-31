# Email Configuration Setup Guide

## Quick Start

The email system requires Gmail credentials. Follow these steps:

### Step 1: Enable 2-Factor Authentication on Google Account

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click "Security" on the left
3. Scroll to "How you sign in to Google"
4. Enable "2-Step Verification"

### Step 2: Generate App Password

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
3. Click "Generate"
4. Copy the 16-character password shown

### Step 3: Configure Environment Variables

1. Open `.env.local` in your project root
2. Add your credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=admin@pubalienterprises.com
```

**Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### Step 4: Restart Development Server

```bash
pnpm dev
```

## Email Templates

The system now sends beautifully formatted HTML emails to both:

1. **Admin Email** - Summary of the quote request with all details
2. **Customer Email** - Confirmation with next steps and contact info

Both templates are mobile-responsive and include:
- Professional branding
- Clear information hierarchy
- Call-to-action buttons
- Contact information

## Troubleshooting

### Error: "Missing credentials for PLAIN"
- ✅ Check that `EMAIL_USER` and `EMAIL_PASSWORD` are set in `.env.local`
- ✅ Ensure you're using an **App Password**, not your regular Google password
- ✅ Restart the development server: `pnpm dev`

### Error: "Invalid login credentials"
- ✅ Verify the 16-character app password is correct
- ✅ Make sure 2-Factor Authentication is enabled
- ✅ Check that the email address is correct

### Emails not received
- ✅ Check spam/junk folder
- ✅ Verify `ADMIN_EMAIL` is correct
- ✅ Check Gmail security settings allow "Less secure apps" (if not using App Password)

### Test the API Manually

Use curl to test:

```bash
curl -X POST http://localhost:3000/api/send-quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+880 1234 567890",
    "email": "test@example.com",
    "serviceType": "Day Work",
    "location": "Dhaka Port",
    "message": "Test message"
  }'
```

## Alternative Email Services

### SendGrid (Production Recommended)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install: `pnpm add @sendgrid/mail`
4. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Resend (Next.js Optimized)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `pnpm add resend`
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

## Email Content

### Admin Receives:
- Customer name, phone, email
- Service type and location
- Full message details
- Timestamp of submission
- Direct reply option (uses customer's email)

### Customer Receives:
- Confirmation of request received
- Summary of their submission
- What to expect next (24-hour response)
- Direct contact information
- WhatsApp contact option

## Security Notes

- ✅ App Passwords are safer than master passwords
- ✅ Never share your `.env.local` file
- ✅ Keep credentials out of version control
- ✅ Use production-grade services (SendGrid/Resend) for large scale
- ✅ Enable encryption for sensitive data in database

## Support

Contact your hosting provider or Google Support for help with 2FA/App Passwords.
