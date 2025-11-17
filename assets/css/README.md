# CSS Helper System - barkAtTheMoon Theme

## Overview

This theme uses a system of **CSS Variables** and **semantic classes** to allow easy customization without modifying HTML templates.

## How It Works

### 1. CSS Variables (`:root`)

All color variables are defined in `main.css` in the `:root` section. You can modify these values to change the theme colors.

**Location**: `/themes/barkAtTheMoon/assets/css/main.css` (lines 5-46)

### 2. Semantic Classes

HTML templates use semantic classes instead of direct Tailwind utilities. This allows you to change styles by modifying only the CSS.

---

## Sidebar - CSS Variables

### Background and Borders

```css
--sidebar-bg: theme('colors.gray.700');
--sidebar-bg-dark: theme('colors.gray.800');
--sidebar-border: theme('colors.gray.900');
--sidebar-border-dark: theme('colors.gray.700');
```

**Used for**: Sidebar background and border

**How to modify**:
```css
:root {
  --sidebar-bg: theme('colors.blue.900');  /* Change sidebar background */
  --sidebar-border: theme('colors.blue.700'); /* Change border */
}
```

---

### Site Title

```css
--sidebar-title: theme('colors.white');
--sidebar-title-hover: theme('colors.primary.300');
```

**Used for**: Site name in the sidebar

**Template**: `<a class="sidebar-title">`

**How to modify**:
```css
:root {
  --sidebar-title: theme('colors.yellow.400'); /* Yellow title */
  --sidebar-title-hover: theme('colors.yellow.300');
}
```

---

### Description

```css
--sidebar-description: theme('colors.gray.300');
```

**Used for**: Subtitle/description under the site name

**Template**: `<p class="sidebar-description">`

---

### Menu Links

```css
--sidebar-link: theme('colors.gray.200');
--sidebar-link-hover: theme('colors.white');
--sidebar-link-hover-bg: theme('colors.gray.800');
--sidebar-link-active: theme('colors.primary.200');
--sidebar-link-active-bg: theme('colors.primary.900');
```

**Used for**: Navigation links in the sidebar (Home, About, Posts, etc.)

**Template**: `<a class="sidebar-link">` and `<a class="sidebar-link active">`

**How to modify**:
```css
:root {
  --sidebar-link: theme('colors.blue.200');
  --sidebar-link-hover: theme('colors.white');
  --sidebar-link-hover-bg: theme('colors.blue.800');
}
```

---

### Social Icons

```css
--sidebar-icon: theme('colors.gray.300');
--sidebar-icon-hover: theme('colors.white');
```

**Used for**: GitHub, LinkedIn, Email icons

**Template**: `<a class="sidebar-icon">`

---

### Dividers

```css
--sidebar-divider: theme('colors.gray.600');
```

**Used for**: Separation lines between sections

**Template**: `<div class="sidebar-divider">`

---

### Credits Footer

```css
--sidebar-credit: theme('colors.gray.100');
--sidebar-credit-dark: theme('colors.gray.500');
--sidebar-credit-link-hover: theme('colors.primary.200');
--sidebar-credit-link-hover-dark: theme('colors.primary.400');
```

**Used for**: Footer text and links (Powered by Hugo, Theme credit)

**Template**: `<p class="sidebar-credit">` and `<a class="sidebar-credit-link">`

**How to modify**:
```css
:root {
  --sidebar-credit: theme('colors.gray.200'); /* Lighter text */
  --sidebar-credit-link-hover: theme('colors.yellow.400'); /* Yellow hover */
}
```

---

## Badge - CSS Variables

### Regular Badges (Tags)

```css
--badge-bg: theme('colors.primary.100');
--badge-text: theme('colors.primary.700');
--badge-hover-bg: theme('colors.primary.200');
--badge-hover-text: theme('colors.primary.800');
```

**Used for**: Tag badges on posts

**How to modify**:
```css
:root {
  --badge-bg: theme('colors.green.100');
  --badge-text: theme('colors.green.800');
}
```

