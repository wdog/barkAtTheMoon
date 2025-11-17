# Bark At The Moon Hugo Theme - Quick Start Guide

A step-by-step guide to get your blog up and running with the barkAtTheMoon theme.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Configuration](#configuration)
3. [Creating Content](#creating-content)
4. [Customization](#customization)
5. [Tips & Tricks](#tips--tricks)

## Initial Setup

### Prerequisites

Make sure you have:
- Hugo Extended v0.112.0+ installed
- Node.js and npm installed (for TailwindCSS)

### Quick Start

**IMPORTANT: Install npm dependencies in your blog's root directory, NOT in the theme directory.**

```bash
# Navigate to your blog root (where hugo.toml is located)
cd /path/to/your/blog
git init
git submodule add https://github.com/yourusername/barkAtTheMoon themes/barkAtTheMoon

# Install dependencies in the blog root
# IMPORTANT: Use TailwindCSS v3.x (NOT v4) - the theme is built for v3
npm install --save-dev tailwindcss@^3
npm install --save-dev postcss postcss-cli autoprefixer

# Copy required config files to blog root (if not already present)
cp themes/barkAtTheMoon/tailwind.config.js .

# Create postcss.config.js in blog root
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Start development server
hugo server -D

# Build for production
hugo --minify
```

Your site will be available at `http://localhost:1313/`

#### Why Install npm in Blog Root?

**✓ Install Here:** `/your-blog/` (where `hugo.toml` lives)
```
your-blog/
├── node_modules/        ← npm packages go here
├── package.json         ← npm config goes here
├── hugo.toml
├── content/
└── themes/
    └── barkAtTheMoon/   ← DON'T install npm here
```

**Reasons:**
1. **Theme is a git submodule** - Installing npm in the theme complicates updates and version control
2. **Tailwind config references blog root** - The `tailwind.config.js` paths start from `./`, meaning your blog's root directory
3. **Better control** - You can update TailwindCSS versions independently from the theme
4. **Standard Hugo practice** - Most Hugo themes expect dependencies at the project root
5. **Easier deployment** - Build systems expect `node_modules/` and `package.json` at the project root

## Configuration

### Basic Configuration

Edit `hugo.toml` in your site root:

```toml
baseURL = 'https://yourdomain.com/'
languageCode = 'en-us'
title = 'Your Blog Title'
theme = 'barkAtTheMoon'

[params]
    brand = "Your Name"
    brand_image = "/images/profile.jpg"
    description = "Your Tagline"
```

### Profile Image

1. Add your profile photo to `/static/images/profile.jpg`
2. Recommended size: 400x400px (square format)
3. Update path in `hugo.toml`: `brand_image = "/images/profile.jpg"`

### Social Links

Add your social media profiles in `hugo.toml`:

```toml
[params]
    email_url = "mailto:you@example.com"
    github_url = "https://github.com/yourusername"
    linkedin_url = "https://www.linkedin.com/in/yourprofile/"
    twitter_url = "https://twitter.com/yourusername"
```

Supported platforms: GitHub, LinkedIn, Twitter/X, Email, Facebook, Instagram, YouTube, Mastodon, Bluesky, Discord, Telegram, Signal, GitLab, Flickr, Matrix, XMPP, and more.

### Menu Configuration

Configure your sidebar/mobile menu:

```toml
[params]
      menu = [
        {Name = "Posts", URL = "/posts/", HasChildren = true,Limit = 5},
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Links", URL = "/links/", HasChildren = true},
        {Name = "Contact", URL = "/contact/", HasChildren = false},
      ]
```

**Menu item properties:**
- `Name` - Display text
- `URL` - Link destination
- `Pre` - Optional prefix text (e.g., "Recent")
- `HasChildren` - Show child content (for sections like Posts)
- `Limit` - Max items to show if HasChildren is true

## Creating Content

### Quick start - Create Common Sections

```bash
# Content from content/_index.md will appear between description and navigation links
hugo new content/_index.md

# static pages
hugo new content/about/_index.md
hugo new content/contact/_index.md

# post
hugo new content/posts/my-first-post.md

# link
hugo new content/links/useful-resource.md

```


### Blog Posts

Create a new post:

```bash
hugo new content/posts/my-first-post.md
```

Edit the frontmatter:

```yaml
---
title: "My First Post"
date: 2025-11-16
draft: false
tags: ["hugo", "blogging", "web-dev"]
---

Your content here...
```

**Post Features:**
- Automatic year grouping in lists
- Tag support with clickable badges
- Elegant "book index" style layout
- Table of contents support
- Dark mode optimized

### About Page

Create an About page:

```bash
hugo new content/about/_index.md
```

```yaml
---
title: "About"
layout: single
---

## Who I Am

Write about yourself here...
```

### Contact Page

The Contact page automatically displays your social links from `hugo.toml`:

```bash
hugo new content/contact/_index.md
```

```yaml
---
title: "Get in Touch"
layout: contact
---

Let's connect! I'm always open to discussing new projects.
```

The page will automatically show cards for:
- Email (if `email_url` is set)
- LinkedIn (if `linkedin_url` is set)
- GitHub (if `github_url` is set)
- Twitter/X (if `twitter_url` or `x_url` is set)

### Links Collection

Create a Links section to share useful resources:

**1. Create the section index:**

```bash
mkdir -p content/links
```

Create `content/links/_index.md`:

```yaml
---
title: "Links"
---

A curated collection of useful resources.
```

**2. Add individual links:**

```bash
hugo new content/links/hugo-docs.md
```

Edit the link:

```yaml
---
title: "Hugo Documentation"
link: "https://gohugo.io/documentation/"
description: "The official Hugo documentation"
tags: ["hugo", "documentation"]
---
```

**Important:** Use `link` (not `url`) for external URLs. Hugo reserves `url` for internal routing.

### Homepage Content

Edit `content/_index.md` to customize your homepage:

```yaml
---
title: "Welcome"
---

Your homepage introduction text here...
```

This appears between your profile and navigation links.

## Customization

### Dark Mode

Dark mode is automatic! Users can toggle between light/dark with the button in:
- Sidebar (desktop)
- Top-right corner (mobile)

Their preference is saved in localStorage.

### Colors - How to Customize Your Blog

The barkAtTheMoon theme uses a **powerful dual-layer color system** that makes customization easy and flexible.

#### Quick Start: Two Ways to Change Colors

1. **Global Color Change** (Recommended) - Change the entire color scheme
2. **Specific Overrides** - Change individual elements only

---

#### Method 1: Global Color Change (Easiest!)

**Edit this file:** `themes/barkAtTheMoon/tailwind.config.js`

The theme uses two color palettes:

| Palette | Controls |
|---------|----------|
| **`gray`** | Sidebar, backgrounds, borders, neutral text |
| **`primary`** | Links, buttons, tags, headings, accents |

**Example - Purple Theme:**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Sidebar colors
        gray: {
          200: '#e9d5ff',  // Light purple links
          300: '#d8b4fe',  // Icons, descriptions
          600: '#a855f7',  // Dividers
          700: '#581c87',  // Sidebar background ← MAIN COLOR
          800: '#6b21a8',  // Hover backgrounds
          900: '#4c1d95',  // Borders
        },
        // Accent colors
        primary: {
          100: '#fae8ff',  // Tag backgrounds
          200: '#f5d0fe',  // Active links
          300: '#f0abfc',  // Hover effects
          500: '#a855f7',  // Primary accent
          600: '#9333ea',  // Headings
          700: '#7e22ce',  // Dark text
          900: '#581c87',  // Active backgrounds
        }
      }
    }
  }
}
```

**More Quick Examples:**

```js
// Green Theme
gray: { 700: '#166534' }    // Dark green sidebar
primary: { 500: '#22c55e' }  // Green accents

