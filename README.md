# JB Engineering Construction Website

A production-ready construction company website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Dark/Light Mode**: Complete theme system with system preference detection
- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Performance Optimized**: Image optimization, code splitting, and lazy loading
- **SEO Ready**: Complete metadata, Open Graph tags, and schema markup
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Animations**: Smooth Framer Motion animations throughout
- **Form Validation**: Robust client-side validation for contact forms

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── projects/          # Projects listing and detail pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Footer.tsx        # Footer component
│   ├── HeroSection.tsx   # Hero section with CTAs
│   ├── ServiceCard.tsx   # Service display card
│   ├── ProjectCard.tsx   # Project display card
│   ├── ProjectGallery.tsx # Project gallery with filtering
│   ├── StatsCounter.tsx  # Animated statistics counter
│   ├── ContactForm.tsx   # Contact form with validation
│   ├── BeforeAfterSlider.tsx # Interactive before/after slider
│   ├── TestimonialCard.tsx # Client testimonial card
│   ├── ThemeToggle.tsx   # Dark/light mode toggle
│   └── SchemaMarkup.tsx  # SEO schema markup
├── data/                  # Mock data
│   ├── projects.ts       # Project data
│   ├── services.ts       # Service data
│   └── testimonials.ts   # Testimonial data
├── types/                 # TypeScript type definitions
│   ├── project.ts
│   ├── service.ts
│   └── testimonial.ts
├── hooks/                 # Custom React hooks
│   ├── useTheme.ts       # Theme management hook
│   ├── useCountUp.ts     # Number animation hook
│   └── useScrollAnimation.ts # Scroll animation hook
└── lib/                   # Utility functions
    └── validation.ts     # Form validation utilities
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- Primary: `#FF6B35` (construction orange)
- Dark Slate: `#1F2937`

### Content

Update data files in the `data/` directory:
- `data/projects.ts` - Add/modify project listings
- `data/services.ts` - Update service offerings
- `data/testimonials.ts` - Add client testimonials

### Images

Place project images in `public/projects/` directory and update image paths in project data.

## Performance

- Images optimized with Next.js Image component
- Automatic code splitting via App Router
- Lazy loading for project galleries
- WebP/AVIF image formats supported

## SEO

- Complete metadata for all pages
- Open Graph tags for social sharing
- Schema.org markup for LocalBusiness, Service, and AggregateRating
- Semantic HTML5 structure
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tech Stack Details

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.4
- **Animations**: Framer Motion 11.3.19
- **Icons**: Lucide React 0.400.0
- **Fonts**: Inter & Poppins (Google Fonts)

## Development Notes

- All components using framer-motion are marked with `"use client"` directive
- Theme system uses localStorage for persistence
- Form validation includes email and phone number validation
- Images are optimized using Next.js Image component with WebP/AVIF support

## Troubleshooting

### PowerShell Execution Policy Error
If you encounter PowerShell script execution errors on Windows, use Command Prompt (cmd.exe) instead, or run:
```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Framer Motion Errors
If you see framer-motion module errors, clear the Next.js cache:
```bash
rm -rf .next
npm run dev
```

## License

This project is proprietary and confidential.
