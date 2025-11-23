# OpenHomeMate - AI-Powered Building Inspections

Professional Australian residential building inspections with cutting-edge AI defect detection. Get comprehensive reports delivered instantly through live virtual inspections.

## ✨ Features

- 🎥 **Virtual Inspections**: Live Zoom video inspections with screen sharing
- 🤖 **AI Defect Detection**: Automated detection of building defects during inspections
- 📱 **SMS Notifications**: Automated booking confirmations and reminders via Twilio
- 💬 **AI Assistant**: MessageMind chat widget for instant customer support
- 📊 **Comprehensive Reports**: Detailed inspection reports with defect tracking
- 🔐 **Secure Authentication**: Role-based access (Inspectors & Customers)
- 💳 **Billing Integration**: Autumn.js for subscription management

## 🏗️ Tech Stack

### Frontend
- **React 19** + TypeScript + Vite
- **TailwindCSS** + shadcn/ui components
- **Zoom Meeting SDK** for video calls
- **React Query** for data fetching
- **Wouter** for routing

### Backend
- **Cloudflare Workers** (Hono framework)
- **Drizzle ORM** + D1 Database
- **Better Auth** for authentication
- **Twilio** for SMS notifications
- **Zoom API** for meeting management

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) runtime
- [Cloudflare account](https://cloudflare.com/)
- Zoom Developer account (for video inspections)
- Twilio account (for SMS notifications)

### Installation

1. **Clone and install**:
```bash
git clone <repository-url>
cd openhomemate
bun install
```

2. **Set up environment variables**:
```bash
cp .env.example .env
```

Edit `.env` with your credentials (see **Integrations Setup** below)

3. **Generate database**:
```bash
bun db:generate
yes | bun wrangler d1 migrations apply testing
```

4. **Start development server**:
```bash
bun run dev
```

5. Visit `http://localhost:5173`

## 🔧 Integrations Setup

### 📹 Zoom Integration

See [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md) for detailed instructions.

**Quick setup**:
1. Create Server-to-Server OAuth app at [Zoom Marketplace](https://marketplace.zoom.us/)
2. Create Meeting SDK app for frontend integration
3. Add credentials to `.env`:
```bash
VITE_ZOOM_SDK_KEY=your_meeting_sdk_key
ZOOM_SDK_KEY=your_server_sdk_key  
ZOOM_SDK_SECRET=your_server_sdk_secret
ZOOM_ACCOUNT_ID=your_account_id
```

### 📱 Twilio SMS

1. Sign up at [Twilio](https://www.twilio.com/)
2. Get Account SID, Auth Token, and phone number
3. Add to `.env`:
```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+61468046283
```

**SMS Templates**:
- Booking confirmation
- Zoom link (24hrs before)
- 1-hour reminder
- Report ready notification

### 💬 MessageMind.AI Widget

Currently implemented as a floating action button with:
- Direct calling to 0468 046 283
- SMS messaging
- WhatsApp integration
- Business hours display

To integrate MessageMind API (if available), update:
`src/components/chat/messagemind-widget.tsx`

## 📦 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run pre-deploy` - Build and generate migrations
- `bun db:generate` - Generate database migrations
- `bun run autumn:push` - Deploy billing configuration

## 🎯 Key Features

### For Customers
- Book virtual inspections online
- Receive SMS confirmations and reminders
- Join Zoom inspections from any device
- Access comprehensive inspection reports
- Track inspection history in dashboard

### For Inspectors (Admin)
- Manage inspection schedule
- Conduct live virtual inspections via Zoom
- AI-assisted defect detection during calls
- Record findings with standardized defect library
- Generate and send professional reports

## 🗄️ Database Schema

- **bookings** - Inspection bookings with Zoom links
- **inspections** - Active inspection sessions
- **defect_categories** - Standardized defect categories
- **defect_types** - Library of common building defects
- **inspection_defects** - Detected defects during inspections
- **reports** - Generated inspection reports
- **users** - Customer and inspector accounts

## 📱 API Endpoints

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - List user bookings
- `GET /api/bookings/:id` - Get booking details

### Zoom
- `POST /api/zoom/create-meeting` - Create Zoom meeting
- `GET /api/zoom/meeting/:id` - Get meeting details
- `POST /api/zoom/sdk-signature` - Generate SDK signature

### SMS
- `POST /api/sms/send` - Send SMS
- `POST /api/sms/booking-confirmation` - Booking confirmation SMS
- `POST /api/sms/zoom-link` - Send Zoom link SMS
- `POST /api/sms/reminder` - Send reminder SMS
- `POST /api/sms/report-ready` - Report ready notification

### Inspections
- `GET /api/inspections` - List inspections
- `GET /api/inspections/:id` - Get inspection details
- `POST /api/inspections/:id/start` - Start inspection
- `POST /api/inspections/:id/complete` - Complete inspection
- `POST /api/inspections/:id/defects` - Add defect
- `GET /api/inspections/:id/defects` - List defects

## 🌐 Deployment

### Cloudflare Workers

1. **Configure environment variables** in Cloudflare dashboard:
```bash
bunx wrangler secret put BETTER_AUTH_SECRET
bunx wrangler secret put ZOOM_SDK_SECRET
bunx wrangler secret put TWILIO_AUTH_TOKEN
```

2. **Deploy**:
```bash
bun run pre-deploy
bunx wrangler deploy
```

3. **Apply migrations to production**:
```bash
bun wrangler d1 migrations apply your-database-name --remote
```

## 📚 Documentation

- [Integration Setup Guide](./INTEGRATION_SETUP.md) - Detailed integration instructions
- [User Context](./USER_CONTEXT.md) - Business requirements and context
- [Agents Guide](./AGENTS.md) - Development guidelines

## 🆘 Troubleshooting

### Zoom not loading
- Check `VITE_ZOOM_SDK_KEY` is set in environment
- Verify browser permissions for camera/microphone
- Check browser console for errors

### SMS not sending
- Verify Twilio credentials are correct
- Check phone number format (+61...)
- Review Twilio console for delivery status

### Database issues
```bash
bun db:generate
yes | bun wrangler d1 migrations apply testing
```

## 📄 License

MIT License - see LICENSE file for details.

---

**OpenHomeMate** - Professional building inspections powered by AI. 🏠✨
