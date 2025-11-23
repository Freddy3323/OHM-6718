# OpenHomeMate Website - Development Context

## Project Overview
Building a comprehensive building inspection platform for Australian market with AI-powered defect detection capabilities.

## Assets Available
- `/public/logo.png` - Company logo (OpenHomeMate branding)
- `/public/hero-inspector.png` - Hero image with professional building inspector
- `/public/virtual-inspection.png` - Virtual inspection via video call
- `/public/defect-detection.png` - Defect detection and documentation

## Core Features Required

### 1. Professional Homepage
- Hero section showcasing building inspection services
- Clear value proposition for Australian residential building inspections
- Professional design reflecting 30+ years of expertise
- Trust signals and credentials

### 2. Booking System
- Online appointment booking functionality
- Calendar integration for scheduling inspections
- Booking form with property details
- Confirmation and reminder system

### 3. Service Integration
- **MessageMind AI Agent**: AI-powered customer support and inquiry handling
- **Twilio**: Phone number integration for SMS notifications and voice calls
- **Zoom**: Video conferencing for remote inspections

### 4. Live Inspection System
- Builder-facing interface for conducting live inspections via Zoom
- Real-time defect detection and annotation tools
- Split-screen view: video call + defect identification panel
- AI-assisted defect recognition (similar to iDefect software)
- Only builder sees the defect detection interface
- Client sees normal video call

### 5. Defect Knowledge Base
Based on NSW Government Building Commission and Australian Standards:

**Categories (as per DBP Act):**
1. Waterproofing (bathrooms, balconies, wet areas)
2. Fire Safety (smoke alarms, fire doors, escape routes)
3. Structure (foundation cracks, wall issues, settlement)
4. Building Enclosure (roof, windows, cladding, gutters)
5. Services (plumbing, electrical, HVAC, drainage)

**Most Common Defects:**
- Water leaks and waterproofing failures
- Wall and foundation cracking
- Roof and guttering problems
- Plumbing and drainage defects
- Electrical and fire safety issues

### 6. Real-time Report Generation
- Automatic report creation during live inspection
- Capture defects with photos and descriptions
- Categorize by severity (major/minor/safety hazard)
- Reference Australian Standards and NCC codes
- Export as PDF with professional formatting
- Send report to client immediately after inspection

## Technical Requirements

### Database Schema
- Users (clients, builders/inspectors, admins)
- Bookings (property details, scheduled time, status)
- Inspections (live session data, recordings)
- Defects (type, severity, location, photos, standards reference)
- Reports (generated documents, timestamps)

### API Integrations
- Twilio API for SMS/voice
- Zoom SDK for video integration
- MessageMind AI webhook integration
- Payment processing for booking fees

### Builder Dashboard
- Upcoming inspections schedule
- Live inspection interface with defect detection
- Defect library search and quick-add
- Report generation and management
- Client communication tools

### Client Portal
- Book inspection
- View scheduled inspections
- Join video call
- Receive and download reports
- Chat with AI agent (MessageMind)

## Design Requirements
- Professional, trustworthy aesthetic
- Blue color scheme (trust and professionalism)
- Clean, modern interface
- Mobile-responsive design
- Accessibility compliant
- Fast loading times

## Australian Compliance
- Reference National Construction Code (NCC)
- Australian Standards integration
- Building Code of Australia requirements
- NSW Building Commission defects library
- Professional indemnity insurance display

## User Flows

### Client Journey
1. Land on homepage → Learn about services
2. Click "Book Inspection" → Fill form with property details
3. Select date/time → Receive confirmation (SMS via Twilio)
4. Join Zoom call at scheduled time
5. Inspector conducts walkthrough, client sees video
6. Receive comprehensive report via email

### Builder/Inspector Journey
1. Log into dashboard → See scheduled inspections
2. Start inspection session → Zoom call launches
3. Special interface appears with defect detection tools
4. AI suggests potential defects based on video feed
5. Builder confirms/adds defects with notes and photos
6. Report auto-generates with all captured defects
7. Review and send to client

## Key Differentiators
- AI-powered defect detection (like iDefect)
- Real-time remote inspections via Zoom
- Instant report generation
- Comprehensive Australian defects knowledge base
- Professional expertise (30+ years)
- Seamless booking and communication
