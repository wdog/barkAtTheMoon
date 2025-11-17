# Bark At The Moon Hugo Theme 🌙

A modern, minimal Hugo theme built with TailwindCSS.

## ✨ Features

- **TailwindCSS** - Modern utility-first CSS framework with full customization
- **Dark Mode** - Smart toggle between light and dark themes with localStorage persistence
- **Responsive Design** - Mobile-first with hamburger menu and touch-friendly navigation
- **Fixed Sidebar** - Elegant sidebar navigation (desktop) with mobile drawer
- **Customizable Homepage** - Beautiful landing page with profile image and social links
- **Special Page Layouts** - Pre-built elegant layouts for Contact, Links, and more
- **Tag System** - Beautiful tag pages with cloud view and filtering
- **Book-Style Lists** - Elegant post lists with dotted leaders, inspired by book indexes
- **Fast Performance** - Optimized build with Hugo Pipes and PostCSS
- **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation
- **No External Dependencies** - All JavaScript and CSS bundled, no CDN required

## Installation

The theme is already installed in the `themes/barkAtTheMoon` directory.

### Prerequisites

- Hugo v0.112.0 or higher (extended version)
- Node.js and npm (for TailwindCSS)

### Setup

1. Install npm dependencies (already done):
   ```bash
   npm install
   ```

2. Switch to the theme in `hugo.toml`:
   ```toml
   theme = 'barkAtTheMoon'
   ```

3. Build the site:
   ```bash
   hugo
   ```

4. Or run the development server:
   ```bash
   hugo server -D
   ```

## ⚙️ Configuration

### Complete Configuration Example

Here's a full example of all available theme options in `hugo.toml`:

```toml
baseURL = 'https://yourblog.com/'
languageCode = 'en-us'
title = 'Your Site Title'
theme = 'barkAtTheMoon'

[pagination]
    pagerSize = 10

[params]
    # === BRAND & IDENTITY ===
    brand = "Your Name"                    # Site name/your name
    brand_image = "/images/profile.jpg"    # Profile photo (square, min 400x400px recommended)
    description = "Software Developer"      # Your tagline/role

    # === HOMEPAGE ===
    # Content from content/_index.md will appear between description and navigation links

    # === SIDEBAR & NAVIGATION ===
    # Menu configuration for sidebar (desktop) and mobile menu
    # Each menu item supports:
    #   - Name: Display text
    #   - URL: Link destination
    #   - Pre: Optional prefix text (e.g., "Recent")
    #   - HasChildren: If true, shows children content
    #   - Limit: Max items to show if HasChildren is true
    menu = [
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Projects", URL = "/projects/", HasChildren = false},
        {Name = "Contact", URL = "/contact/", HasChildren = false},
    ]

    # Optional sidebar about section
    sidebar_about = "A brief bio that appears in the sidebar below social links."

    # === SOCIAL LINKS ===
    # Comment out or remove any you don't use
    email_url = "mailto:you@example.com"
    github_url = "https://github.com/yourusername"
    linkedin_url = "https://www.linkedin.com/in/yourprofile/"
    twitter_url = "https://twitter.com/yourusername"
    # Other supported platforms:
    # discord_url, facebook_url, flickr_url, gitlab_url,
    # instagram_url, mastodon_url, matrix_url, telegram_url,
    # youtube_url, signal_url, bluesky_url, etc.

    # === THEME SETTINGS ===
    show_theme_credit = true    # Show "Theme: barkAtTheMoon" in sidebar/footer

[taxonomies]
    series = 'series'
    tags = 'tags'
```

### Configuration Options Explained

#### Brand & Identity

| Option | Type | Description | Example |
|--------|------|-------------|---------|
| `brand` | String | Your name or site title | `"John Doe"` |
| `brand_image` | Path | Profile image path (relative to `/static/`) | `"/images/profile.jpg"` |
| `description` | String | Tagline or short bio | `"Software Engineer & Writer"` |

**Profile Image Tips:**
- Recommended size: 400x400px or larger
- Square format works best (will be displayed as circle)
- Formats: JPG, PNG, WebP
- Place in `/static/images/` directory

#### Menu Configuration

Each menu item is an object with these properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Name` | String | Yes | Display text in menu |
| `URL` | Path | Yes | Link destination (relative or absolute) |
| `Pre` | String | No | Prefix text (shows before Name) |
| `HasChildren` | Boolean | No | Show child items/recent posts |
| `Limit` | Integer | No | Max items to show (if HasChildren=true) |

**Examples:**

```toml
# Simple link (page)
{Name = "About", URL = "/about/", HasChildren = false}

# List with recent posts (shows last 5)
{Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5}

