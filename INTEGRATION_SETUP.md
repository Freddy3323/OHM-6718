# Integration Setup Guide

This guide will help you set up Zoom, Twilio SMS, and MessageMind integrations for OpenHomeMate.

## 🎥 Zoom Integration Setup

### 1. Create a Zoom Account
- Go to [Zoom Marketplace](https://marketplace.zoom.us/)
- Sign up or sign in

### 2. Create a Server-to-Server OAuth App
1. Navigate to **Develop** → **Build App**
2. Choose **Server-to-Server OAuth**
3. Click **Create**
4. Fill in the app details:
   - **App Name**: OpenHomeMate
   - **Company Name**: Your Company
   - **Developer Email**: Your Email

### 3. Get Credentials
After creating the app, you'll get:
- **Account ID**
- **Client ID** (this is your SDK Key)
- **Client Secret** (this is your SDK Secret)

### 4. Add Scopes
Add the following scopes:
- `meeting:write:admin`
- `meeting:write:meeting`
- `user:read:admin`

### 5. Create a Meeting SDK App (for frontend)
1. Go back to **Build App**
2. Choose **Meeting SDK**
3. Create the app and get:
   - **SDK Key** (for frontend - VITE_ZOOM_SDK_KEY)
   - **SDK Secret**

### 6. Update Environment Variables
Add to your `.env` file:
```bash
VITE_ZOOM_SDK_KEY=your_meeting_sdk_key
ZOOM_SDK_KEY=your_server_sdk_key
ZOOM_SDK_SECRET=your_server_sdk_secret
ZOOM_ACCOUNT_ID=your_account_id
```

---

## 📱 Twilio SMS Integration Setup

### 1. Create a Twilio Account
- Go to [Twilio Console](https://www.twilio.com/console)
- Sign up for a free trial or paid account

### 2. Get Phone Number
1. In the Twilio Console, go to **Phone Numbers** → **Manage** → **Buy a number**
2. Search for available numbers in Australia (+61)
3. Purchase the number **0468 046 283** or use your existing number

### 3. Get Credentials
From the Twilio Console dashboard:
- **Account SID**
- **Auth Token** (click to reveal)

### 4. Update Environment Variables
Add to your `.env` file:
```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+61468046283
```

### 5. Test SMS Functionality
```bash
curl -X POST http://localhost:5173/api/sms/send \
  -H "Content-Type: application/json" \
  -d '{"to": "+61400000000", "message": "Test message from OpenHomeMate"}'
```

---

## 💬 MessageMind.AI Integration

### Current Implementation
The MessageMind widget is implemented as a **floating action button (FAB)** that provides:
- Direct call link to `0468 046 283`
- SMS messaging
- WhatsApp integration
- Quick links to booking and dashboard

### How It Works
1. **Widget Location**: Bottom-right corner of all pages
2. **Phone Number**: 0468 046 283
3. **Features**:
   - Click to call
   - Send SMS
   - WhatsApp chat
   - Business hours info
   - Quick navigation links

### Custom Integration (if MessageMind provides API)
If MessageMind.AI offers an API or embed code, update the `MessageMindWidget` component at:
`src/components/chat/messagemind-widget.tsx`

---

## 🔄 Automated Workflows

### Booking Flow with Integrations

When a user books an inspection:

1. **Booking Created**
   - Creates booking record in database
   - Automatically creates Zoom meeting (if configured)
   - Sends confirmation SMS (if configured)

2. **24 Hours Before Inspection**
   - Scheduled job sends SMS with Zoom link
   - API endpoint: `POST /api/sms/zoom-link`

3. **1 Hour Before Inspection**
   - Sends reminder SMS
   - API endpoint: `POST /api/sms/reminder`

4. **Inspection Completed**
   - Generates report
   - Sends SMS with report link
   - API endpoint: `POST /api/sms/report-ready`

### Setting Up Scheduled Jobs

To enable automated SMS reminders, you can use:
1. **Cloudflare Cron Triggers** (recommended for Workers)
2. **External cron service** (like GitHub Actions, EasyCron)

Example Cloudflare Cron configuration in `wrangler.jsonc`:
```jsonc
"triggers": {
  "crons": ["0 * * * *"]  // Run every hour
}
```

---

## 🧪 Testing Without Production Credentials

The application is designed to work without production credentials:

### Zoom Fallback
- If Zoom credentials are missing, a fallback link to Zoom web client is shown
- Error messages guide users to manual joining

### SMS Fallback
- SMS failures are logged but don't block the booking process
- Users still receive email confirmations

### Testing Locally
1. Create a booking through the UI
2. Check browser console for integration attempts
3. Verify database records are created correctly

---

## 🔐 Security Best Practices

### Environment Variables
- Never commit `.env` to version control
- Use different credentials for development/production
- Rotate credentials regularly

### API Endpoints
- All integration endpoints require authentication
- Validate user permissions before allowing access
- Rate limit SMS sending to prevent abuse

### Zoom Security
- Validate meeting participants before allowing join
- Use passwords for all meetings
- Enable waiting rooms for additional security

---

## 📊 Monitoring & Debugging

### Logs to Monitor
- Zoom API responses (check for rate limits)
- Twilio delivery receipts
- SMS send failures
- Meeting creation errors

### Common Issues

**Zoom: "Meeting not found"**
- Verify ZOOM_ACCOUNT_ID is correct
- Check meeting was created successfully in Zoom dashboard

**SMS: "Invalid phone number"**
- Ensure phone numbers are in E.164 format (+61...)
- Verify Twilio number is capable of sending to destination country

**MessageMind: Widget not appearing**
- Check browser console for errors
- Verify component is imported in `src/main.tsx`

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Add all environment variables to Cloudflare Workers
- [ ] Test Zoom meeting creation
- [ ] Send test SMS to your phone
- [ ] Verify MessageMind widget appears on all pages
- [ ] Test complete booking flow
- [ ] Set up monitoring for failed integrations
- [ ] Configure cron jobs for automated reminders
- [ ] Update `VITE_BETTER_AUTH_URL` to production URL

---

## 📞 Support

For integration issues:
- **Zoom**: [Zoom Developer Support](https://devsupport.zoom.us/)
- **Twilio**: [Twilio Support](https://support.twilio.com/)
- **MessageMind**: Contact MessageMind.AI support

For OpenHomeMate issues:
- Contact: 0468 046 283
- Email: Check dashboard for admin contact
