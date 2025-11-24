# DESIGN SYSTEM SPECIFICATION - NETWORK PRO (LinkedIn Remake)

## PIXEL-PERFECT REPLICATION REQUIREMENTS

This document contains EXACT values extracted from the design reference for precise implementation.

---

## COLOR SYSTEM (EXACT HEX CODES)

### Primary Colors
- **Primary Blue**: `#3B82F6` (HSL: 217, 91%, 60%) - Logo, buttons, links, active states
- **Primary Blue Hover**: `#2563EB` (HSL: 221, 83%, 53%) - Button hover states
- **Primary Blue Light**: `#DBEAFE` (HSL: 214, 95%, 93%) - Subtle backgrounds

### Background Colors
- **Page Background**: `#F0F5FB` (HSL: 214, 47%, 96%) - Main page background
- **Card Background**: `#FFFFFF` (HSL: 0, 0%, 100%) - White cards
- **Secondary Background**: `#F8FAFC` (HSL: 210, 20%, 98%) - Subtle sections

### Text Colors
- **Text Primary**: `#1E293B` (HSL: 217, 33%, 17%) - Main text, headings
- **Text Secondary**: `#64748B` (HSL: 215, 16%, 47%) - Metadata, timestamps, descriptions
- **Text Muted**: `#94A3B8` (HSL: 214, 15%, 65%) - Very subtle text

### Border Colors
- **Border Light**: `#E2E8F0` (HSL: 214, 32%, 91%) - Card borders, dividers
- **Border Medium**: `#CBD5E1` (HSL: 214, 32%, 82%) - Input borders

### Functional Colors
- **Success**: `#10B981` (HSL: 158, 64%, 52%) - Success states
- **Warning**: `#F59E0B` (HSL: 38, 92%, 50%) - Warning states
- **Error**: `#EF4444` (HSL: 0, 72%, 60%) - Error states

---

## TYPOGRAPHY (EXACT SPECIFICATIONS)

### Font Family
- **Primary**: `Inter` - Modern, professional sans-serif
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`

### Font Sizes & Line Heights
- **Display**: 32px / 40px (line-height 1.25) - weight 700
- **Heading 1**: 24px / 32px (line-height 1.33) - weight 600
- **Heading 2**: 20px / 28px (line-height 1.4) - weight 600
- **Heading 3**: 18px / 24px (line-height 1.33) - weight 600
- **Body Large**: 16px / 24px (line-height 1.5) - weight 400
- **Body**: 14px / 21px (line-height 1.5) - weight 400
- **Body Small**: 13px / 18px (line-height 1.38) - weight 400
- **Caption**: 12px / 16px (line-height 1.33) - weight 400

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Buttons, emphasized text
- **Semibold**: 600 - Headings, card titles
- **Bold**: 700 - Logo, display text

### Letter Spacing
- **Tight**: -0.02em - Headings
- **Normal**: 0 - Body text
- **Wide**: 0.02em - Uppercase labels

---

## SPACING SYSTEM (EXACT PIXELS)

### Base Unit: 4px

### Spacing Scale
- **xs**: 4px - Tight spacing between related elements
- **sm**: 8px - Small gaps, icon spacing
- **md**: 12px - Medium gaps, list items
- **lg**: 16px - Card content padding, section gaps
- **xl**: 20px - Card padding, large section gaps
- **2xl**: 24px - Major section spacing
- **3xl**: 32px - Page section spacing
- **4xl**: 48px - Large layout spacing

### Specific Component Spacing
- **Card Padding**: 20px
- **Card Gap**: 16px
- **Button Padding**: 10px 20px
- **Input Padding**: 12px 16px
- **Section Margin**: 24px

---

## BORDER RADIUS (EXACT VALUES)

- **Small**: 6px - Input fields, small buttons
- **Medium**: 8px - Buttons, badges, tags
- **Large**: 12px - Cards, modals
- **XLarge**: 16px - Large containers
- **Full**: 9999px - Circular avatars, pills

---

## SHADOWS (EXACT BOX-SHADOW VALUES)

### Card Shadows
- **Card Default**: `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Card Hover**: `0 4px 12px rgba(0, 0, 0, 0.12)`

