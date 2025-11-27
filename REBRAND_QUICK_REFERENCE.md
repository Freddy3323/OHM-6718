# OpenHomeMate Rebrand - Quick Reference Guide

## 🎨 Color Palette

### Primary Colors
```css
/* Amber/Gold (Primary) */
--primary: oklch(0.68 0.14 65)      /* #F5A623 approximately */
--accent: oklch(0.72 0.12 60)       /* #FFB347 approximately */

/* Navy (Secondary) */
--secondary: oklch(0.28 0.04 240)   /* #1E3A5F approximately */

/* Backgrounds */
--background: oklch(0.99 0.005 85)  /* Soft cream */
--card: oklch(0.995 0.003 85)       /* Lighter cream */

/* Amber Gradients */
bg-gradient-to-br from-amber-400 to-amber-600
bg-gradient-to-b from-background to-amber-50/30
```

## 📝 Key Messaging

### Main Slogan
**"Your Builder In Your Pocket"**

### Tagline
**"Live Remote Building Inspections via Zoom"**

### Value Propositions
1. **Save Time & Travel** - Inspect from anywhere, anytime
2. **Smart & Reliable** - Advanced technology that catches everything
3. **Clear Answers, Peace of Mind** - Easy-to-understand reports

## 🎯 Design System

### Border Radius
- **Base:** `1.25rem` (increased from 1rem)
- **Cards:** `rounded-3xl` (very soft corners)
- **Buttons:** `rounded-full` (pill shape)
- **Icons:** `rounded-2xl` (soft squares)

### Shadows
```css
/* Soft, subtle shadows for feminine feel */
shadow-lg hover:shadow-xl
shadow-md (for smaller elements)
shadow-2xl (for hero images)
```

### Button Styling
```tsx
{/* Primary CTA */}
<Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg">
  Book My Inspection
</Button>

{/* Secondary CTA */}
<Button variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-amber-50">
  Chat With Us
</Button>
```

### Card Styling
```tsx
<Card className="border-0 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-card">
  <CardContent className="p-8 space-y-6">
    {/* Content */}
  </CardContent>
</Card>
```

### Icon Backgrounds
```tsx
{/* Gradient amber circle */}
<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
  <Video className="h-8 w-8 text-white" />
</div>
```

## 🔄 Before & After Copy

### Hero Headlines
- ❌ **Before:** "AI-Powered Building Inspections"
- ✅ **After:** "Your Builder In Your Pocket"

### Service Names
- ❌ **Before:** "AI Defect Detection"
- ✅ **After:** "Smart & Reliable"

- ❌ **Before:** "Virtual Inspections"
- ✅ **After:** "Save Time & Travel"

- ❌ **Before:** "Instant Reports"
- ✅ **After:** "Clear Answers, Peace of Mind"

### Process Steps
1. ❌ "Book Online" → ✅ "Book in Minutes"
2. ❌ "Get Confirmed" → ✅ "We'll Confirm & Connect"
3. ❌ "Live Inspection" → ✅ "Join Your Personal Inspection"
4. ❌ "Receive Report" → ✅ "Get Your Report Instantly"

### Feature Descriptions
- ❌ "Advanced Technology" → ✅ "Cutting-Edge Care"
- ❌ "Professional Expertise" → ✅ "Expert Support You Can Trust"
- ❌ "Comprehensive Reports" → ✅ "Clear Reports That Make Sense"

## 📱 Component Examples

### Trust Badge
```tsx
<Badge variant="secondary" className="w-fit rounded-full px-4 py-1.5 shadow-sm">
  <Award className="h-3 w-3 mr-1.5" />
  30+ Years of Trusted Expertise
</Badge>
```

### Section Header
```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  <Badge variant="outline" className="mb-4 rounded-full border-primary/30 text-primary">
    What We Offer
  </Badge>
  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
    Expert Support You Can Trust
  </h2>
  <p className="text-lg text-muted-foreground leading-relaxed">
    Combining decades of experience with cutting-edge care
  </p>
</div>
```

### Feature Item
```tsx
<div className="flex gap-4">
  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
    <Heart className="h-7 w-7 text-white" />
  </div>
  <div>
    <h4 className="font-semibold text-lg text-foreground mb-2">
      Confident Decisions
    </h4>
    <p className="text-muted-foreground leading-relaxed">
      Understand your property's condition clearly so you can buy or sell with complete confidence.
    </p>
  </div>
</div>
```

## 🎨 Gradient Backgrounds

### Hero Section
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-background to-amber-50/30 -z-10" />
```

### CTA Section
```tsx
<section className="py-24 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
  {/* Content */}
</section>
```

### Alternating Sections
```tsx
{/* Light amber wash */}
<section className="py-24 bg-gradient-to-b from-background to-amber-50/30">

{/* Plain background */}
<section className="py-24 bg-background">
```

## 🎯 Emotional Keywords for Copy

Use these words/phrases throughout:
- ✅ Peace of mind
- ✅ Confidence
- ✅ Trust
- ✅ Support
- ✅ Care
- ✅ Clarity
- ✅ Protection
- ✅ Empowerment
- ✅ Comfort
- ✅ Guidance
- ✅ Understanding
- ✅ Reassurance

Avoid these words:
- ❌ AI-powered (use "Smart" instead)
- ❌ Advanced (use "Cutting-edge Care")
- ❌ Professional (use "Expert" or "Qualified")
- ❌ Technology (use "Innovation" or omit)
- ❌ Technical jargon

## 📊 Trust Indicators

### Statistics Format
```tsx
<div className="text-center">
  <h3 className="font-bold text-2xl text-foreground mb-3">10,000+</h3>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Happy homeowners served
  </p>
</div>
```

### Social Proof
```tsx
<div className="flex items-center gap-2">
  <div className="flex -space-x-2">
    <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center border-2 border-background">
      <Star className="w-4 h-4 fill-white text-white" />
    </div>
    {/* More stars */}
  </div>
  <div className="text-sm">
    <div className="font-semibold">10,000+ Happy Homeowners</div>
    <div className="text-muted-foreground">99.8% Customer Satisfaction</div>
  </div>
</div>
```

## 🚀 Quick Updates Checklist

When adding new pages/components:
- [ ] Use `bg-primary` for main CTAs (not blue)
- [ ] Use `rounded-full` for buttons
- [ ] Use `rounded-3xl` for cards
- [ ] Add amber gradient icon backgrounds
- [ ] Use warm, supportive copy
- [ ] Focus on benefits, not features
- [ ] Include trust indicators
- [ ] Add generous spacing (p-8, gap-8, etc.)
- [ ] Use soft shadows (shadow-lg, not harsh borders)

## 🎨 Assets Location

All branding assets in `/public/`:
- `/logo.png` - Golden house logo with camera
- `/branding-hero.png` - Main hero image
- `/branding-secondary.png` - Secondary branding
- `/virtual-inspection.png` - Feature section image
- `/defect-detection.png` - Standards section image

---

**This rebrand transforms OpenHomeMate from a corporate tech company to a warm, trustworthy partner for homebuyers. Every element is designed to make users feel supported, confident, and cared for.**
