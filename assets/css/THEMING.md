# 🎨 Sistema di Theming - barkAtTheMoon

## Come Funziona

Il tema usa un **sistema integrato** di Tailwind CSS + CSS Variables:

```
tailwind.config.js  →  CSS Variables  →  Componenti
------------------     --------------     ----------
gray: {                :root {             <a class="sidebar-link">
  700: '#334155'  →      --sidebar-bg:      ↑
}                        theme('gray.700')  usa la variabile
                       }
```

### ✨ Vantaggio Principale

**Cambi solo `tailwind.config.js` e tutto si aggiorna automaticamente!**

---

## 🔧 Guida Rapida

### Per Cambiare i Colori della Sidebar

**1. Apri** `/themes/barkAtTheMoon/tailwind.config.js`

**2. Modifica** la palette `gray`:

```javascript
colors: {
  gray: {
    200: '#e0e7ff',  // Link normali
    300: '#c7d2fe',  // Descrizione, icone
    600: '#6366f1',  // Divider
    700: '#4338ca',  // Background sidebar (← PRINCIPALE)
    800: '#3730a3',  // Hover background
    900: '#312e81',  // Border
  },
}
```

**3. Salva** - Hugo ricompila automaticamente ✅

---

## 📋 Mappatura Completa

### Tailwind → CSS Variables → Dove si Usa

| Tailwind Color | CSS Variable | Componente |
|----------------|--------------|------------|
| `gray.700` | `--sidebar-bg` | Sfondo sidebar |
| `gray.900` | `--sidebar-border` | Bordo sidebar |
| `gray.200` | `--sidebar-link` | Link menu |
| `gray.300` | `--sidebar-description` | Descrizione/icone |
| `gray.600` | `--sidebar-divider` | Linee separatrici |
| `gray.800` | `--sidebar-link-hover-bg` | Sfondo hover link |
| `white` | `--sidebar-title` | Titolo sito |
| `primary.300` | `--sidebar-title-hover` | Hover titolo |
| `primary.200` | `--sidebar-link-active` | Link attivo |
| `primary.900` | `--sidebar-link-active-bg` | Sfondo link attivo |

### Footer Credits

| Tailwind Color | CSS Variable | Componente |
|----------------|--------------|------------|
| `gray.100` | `--sidebar-credit` | Testo credits (light) |
| `gray.500` | `--sidebar-credit-dark` | Testo credits (dark) |
| `primary.200` | `--sidebar-credit-link-hover` | Hover link (light) |
| `primary.400` | `--sidebar-credit-link-hover-dark` | Hover link (dark) |

### Badge Colors

| Tailwind Color | CSS Variable | Componente |
|----------------|--------------|------------|
| `primary.100` | `--badge-bg` | Sfondo tag |
| `primary.700` | `--badge-text` | Testo tag |
| `purple.100` | `--badge-serie-bg` | Sfondo serie |
| `purple.700` | `--badge-serie-text` | Testo serie |

---

## 💡 Esempi Pratici

### Esempio 1: Sidebar Blu

```javascript
// tailwind.config.js
colors: {
  gray: {
    700: '#1e3a8a',  // Blu scuro
    800: '#1e40af',
    900: '#1e293b',
    // ... altri
  }
}
```

Risultato: Sidebar blu scura automaticamente! 🎉

### Esempio 2: Badge Verdi

```javascript
// tailwind.config.js
colors: {
  primary: {
    100: '#d1fae5',  // Verde chiaro
    700: '#047857',  // Verde scuro
    // ... altri
  }
}
```

Risultato: Tutti i badge diventano verdi! 🎉

### Esempio 3: Override Manuale

Se vuoi cambiare SOLO un colore senza toccare Tailwind:

```css
/* main.css */
@layer base {
  :root {
    --sidebar-bg: #dc2626;  /* Rosso custom */
  }
}
```

---

## 🎯 Workflow Consigliato

### Per Cambiare il Tema Completo:

1. ✅ Modifica `tailwind.config.js` (palette gray e primary)
2. ✅ Salva e testa
3. ✅ Fatto!

### Per Override Puntuale:

1. ✅ Modifica `main.css` (una variabile specifica)
2. ✅ Usa `theme('colors.xxx')` o un hex diretto
3. ✅ Fatto!

---

## 📁 File da Modificare

### Cambio Colori Globale
- **File**: `/themes/barkAtTheMoon/tailwind.config.js`
- **Cosa modificare**: Sezione `colors` (gray, primary, purple)

### Override Specifico
- **File**: `/themes/barkAtTheMoon/assets/css/main.css`
- **Cosa modificare**: Sezione `:root` dentro `@layer base`

### Template HTML
- **File**: `/themes/barkAtTheMoon/layouts/partials/*.html`
- **Cosa modificare**: Usa classi semantiche (`.sidebar-link`, `.sidebar-title`, etc.)
- **NON modificare**: I colori (usa le CSS variables!)

---

## 🔍 Debugging

### Come Vedere Quali Variabili Vengono Usate

1. **Apri DevTools** nel browser (F12)
2. **Ispeziona** un elemento (es. link sidebar)
3. **Guarda** la tab "Computed" o "Styles"
4. **Cerca** `var(--sidebar-link)` → vedrai il valore effettivo

### Come Testare un Colore Temporaneamente

**In DevTools**:
```css
/* Cambia temporaneamente */
--sidebar-bg: #ff0000;  /* Rosso per test */
```

**Nel Browser**: Vedi subito il risultato!

---

## 🚨 Errori Comuni

### ❌ "I colori non cambiano"

**Causa**: Hai modificato solo `tailwind.config.js` ma il browser ha la cache

**Soluzione**: Hard refresh (`Ctrl+Shift+R`)

### ❌ "Le variabili non funzionano"

**Causa**: Hai usato `theme()` fuori da `@layer base`

**Soluzione**: Assicurati che `:root` sia dentro `@layer base`

```css
/* ✅ CORRETTO */
@layer base {
  :root {
    --sidebar-bg: theme('colors.gray.700');
  }
}

/* ❌ SBAGLIATO */
:root {
  --sidebar-bg: theme('colors.gray.700');  /* Non dentro @layer */
}
```

---

## 📚 Riferimenti

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Tailwind theme()**: https://tailwindcss.com/docs/functions-and-directives#theme

---

**Theme**: barkAtTheMoon
**Sistema**: Tailwind CSS + CSS Variables (sincronizzato)
**Ultima modifica**: 2025-11-17
