# CSS Helper System - barkAtTheMoon Theme

## Overview

Questo tema utilizza un sistema di **CSS Variables** e **classi semantiche** per permettere una facile personalizzazione senza modificare i template HTML.

## Come Funziona

### 1. CSS Variables (`:root`)

Tutte le variabili di colore sono definite in `main.css` nella sezione `:root`. Puoi modificare questi valori per cambiare i colori del tema.

**Posizione**: `/themes/barkAtTheMoon/assets/css/main.css` (righe 5-46)

### 2. Classi Semantiche

I template HTML usano classi semantiche invece di utility Tailwind dirette. Questo permette di cambiare gli stili modificando solo il CSS.

---

## Sidebar - CSS Variables

### Background e Bordi

```css
--sidebar-bg: theme('colors.gray.700');
--sidebar-bg-dark: theme('colors.gray.800');
--sidebar-border: theme('colors.gray.900');
--sidebar-border-dark: theme('colors.gray.700');
```

**Dove si usa**: Sfondo e bordo della sidebar

**Come modificare**:
```css
:root {
  --sidebar-bg: theme('colors.blue.900');  /* Cambia sfondo sidebar */
  --sidebar-border: theme('colors.blue.700'); /* Cambia bordo */
}
```

---

### Titolo Sito

```css
--sidebar-title: theme('colors.white');
--sidebar-title-hover: theme('colors.primary.300');
```

**Dove si usa**: Nome del sito nella sidebar

**Template**: `<a class="sidebar-title">`

**Come modificare**:
```css
:root {
  --sidebar-title: theme('colors.yellow.400'); /* Titolo giallo */
  --sidebar-title-hover: theme('colors.yellow.300');
}
```

---

### Descrizione

```css
--sidebar-description: theme('colors.gray.300');
```

**Dove si usa**: Sottotitolo/descrizione sotto il nome del sito

**Template**: `<p class="sidebar-description">`

---

### Link Menu

```css
--sidebar-link: theme('colors.gray.200');
--sidebar-link-hover: theme('colors.white');
--sidebar-link-hover-bg: theme('colors.gray.800');
--sidebar-link-active: theme('colors.primary.200');
--sidebar-link-active-bg: theme('colors.primary.900');
```

**Dove si usa**: Link di navigazione nella sidebar (Home, About, Posts, etc.)

**Template**: `<a class="sidebar-link">` e `<a class="sidebar-link active">`

**Come modificare**:
```css
:root {
  --sidebar-link: theme('colors.blue.200');
  --sidebar-link-hover: theme('colors.white');
  --sidebar-link-hover-bg: theme('colors.blue.800');
}
```

---

### Icone Social

```css
--sidebar-icon: theme('colors.gray.300');
--sidebar-icon-hover: theme('colors.white');
```

**Dove si usa**: Icone GitHub, LinkedIn, Email

**Template**: `<a class="sidebar-icon">`

---

### Separatori

```css
--sidebar-divider: theme('colors.gray.600');
```

**Dove si usa**: Linee di separazione tra sezioni

**Template**: `<div class="sidebar-divider">`

---

### Credits Footer

```css
--sidebar-credit: theme('colors.gray.100');
--sidebar-credit-dark: theme('colors.gray.500');
--sidebar-credit-link-hover: theme('colors.primary.200');
--sidebar-credit-link-hover-dark: theme('colors.primary.400');
```

**Dove si usa**: Testo e link del footer (Powered by Hugo, Theme credit)

**Template**: `<p class="sidebar-credit">` e `<a class="sidebar-credit-link">`

**Come modificare**:
```css
:root {
  --sidebar-credit: theme('colors.gray.200'); /* Testo più chiaro */
  --sidebar-credit-link-hover: theme('colors.yellow.400'); /* Hover giallo */
}
```

---

## Badge - CSS Variables

### Badge Normali (Tags)

```css
--badge-bg: theme('colors.primary.100');
--badge-text: theme('colors.primary.700');
--badge-hover-bg: theme('colors.primary.200');
--badge-hover-text: theme('colors.primary.800');
```

**Dove si usa**: Tag badge sui post

**Come modificare**:
```css
:root {
  --badge-bg: theme('colors.green.100');
  --badge-text: theme('colors.green.800');
}
```

---

### Badge Serie