// Blue Theme (default)
gray: { 700: '#1e3a8a' }    // Dark blue sidebar
primary: { 500: '#3b82f6' }  // Blue accents

// Charcoal Theme
gray: { 700: '#1f2937' }    // Charcoal sidebar
primary: { 500: '#60a5fa' }  // Bright blue accents

// Orange Theme
gray: { 700: '#78350f' }    // Brown sidebar
primary: { 500: '#f59e0b' }  // Amber accents
```

**Steps:**
1. Edit `tailwind.config.js`
2. Save the file
3. Hugo rebuilds automatically
4. Refresh browser (`Ctrl+Shift+R`)
5. Done! ✅

---

#### Method 2: Specific Element Overrides

**Want to change ONLY the sidebar? Or just the tags?**

**Edit this file:** `themes/barkAtTheMoon/assets/css/main.css`

**Example - Red Sidebar Only:**

```css
/* Add inside @layer base in main.css */
@layer base {
  :root {
    --sidebar-bg: #dc2626;        /* Red sidebar */
    --sidebar-border: #991b1b;    /* Dark red border */
    --sidebar-link: #fef2f2;      /* Cream links */
  }

  .dark {
    --sidebar-bg: #991b1b;  /* Darker in dark mode */
  }
}
```

**Example - Green Tags Only:**

```css
@layer base {
  :root {
    --badge-bg: #dcfce7;      /* Light green */
    --badge-text: #166534;    /* Dark green */
  }
}
```

**All Available CSS Variables:**

| Variable | What It Controls |
|----------|------------------|
| `--sidebar-bg` | Sidebar background |
| `--sidebar-border` | Sidebar border |
| `--sidebar-title` | Your site name |
| `--sidebar-title-hover` | Site name hover |
| `--sidebar-link` | Menu links |
| `--sidebar-link-hover-bg` | Link hover background |
| `--sidebar-link-active` | Active page link |
| `--sidebar-description` | Description text |
| `--sidebar-icon` | Social icons |
| `--sidebar-divider` | Divider lines |
| `--sidebar-credit` | Credits text |
| `--badge-bg` | Tag background |
| `--badge-text` | Tag text |
| `--badge-serie-bg` | Series badge background |
| `--badge-serie-text` | Series badge text |

📖 **Complete guide:** See `assets/css/THEMING.md` for detailed documentation

---

#### Which Method Should I Use?

| What You Want | Method | File to Edit |
|---------------|--------|--------------|
| Change entire color scheme | 1 | `tailwind.config.js` |
| Change only sidebar | 2 | `main.css` |
| Change only tags | 2 | `main.css` |
| Quick experiment | 2 | `main.css` |
| Professional theme | 1 | `tailwind.config.js` |

💡 **Pro tip:** Use Method 2 to experiment, then Method 1 for your final design.

---

### Custom CSS

Add your own custom styles to `themes/barkAtTheMoon/assets/css/main.css`:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary-600 text-white rounded-lg p-4;
  }
}
```

