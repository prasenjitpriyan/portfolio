# Prasenjit Das — Portfolio

A modern, performant developer portfolio built with **Next.js 15**, **Sanity Studio** (CMS), and **TypeScript**. Features project showcases, GitHub activity, CodePen creations, and a working contact form.

## ✨ Features

- 🎨 Animated hero, project cards with hover effects, and smooth page transitions
- 📁 **Sanity Studio** CMS for managing projects at `/studio`
- 🐙 Live **GitHub** repository and language stats
- 🖊️ **CodePen** best pens integration
- 📬 Working **contact form** via SMTP (Gmail)
- 🛡️ HTTP security headers (CSP, HSTS, X-Frame-Options, etc.)
- ⚡ ISR (Incremental Static Regeneration) for fast, fresh content

## 🛠️ Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 15 (App Router) |
| CMS        | Sanity Studio v3        |
| Language   | TypeScript              |
| Styling    | Tailwind CSS            |
| Animation  | Framer Motion           |
| Email      | Nodemailer + Gmail SMTP |
| Deployment | Vercel                  |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Sanity](https://sanity.io) account and project
- A GitHub personal access token
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833)

### 1. Clone and install

```bash
git clone https://github.com/prasenjitpriyan/portfolio.git
cd portfolio
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# GitHub (for activity section)
GITHUB_TOKEN=your_github_pat

# Contact form (Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECEIVER_EMAIL=your@gmail.com
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/studio](http://localhost:3000/studio) for Sanity Studio.

## 📂 Project Structure

```
app/
  (website)/        # Public portfolio routes
  (admin)/studio/   # Sanity Studio
  api/
    contact/        # Contact form email API
    github/         # GitHub proxy API
components/         # Reusable UI components
data/               # Static data (nav links, social links)
sanity/schemas/     # Sanity content schemas
lib/                # GitHub & CodePen data fetching
types/              # TypeScript interfaces
```

## 🗂️ Adding Projects via Sanity Studio

1. Go to `/studio` and sign in
2. Click **Project → Create new**
3. Fill in: **Title**, **Slug** (auto-generated), **Order** (1 = first), **Category**, images, description, technologies, and links
4. Publish — the site automatically updates

> The **Order** field controls display sequence. Set it to `1` for your first project, `2` for the second, etc. Display numbers (`01`, `02`…) are generated automatically.

## 🔒 Security

- All HTTP responses include security headers (HSTS, X-Frame-Options, CSP, Permissions-Policy)
- Contact form inputs are sanitised and length-limited before being embedded in emails
- GitHub API proxy uses a path allowlist to prevent SSRF

## 📄 License

MIT
