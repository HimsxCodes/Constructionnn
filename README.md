# JB Engineering — Construction Website

> A premium, production-ready construction company website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

| Category              | Details                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| **Modern Tech Stack** | Next.js 14 (App Router), TypeScript, Tailwind CSS                             |
| **Theming**           | Dark / Light mode with system preference detection & localStorage persistence |
| **Responsive Design** | Mobile-first layout with full tablet & desktop support                        |
| **Performance**       | Next.js Image optimization, code splitting, lazy loading, WebP/AVIF support   |
| **SEO**               | Complete metadata, Open Graph & Twitter cards, Schema.org markup              |
| **Accessibility**     | WCAG 2.1 AA compliant with proper ARIA labels & semantic HTML5                |
| **Animations**        | Smooth Framer Motion animations & scroll-triggered reveals                    |
| **Contact & Quotes**  | Validated contact form with Supabase storage + Resend email notifications     |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Environment variables** _(required for the Get a Quote feature)_

   Copy `.env.local.example` to `.env.local` and provide the following values:

   | Variable                        | Source                                                    |
   | ------------------------------- | --------------------------------------------------------- |
   | `NEXT_PUBLIC_SUPABASE_URL`      | [Supabase](https://supabase.com) → Project Settings → API |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same as above                                             |
   | `RESEND_API_KEY`                | [Resend](https://resend.com)                              |
   | `ADMIN_EMAIL`                   | Receiver email(s) — comma-separated for multiple          |

3. **Start the dev server:**

   ```bash
   npm run dev
   ```

4. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

### Supabase Table Setup (Get a Quote)

Run the following SQL in the Supabase **SQL Editor** to create the `quote_requests` table:

```sql
CREATE TABLE public.quote_requests (
  id         UUID        NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name       TEXT        NOT NULL,
  email      TEXT        NOT NULL,
  phone      TEXT        NOT NULL,
  project_type TEXT      NOT NULL,
  budget     TEXT        NULL,
  message    TEXT        NOT NULL,
  status     TEXT        NOT NULL DEFAULT 'new'::TEXT,
  CONSTRAINT quote_requests_pkey PRIMARY KEY (id)
);

-- Enable Row Level Security (RLS) and allow anonymous inserts for the form
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert for quote form"
  ON public.quote_requests FOR INSERT
  TO anon
  WITH CHECK (true);
```

---

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
constructionnnnn/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, metadata, Navbar, Footer)
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # Custom 404 page
│   ├── globals.css               # Global styles & theme variables
│   ├── about/                    # About page (layout + page)
│   ├── services/                 # Services page
│   ├── projects/                 # Projects listing page
│   │   └── [id]/                 # Dynamic project detail pages
│   ├── contact/                  # Contact page
│   └── api/
│       └── quote/                # Quote request API route (Supabase + Resend)
│
├── components/                   # React components
│   ├── Navbar.tsx                # Responsive navigation with mobile menu
│   ├── Footer.tsx                # Site footer with social links
│   ├── HeroSection.tsx           # Animated hero section with CTAs
│   ├── ServiceCard.tsx           # Service display card
│   ├── ProjectCard.tsx           # Project display card
│   ├── ProjectGallery.tsx        # Filterable project gallery
│   ├── StatsCounter.tsx          # Animated statistics counter
│   ├── ContactForm.tsx           # Contact / quote form with validation
│   ├── BeforeAfterSlider.tsx     # Interactive before/after image slider
│   ├── TestimonialCard.tsx       # Client testimonial card
│   ├── ThemeToggle.tsx           # Dark/light mode toggle with custom icons
│   ├── FadeIn.tsx                # Reusable fade-in animation wrapper
│   └── SchemaMarkup.tsx          # SEO structured data (Schema.org)
│
├── data/                         # Static / mock data
│   ├── projects.ts               # Project listings
│   ├── services.ts               # Service offerings
│   └── testimonials.ts           # Client testimonials
│
├── types/                        # TypeScript type definitions
│   ├── project.ts
│   ├── service.ts
│   └── testimonial.ts
│
├── hooks/                        # Custom React hooks
│   ├── useTheme.ts               # Theme management (dark/light)
│   ├── useCountUp.ts             # Animated number counter
│   └── useScrollAnimation.ts     # Intersection Observer scroll hook
│
├── lib/                          # Utility & integration modules
│   ├── validation.ts             # Form validation helpers
│   ├── supabase.ts               # Supabase client initialisation
│   └── email.ts                  # Resend email integration
│
├── images/                       # Project & branding images
│   ├── logo.png                  # Company logo
│   ├── logo2.png                 # Alternate logo variant
│   ├── heroimage.jpg             # Hero section background
│   └── ...                       # Project-specific images
│
├── public/                       # Static public assets
│
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json
```

---

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the brand palette:

| Token             | Default   | Description                                   |
| ----------------- | --------- | --------------------------------------------- |
| `primary.DEFAULT` | `#FF6B35` | Construction orange — buttons, links, accents |
| `primary.light`   | `#FFA07A` | Lighter tint for hover states                 |
| `primary.dark`    | `#E55A2B` | Darker shade for active states                |
| `slate.dark`      | `#1F2937` | Dark background & text                        |
| `slate.light`     | `#F9FAFB` | Light background                              |

### Fonts

The site uses **Inter** (body) and **Poppins** (headings), loaded via Google Fonts with `display: swap`.

### Content

Update the data files in `data/` to change site content:

- `data/projects.ts` — Add or modify project listings
- `data/services.ts` — Update service offerings
- `data/testimonials.ts` — Add client testimonials

### Images

Place project images in the `images/` directory and reference them in the corresponding data files.

---

## ⚡ Performance

- **Image Optimization** — Next.js `<Image>` component with automatic WebP/AVIF conversion
- **Code Splitting** — Automatic per-route splitting via the App Router
- **Lazy Loading** — Intersection Observer–based loading for galleries and heavy sections
- **Font Loading** — `display: swap` prevents invisible text during font load

---

## 🔍 SEO

- Complete `<meta>` tags for every page (title, description, keywords)
- Open Graph & Twitter Card tags for social sharing
- Schema.org structured data (`LocalBusiness`, `Service`, `AggregateRating`)
- Semantic HTML5 landmarks and proper heading hierarchy
- Robots directives (`index`, `follow`)

---

## 🛠️ Tech Stack

| Technology                                     | Version | Purpose                      |
| ---------------------------------------------- | ------- | ---------------------------- |
| [Next.js](https://nextjs.org)                  | 14.2.5  | React framework (App Router) |
| [TypeScript](https://typescriptlang.org)       | 5.5.3   | Type-safe JavaScript         |
| [Tailwind CSS](https://tailwindcss.com)        | 3.4.4   | Utility-first styling        |
| [Framer Motion](https://www.framer.com/motion) | 11.3.19 | Declarative animations       |
| [Lucide React](https://lucide.dev)             | 0.400.0 | Icon library                 |
| [Supabase](https://supabase.com)               | 2.45.0  | Quote request storage        |
| [Resend](https://resend.com)                   | 4.0.0   | Transactional email          |
| Inter & Poppins                                | —       | Google Fonts                 |

---

## 🌐 Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |

---

## 📝 Development Notes

- All interactive components using Framer Motion are marked with the `"use client"` directive.
- The theme system uses `localStorage` for persistence and respects the user's system preference on first visit.
- Form validation includes email format and phone number pattern checks.
- The `FadeIn` component wraps sections for consistent scroll-triggered entrance animations.

---

## 🐛 Troubleshooting

### PowerShell Execution Policy Error (Windows)

If you encounter script execution errors, use Command Prompt or run:

```powershell
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Framer Motion Module Errors

Clear the Next.js cache and restart:

```bash
rm -rf .next
npm run dev
```

### Supabase / Resend Not Working

- Double-check that `.env.local` exists and contains the correct values.
- Ensure the `quote_requests` table has been created (see setup SQL above).
- Verify that the Resend API key is valid and the sender domain is verified.

---

## 📄 License

This project is **open source**.