# External link
{Name = "GitHub", URL = "https://github.com/yourusername", HasChildren = false}
```

#### Social Links

All social links are optional. The theme automatically:
- Shows icons for configured platforms
- Opens external links in new tab
- Includes proper ARIA labels for accessibility

**Supported platforms:**
- `email_url` - mailto: link
- `github_url` - GitHub profile
- `linkedin_url` - LinkedIn profile
- `twitter_url` / `x_url` - Twitter/X profile
- `facebook_url`, `instagram_url`, `youtube_url`
- `mastodon_url`, `bluesky_url` - Fediverse platforms
- `discord_url`, `telegram_url`, `signal_url` - Messaging
- And more... (see full list in hugo.toml example)

### Additional Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `sidebar_about` | String | (empty) | Text for sidebar "About" section |
| `show_theme_credit` | Boolean | `false` | Show "Theme: barkAtTheMoon" credit |

**Note:** This theme has **no footer** by design. The sidebar contains all navigation and credits.

## Creating Content

### Blog Posts

Create a new post:
```bash
hugo new content/posts/my-post.md
```

Standard post frontmatter:
```yaml
---
title: "My Post Title"
date: 2025-11-16
draft: false
tags: ["tag1", "tag2"]
---

Your content here...
```

**Posts features:**
- Automatic year grouping in list views
- Tag support with badge styling
- Elegant "book index" style list layout
- Dotted leader between title and date

### Pages

Create a new page (About, Contact, etc.):
```bash
hugo new content/about/_index.md
```

For pages to appear in the sidebar menu, add them to the `menu` parameter in `hugo.toml`.

### Special Page Layouts

The theme includes several specialized layouts for different content types:

#### 1. Contact Page (`layout: contact`)

Creates an elegant contact page with your social links.

**Example:** `content/contact/_index.md`
```yaml
---
title: "Get in Touch"
layout: contact
---

Let's connect! I'm always open to discussing new projects.
```

The contact page automatically displays:
- Email (if `email_url` is set)
- LinkedIn (if `linkedin_url` is set)
- GitHub (if `github_url` is set)
- Twitter/X (if `twitter_url` or `x_url` is set)

Each contact method appears as a clean list item with icon, title, description, and link.

#### 2. Links Page

Display a curated collection of useful links with tags and descriptions.

**Create the links section:** `content/links/_index.md`
```yaml
---
title: "Links"
---

A curated collection of useful resources.
```

**Add individual links:**
```bash
hugo new content/links/my-link.md
```

This creates a new link file with the following structure:

```yaml
---
title: "My Link"
date: 2025-11-16
draft: false
link: "https://example.com"
description: "Brief description of the link"
tags: ["tag1", "tag2"]
---
```

**Link frontmatter:**
- `title` (required) - Link name
- `link` (required) - Destination URL (use `link`, not `url` - Hugo reserves `url` for internal routing)
- `description` (optional) - Brief description, or use content body for longer text
- `tags` (optional) - Array of tag strings
- `date` (optional) - Used for sorting

**Examples:**

```bash
# Create links
hugo new content/links/hugo-docs.md
hugo new content/links/tailwindcss.md
hugo new content/links/my-github.md
```

Then edit each file:

```yaml
---
title: "Hugo Documentation"
link: "https://gohugo.io/documentation/"
description: "The official Hugo documentation"
tags: ["hugo", "documentation"]
---
```

**Features:**
- Each link is a separate markdown file
- Elegant vertical list with icons
- External link indicator
- Tag badges for categorization
- Hover effects on links
- Dark mode support
- Optional longer description in content body

#### 3. About Page (`layout: single`)

Standard single page layout for About, Projects, or any custom page.

**Example:** `content/about/_index.md`
```yaml
---
title: "About"
layout: single
---

Your about content in markdown...
```

#### 4. Tags

The theme automatically creates beautiful tag pages:

- **All Tags** (`/tags/`) - Cloud view and alphabetical list with counts
- **Single Tag** (`/tags/tagname/`) - All posts with that tag, grouped by year

**Tag features:**
- Consistent badge styling across all pages
- Clickable tags on posts
- Tag count indicators
- Alphabetical and popularity sorting

### Homepage Content

Edit `content/_index.md` to customize the homepage content that appears below the title and description.

## Customization

### Homepage Customization

The theme provides a default homepage with:
- Profile image (centered, circular)
- Brand name and description
- Navigation links
- Social icons
- Dark mode toggle

**To use a custom homepage:**

1. Create `layouts/index.html` in your site root (NOT in the theme directory)
2. Your custom homepage will automatically override the theme's default

Example custom homepage structure:
```go
{{ define "main" }}
<div class="my-custom-homepage">
    <!-- Your custom HTML here -->
    <!-- You can still use .Site.Params.brand, .Site.Params.description, etc. -->