### Component Shadows
- **Button**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Dropdown**: `0 4px 16px rgba(0, 0, 0, 0.12)`
- **Modal**: `0 8px 32px rgba(0, 0, 0, 0.16)`

### Focus Rings
- **Focus Ring**: `0 0 0 3px rgba(59, 130, 246, 0.2)` - Blue focus state

---

## COMPONENT STYLE SPECIFICATIONS

### Cards
```css
background: #FFFFFF;
border-radius: 12px;
padding: 20px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
border: 1px solid #E2E8F0;
```

### Buttons (Primary)
```css
background: #3B82F6;
color: #FFFFFF;
border-radius: 8px;
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

### Buttons (Secondary)
```css
background: transparent;
color: #3B82F6;
border: 1px solid #3B82F6;
border-radius: 8px;
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
```

### Input Fields
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 6px;
padding: 12px 16px;
font-size: 14px;
color: #1E293B;
```

### Avatar Sizes
- **Small**: 32px - Inline mentions
- **Medium**: 40px - Suggestions, comments
- **Large**: 48px - Profile cards, posts
- **XLarge**: 80px - Profile headers
- **2XLarge**: 120px - Profile pages

---

## LAYOUT SPECIFICATIONS

### Container Widths
- **Max Width**: 1440px - Main content container
- **Sidebar Left**: 260px - Profile sidebar
- **Main Content**: Flexible (min 600px)
- **Sidebar Right**: 300px - Recommendations sidebar

### Breakpoints
- **Mobile**: 0-639px
- **Tablet**: 640-1023px
- **Desktop**: 1024-1439px
- **Large Desktop**: 1440px+

### Grid System
- **Column Gap**: 16px
- **Row Gap**: 16px

---

## ANIMATION & TRANSITIONS

### Durations
- **Fast**: 150ms - Button hovers, simple state changes
- **Normal**: 250ms - Card animations, dropdowns
- **Slow**: 350ms - Page transitions, modals

### Easing Functions
- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth ease in-out
- **Sharp**: `cubic-bezier(0.4, 0, 1, 1)` - Exit animations
- **Entrance**: `cubic-bezier(0, 0, 0.2, 1)` - Enter animations

---

## IMAGE STYLE SYSTEM

### Profile Images
- **Border Radius**: 50% (circular)
- **Aspect Ratio**: 1:1 (square source)
- **Object Fit**: cover

### Content Images
- **Border Radius**: 8px
- **Aspect Ratio**: 16:9 (landscape posts)
- **Shadow**: 0 2px 4px rgba(0, 0, 0, 0.06)

### Company Logos
- **Border Radius**: 4px
- **Aspect Ratio**: 1:1 or 3:2
- **Background**: White or transparent
- **Padding**: 4px (if white background)

---

## ICON SPECIFICATIONS

### Icon Library
- **Primary**: Lucide React
- **Style**: Outline/stroke icons
- **Stroke Width**: 2px

### Icon Sizes
- **Small**: 16px - Inline icons
- **Medium**: 20px - Navigation, buttons
- **Large**: 24px - Feature icons

### Icon Colors
- **Default**: #64748B (text-secondary)
- **Active**: #3B82F6 (primary blue)
- **Muted**: #94A3B8 (text-muted)

---

## ACCESSIBILITY

### Focus States
- All interactive elements have visible focus rings
- Focus ring color: rgba(59, 130, 246, 0.2)
- Focus ring width: 3px

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text)
- Interactive elements meet 3:1 contrast ratio

### Touch Targets
- Minimum 44px x 44px for mobile
- Adequate spacing between interactive elements

---

## NOTES

This design system is based on pixel-perfect extraction from the design reference.
All values are EXACT and should be used precisely for visual consistency.