**Built-in CSS classes:**
- `.tag-badge` - Tag badge styling
- `.tag-count` - Tag count pill
- `.sidebar` - Sidebar layout
- `.sidebar-link` - Menu links
- `.sidebar-icon` - Social icons

### Typography

The theme includes beautiful typography with progressive color gradation:

- **H1**: `text-primary-700` (darkest)
- **H2**: `text-primary-600`
- **H3**: `text-primary-500`
- **H4**: `text-primary-400`
- **H5**: `text-gray-700`
- **H6**: `text-gray-600` (lightest)

All headings automatically adjust for dark mode.

### Override Theme Templates

To customize any theme template, copy it from `themes/barkAtTheMoon/layouts/` to your site's `layouts/` directory with the same path.

**Example - Custom Homepage:**

1. Copy `themes/barkAtTheMoon/layouts/index.html`
2. To `layouts/index.html` (in your site root)
3. Edit your copy
4. Hugo will use your version instead of the theme's

**Common customizations:**
- `layouts/index.html` - Homepage
- `layouts/partials/sidebar.html` - Sidebar
- `layouts/_default/single.html` - Single post layout

## Tips & Tricks

### Writing Tips

**Use tags effectively:**
```yaml
tags: ["hugo", "tutorial", "web-dev", "beginners"]
```
- Keep tags consistent (lowercase, hyphenated)
- 3-5 tags per post is ideal
- Tags create automatic categorization