</div>
{{ end }}
```

**See example:** A custom homepage example (without TailwindCSS) is available at:
```
themes/barkAtTheMoon/exampleSite/layouts/index.html.custom-example
```

This is the old-style homepage that uses custom CSS classes.

### Tailwind Configuration

Customize TailwindCSS in `tailwind.config.js`:
- Colors
- Fonts
- Spacing
- Breakpoints
- And more...

### Custom CSS

The theme includes several custom CSS classes and components defined in `themes/barkAtTheMoon/assets/css/main.css`.

**Built-in CSS Classes:**

```css
/* Tag badges - used across posts, tags pages, and links */
.tag-badge {
  /* Small rounded badge with hover effect */
}

.tag-count {
  /* Pill-shaped counter for tag counts */
}

/* Sidebar positioning */
.sidebar {
  /* Fixed sidebar with mobile drawer behavior */
}
```

**Typography hierarchy:**
- **H1-H6**: Progressive color gradation from `primary-700` to `gray-600`
- **Links**: Consistent hover effects with `primary` color
- **Code blocks**: Syntax highlighting support
- **Blockquotes**: Border-left accent style

**Add your own custom styles:**

```css
@layer components {
  .my-custom-component {
    @apply bg-primary-600 text-white rounded-lg p-4;
  }
}
```

**Color customization:**

Edit `tailwind.config.js` to customize the primary color palette:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Customize these values
          50: '#eff6ff',
          // ... through to ...
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Template Overrides

**Hugo Template Hierarchy:**

Hugo uses a template hierarchy system. Files in your site's `layouts/` directory will **always override** the theme's templates.

To override any theme template:

1. Create the same file path in your site's `layouts/` directory
2. Your file will be used instead of the theme's version

Example override structure:
```
YOUR-SITE/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html    # Override base template
│   │   ├── single.html    # Override single page template
│   │   └── list.html      # Override list template
│   ├── partials/
│   │   ├── sidebar.html   # Override sidebar
│   │   ├── mobile-bar.html # Override mobile top bar
│   │   └── head.html      # Override HTML head
│   └── index.html         # Override homepage
└── themes/barkAtTheMoon/
    └── layouts/
        └── ... (theme templates - will be ignored if overridden)
```

**Common customizations:**
- **Homepage**: Create `layouts/index.html` to fully customize the landing page
- **Sidebar**: Create `layouts/partials/sidebar.html` to modify navigation
- **Mobile Bar**: Create `layouts/partials/mobile-bar.html` to customize mobile header
- **Single post layout**: Create `layouts/_default/single.html` to change post display
- **List/archive layout**: Create `layouts/_default/list.html` to modify archive pages

## Theme Structure

```
barkAtTheMoon/
├── archetypes/
│   ├── default.md         # Default content template
│   └── links.md           # Links archetype (for content/links/)
├── assets/
│   └── css/
│       └── main.css       # TailwindCSS entry point with custom components
├── layouts/
│   ├── _default/
│   │   ├── baseof.html    # Base template
│   │   ├── single.html    # Single post/page
│   │   ├── list.html      # Default list/archive pages
│   │   └── contact.html   # Contact page layout
│   ├── links/
│   │   └── list.html      # Links collection layout
│   ├── posts/
│   │   └── list.html      # Posts list with year grouping
│   ├── tags/
│   │   ├── list.html      # Single tag page
│   │   └── terms.html     # All tags overview
│   ├── partials/
│   │   ├── head.html      # HTML head
│   │   ├── sidebar.html   # Sidebar (desktop fixed, mobile drawer)
│   │   └── mobile-bar.html # Mobile top bar with hamburger menu
│   └── index.html         # Homepage (centered layout)
├── static/
│   └── js/
│       └── darkmode.js    # Dark mode toggle & mobile menu
├── theme.toml             # Theme metadata
└── README.md              # This file
```

**Design Notes:**
- No header or footer by design - navigation lives in the sidebar
- Mobile-first responsive design with hamburger menu
- Dark mode toggle integrated into sidebar (desktop) and homepage (mobile)
- Consistent "book index" style across all list layouts
- Unified tag badge styling with CSS classes

## Development

### Building CSS

TailwindCSS is processed automatically by Hugo Pipes during the build. No separate build step is required.

### Production Build

For production, use:
```bash
hugo --minify
```

This will:
- Minify HTML
- Minify and fingerprint CSS
- Optimize the output

## Troubleshooting

### PostCSS Error

If you see a PostCSS error, make sure:
1. Node.js and npm are installed
2. Dependencies are installed: `npm install`
3. `postcss.config.js` exists in the project root

### CSS Not Loading

If CSS doesn't load:
1. Check that Hugo extended version is installed: `hugo version`
2. Verify `assets/css/main.css` exists in the theme
3. Clear Hugo cache: `hugo --gc`

## License

MIT License

## Credits

Created by Carlo Chech
Built with Hugo and TailwindCSS