---

### Series Badges

```css
--badge-serie-bg: theme('colors.purple.100');
--badge-serie-text: theme('colors.purple.700');
--badge-serie-hover-bg: theme('colors.purple.200');
--badge-serie-hover-text: theme('colors.purple.800');
```

**Used for**: Badges for post series

---

## Available Semantic Classes

### Sidebar Components

| Class | Usage | Template |
|-------|-------|----------|
| `.sidebar-title` | Main title | `<a class="sidebar-title">` |
| `.sidebar-description` | Description/subtitle | `<p class="sidebar-description">` |
| `.sidebar-link` | Navigation links | `<a class="sidebar-link">` |
| `.sidebar-link.active` | Active link | `<a class="sidebar-link active">` |
| `.sidebar-icon` | Social icons | `<a class="sidebar-icon">` |
| `.sidebar-divider` | Divider | `<div class="sidebar-divider">` |
| `.sidebar-text` | Generic text | `<p class="sidebar-text">` |
| `.sidebar-heading` | Section heading | `<h3 class="sidebar-heading">` |
| `.sidebar-credit` | Credits footer text | `<p class="sidebar-credit">` |
| `.sidebar-credit-link` | Credits footer links | `<a class="sidebar-credit-link">` |

---

## Customization Examples

### Example 1: Blue Sidebar Theme

```css
:root {
  /* Dark blue sidebar */
  --sidebar-bg: theme('colors.blue.900');
  --sidebar-border: theme('colors.blue.700');

  /* Light blue links */
  --sidebar-link: theme('colors.blue.200');
  --sidebar-link-hover-bg: theme('colors.blue.800');
}
```

### Example 2: Green Badges

```css
:root {
  --badge-bg: theme('colors.green.100');
  --badge-text: theme('colors.green.800');
  --badge-hover-bg: theme('colors.green.200');
}
```

### Example 3: Light Sidebar (Light Theme)

```css
:root {
  --sidebar-bg: theme('colors.gray.100');
  --sidebar-border: theme('colors.gray.300');
  --sidebar-title: theme('colors.gray.900');
  --sidebar-link: theme('colors.gray.700');
}
```

---

## Files to Modify

### To Change Colors

**File**: `/themes/barkAtTheMoon/assets/css/main.css`

**Section**: Look for `:root {` at the beginning of the file (after the `@tailwind` directives)

### To Change Structure

**File**: `/themes/barkAtTheMoon/layouts/partials/sidebar.html`

**Note**: When modifying templates, always use the semantic classes defined in CSS.

---

## Best Practices

1. **Don't modify Tailwind classes directly in templates**
   - ❌ `<a class="text-gray-300 hover:text-white">`
   - ✅ `<a class="sidebar-link">`

2. **Use CSS variables for colors**
   - ❌ `color: #ffffff;`
   - ✅ `color: var(--sidebar-title);`

3. **Maintain semantic consistency**
   - Use `.sidebar-link` for all sidebar links
   - Use `.sidebar-icon` for all icons

4. **Test in both light and dark mode**
   - Some variables have separate `-dark` versions

---

## Debugging

### How to see which variables are being used

1. Open DevTools in the browser
2. Inspect an element (e.g., a sidebar link)
3. Look for `var(--sidebar-link)` in the applied styles
4. You can temporarily modify the value to test

### How to add new variables

1. Add to `:root` in `main.css`:
   ```css
   :root {
     --my-new-variable: theme('colors.red.500');
   }
   ```

2. Use in CSS:
   ```css
   .my-class {
     color: var(--my-new-variable);
   }
   ```

3. Use in template:
   ```html
   <div class="my-class">Content</div>
   ```

---

## Support

For questions or issues with the CSS helper system:
- Check this README
- Inspect the code in `main.css` (variables are well-commented)
- Use DevTools to see applied styles

**Theme**: barkAtTheMoon
**System**: CSS Variables + Semantic Classes
**Framework**: TailwindCSS + Hugo