**Drafts vs Published:**
```yaml
draft: true   # Won't appear in production builds
draft: false  # Will appear in all builds
```

Use `hugo server -D` to preview drafts locally.

### Content Organization

**Recommended structure:**
```
content/
├── _index.md           # Homepage content
├── about/
│   └── _index.md       # About page
├── contact/
│   └── _index.md       # Contact page
├── links/
│   ├── _index.md       # Links section intro
│   ├── resource-1.md   # Individual links
│   ├── resource-2.md
│   └── resource-3.md
└── posts/
    ├── 2025-01-first-post.md
    ├── 2025-02-second-post.md
    └── 2025-03-third-post.md
```

**Tip:** Prefix post filenames with dates (YYYY-MM-) for easy sorting in your file explorer.

### SEO Best Practices

**Use descriptive titles:**
```yaml
title: "How to Build a Hugo Theme with TailwindCSS"  # Good
title: "My Post"  # Not descriptive
```

**Add meta description in frontmatter:**
```yaml
description: "A complete guide to building modern Hugo themes with TailwindCSS, including setup, configuration, and deployment."
```

**Use proper heading hierarchy:**
```markdown
# Post Title (H1 - only one per post)

## Main Section (H2)

### Subsection (H3)

#### Detail (H4)
```

### Performance Tips

**Optimize images:**
- Use WebP format when possible
- Compress images before uploading
- Recommended max width: 1200px for content images

**Production build:**
```bash
hugo --minify
```

This minifies HTML, CSS, and optimizes the build.

### Markdown Features

**Code blocks with syntax highlighting:**

````markdown
```go
func main() {
    fmt.Println("Hello, World!")
}
```
````

**Blockquotes:**
```markdown
> This is a quote with beautiful border-left styling
```

**Lists:**
```markdown
- Unordered list
- With bullet points

1. Ordered list
2. With numbers
```

**Links:**
```markdown
[Link text](https://example.com)
```

**Images:**
```markdown
![Alt text](/images/my-image.jpg)
```

### Development Workflow

**Local development:**
```bash
# Start server with drafts
hugo server -D

# Auto-opens browser and live-reloads on changes
hugo server -D --navigateToChanged
```

**Build for production:**
```bash
# Clean build
hugo --gc --minify

# Output is in /public/ directory
```

### Common Issues

**CSS not updating?**
```bash
# Clear Hugo cache
hugo --gc

# Restart server
```

**PostCSS error?**
```bash
# Reinstall dependencies
npm install
```

**Port already in use?**
```bash
# Hugo will automatically find available port
hugo server -D
```

## Going Further

### Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

### Community

- Report bugs: [GitHub Issues](https://github.com/wdog/barkAtTheMoon/issues)
- Share your site: Tag @barkAtTheMoon on social media

### Deployment

The theme works with any Hugo-compatible hosting:

- **Netlify**: Drag & drop `/public` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **CloudFlare Pages**: Connect repository

**Build command:** `hugo --minify`
**Publish directory:** `public`

---

## Quick Reference Card

### Common Commands

```bash
# Create content
hugo new content/posts/my-post.md
hugo new content/links/my-link.md

# Development
hugo server -D              # Start with drafts
hugo server -D --bind 0.0.0.0  # Access from other devices

# Production
hugo --minify              # Build optimized site

# Maintenance
hugo --gc                  # Clean cache
```

### Frontmatter Cheatsheet

**Post:**
```yaml
---
title: "Post Title"
date: 2025-11-16
draft: false
tags: ["tag1", "tag2"]
---
```

**Link:**
```yaml
---
title: "Link Title"
link: "https://example.com"
description: "Brief description"
tags: ["tag1", "tag2"]
---
```

**Page:**
```yaml
---
title: "Page Title"
layout: single  # or contact
---
```

---

**Happy blogging with barkAtTheMoon! 🌙**