```css
--badge-serie-bg: theme('colors.purple.100');
--badge-serie-text: theme('colors.purple.700');
--badge-serie-hover-bg: theme('colors.purple.200');
--badge-serie-hover-text: theme('colors.purple.800');
```

**Dove si usa**: Badge per serie di post

---

## Classi Semantiche Disponibili

### Sidebar Components

| Classe | Uso | Template |
|--------|-----|----------|
| `.sidebar-title` | Titolo principale | `<a class="sidebar-title">` |
| `.sidebar-description` | Descrizione/sottotitolo | `<p class="sidebar-description">` |
| `.sidebar-link` | Link di navigazione | `<a class="sidebar-link">` |
| `.sidebar-link.active` | Link attivo | `<a class="sidebar-link active">` |
| `.sidebar-icon` | Icone social | `<a class="sidebar-icon">` |
| `.sidebar-divider` | Separatore | `<div class="sidebar-divider">` |
| `.sidebar-text` | Testo generico | `<p class="sidebar-text">` |
| `.sidebar-heading` | Intestazione sezione | `<h3 class="sidebar-heading">` |
| `.sidebar-credit` | Testo credits footer | `<p class="sidebar-credit">` |
| `.sidebar-credit-link` | Link credits footer | `<a class="sidebar-credit-link">` |

---

## Esempi di Personalizzazione

### Esempio 1: Sidebar con Tema Blu

```css
:root {
  /* Sidebar blu scura */
  --sidebar-bg: theme('colors.blue.900');
  --sidebar-border: theme('colors.blue.700');

  /* Link blu chiari */
  --sidebar-link: theme('colors.blue.200');
  --sidebar-link-hover-bg: theme('colors.blue.800');
}
```

### Esempio 2: Badge Verdi

```css
:root {
  --badge-bg: theme('colors.green.100');
  --badge-text: theme('colors.green.800');
  --badge-hover-bg: theme('colors.green.200');
}
```

### Esempio 3: Sidebar Chiara (Light Theme)

```css
:root {
  --sidebar-bg: theme('colors.gray.100');
  --sidebar-border: theme('colors.gray.300');
  --sidebar-title: theme('colors.gray.900');
  --sidebar-link: theme('colors.gray.700');
}
```

---

## File da Modificare

### Per Cambiare i Colori

**File**: `/themes/barkAtTheMoon/assets/css/main.css`

**Sezione**: Cerca `:root {` all'inizio del file (dopo i `@tailwind`)

### Per Cambiare la Struttura

**File**: `/themes/barkAtTheMoon/layouts/partials/sidebar.html`

**Nota**: Quando modifichi il template, usa sempre le classi semantiche definite nel CSS.

---

## Best Practices

1. **Non modificare direttamente Tailwind classes nei template**
   - ❌ `<a class="text-gray-300 hover:text-white">`
   - ✅ `<a class="sidebar-link">`

2. **Usa le CSS variables per i colori**
   - ❌ `color: #ffffff;`
   - ✅ `color: var(--sidebar-title);`

3. **Mantieni consistenza semantica**
   - Usa `.sidebar-link` per tutti i link della sidebar
   - Usa `.sidebar-icon` per tutte le icone

4. **Testa in light e dark mode**
   - Alcune variabili hanno versioni `-dark` separate

---

## Debugging

### Come vedere quali variabili vengono usate

1. Apri DevTools nel browser
2. Ispeziona un elemento (es. un link della sidebar)
3. Cerca `var(--sidebar-link)` negli stili applicati
4. Puoi modificare temporaneamente il valore per testare

### Come aggiungere nuove variabili

1. Aggiungi in `:root` in `main.css`:
   ```css
   :root {
     --mia-nuova-variabile: theme('colors.red.500');
   }
   ```

2. Usa nel CSS:
   ```css
   .mia-classe {
     color: var(--mia-nuova-variabile);
   }
   ```

3. Usa nel template:
   ```html
   <div class="mia-classe">Contenuto</div>
   ```

---

## Supporto

Per domande o problemi con il sistema CSS helper:
- Controlla questo README
- Ispeziona il codice in `main.css` (le variabili sono ben commentate)
- Usa DevTools per vedere gli stili applicati

**Theme**: barkAtTheMoon
**Sistema**: CSS Variables + Semantic Classes
**Framework**: TailwindCSS + Hugo
