# 🎨 Theming System - barkAtTheMoon

## How It Works

The theme uses an **integrated system** of Tailwind CSS + CSS Variables:

```
tailwind.config.js  →  CSS Variables  →  Components
------------------     --------------     ----------
gray: {                :root {             <a class="sidebar-link">
  700: '#334155'  →      --sidebar-bg:      ↑
}                        theme('gray.700')  uses the variable
                       }
```

### ✨ Main Advantage

**Change only `tailwind.config.js` and everything updates automatically!**

---

## 🔧 Quick Guide

### To Change Sidebar Colors

**1. Open** `/themes/barkAtTheMoon/tailwind.config.js`

**2. Modify** the `gray` palette:

```javascript
colors: {
  gray: {
    200: '#e0e7ff',  // Normal links
    300: '#c7d2fe',  // Description, icons
    600: '#6366f1',  // Divider
    700: '#4338ca',  // Sidebar background (← MAIN)
    800: '#3730a3',  // Hover background
    900: '#312e81',  // Border
  },
}
```

**3. Save** - Hugo automatically recompiles ✅

---

## 📋 Complete Mapping

### Tailwind → CSS Variables → Where Used

| Tailwind Color | CSS Variable | Component |
|----------------|--------------|-----------|
| `gray.700` | `--sidebar-bg` | Sidebar background |
| `gray.900` | `--sidebar-border` | Sidebar border |
| `gray.200` | `--sidebar-link` | Menu links |
| `gray.300` | `--sidebar-description` | Description/icons |
| `gray.600` | `--sidebar-divider` | Divider lines |
| `gray.800` | `--sidebar-link-hover-bg` | Link hover background |
| `white` | `--sidebar-title` | Site title |
| `primary.300` | `--sidebar-title-hover` | Title hover |
| `primary.200` | `--sidebar-link-active` | Active link |
| `primary.900` | `--sidebar-link-active-bg` | Active link background |

### Footer Credits

| Tailwind Color | CSS Variable | Component |
|----------------|--------------|-----------|
| `gray.100` | `--sidebar-credit` | Credits text (light) |
| `gray.500` | `--sidebar-credit-dark` | Credits text (dark) |
| `primary.200` | `--sidebar-credit-link-hover` | Link hover (light) |
| `primary.400` | `--sidebar-credit-link-hover-dark` | Link hover (dark) |

### Badge Colors

| Tailwind Color | CSS Variable | Component |
|----------------|--------------|-----------|
| `primary.100` | `--badge-bg` | Tag background |
| `primary.700` | `--badge-text` | Tag text |
| `purple.100` | `--badge-serie-bg` | Series background |
| `purple.700` | `--badge-serie-text` | Series text |

---

## 💡 Practical Examples

### Example 1: Blue Sidebar

```javascript
// tailwind.config.js
colors: {
  gray: {
    700: '#1e3a8a',  // Dark blue
    800: '#1e40af',
    900: '#1e293b',
    // ... others
  }
}
```

Result: Dark blue sidebar automatically! 🎉

### Example 2: Green Badges

```javascript
// tailwind.config.js
colors: {
  primary: {
    100: '#d1fae5',  // Light green
    700: '#047857',  // Dark green
    // ... others
  }
}
```

Result: All badges become green! 🎉

### Example 3: Manual Override

If you want to change ONLY one color without touching Tailwind:

```css
/* main.css */
@layer base {
  :root {
    --sidebar-bg: #dc2626;  /* Custom red */
  }
}
```

---

## 🎯 Recommended Workflow

### To Change the Complete Theme:

1. ✅ Modify `tailwind.config.js` (gray and primary palettes)
2. ✅ Save and test
3. ✅ Done!

### For Specific Override:

1. ✅ Modify `main.css` (one specific variable)
2. ✅ Use `theme('colors.xxx')` or a direct hex value
3. ✅ Done!

---

## 📁 Files to Modify

### Global Color Change
- **File**: `/themes/barkAtTheMoon/tailwind.config.js`
- **What to modify**: `colors` section (gray, primary, purple)

### Specific Override
- **File**: `/themes/barkAtTheMoon/assets/css/main.css`
- **What to modify**: `:root` section inside `@layer base`

### HTML Templates
- **File**: `/themes/barkAtTheMoon/layouts/partials/*.html`
- **What to modify**: Use semantic classes (`.sidebar-link`, `.sidebar-title`, etc.)
- **DON'T modify**: Colors (use CSS variables!)

---

## 🔍 Debugging

### How to See Which Variables Are Used

1. **Open DevTools** in browser (F12)
2. **Inspect** an element (e.g., sidebar link)
3. **Look** at the "Computed" or "Styles" tab
4. **Search** for `var(--sidebar-link)` → you'll see the actual value

### How to Test a Color Temporarily

**In DevTools**:
```css
/* Change temporarily */
--sidebar-bg: #ff0000;  /* Red for testing */
```

**In Browser**: See the result immediately!

---

## 🚨 Common Errors

### ❌ "Colors don't change"

**Cause**: You modified only `tailwind.config.js` but the browser has cache

**Solution**: Hard refresh (`Ctrl+Shift+R`)

### ❌ "Variables don't work"

**Cause**: You used `theme()` outside `@layer base`

**Solution**: Make sure `:root` is inside `@layer base`

```css
/* ✅ CORRECT */
@layer base {
  :root {
    --sidebar-bg: theme('colors.gray.700');
  }
}

/* ❌ WRONG */
:root {
  --sidebar-bg: theme('colors.gray.700');  /* Not inside @layer */
}
```

---

## 📚 References

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Tailwind theme()**: https://tailwindcss.com/docs/functions-and-directives#theme

---

**Theme**: barkAtTheMoon
**System**: Tailwind CSS + CSS Variables (synchronized)
**Last modified**: 2025-11-17
