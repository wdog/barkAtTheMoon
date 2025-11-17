# Miglioramenti Suggeriti per barkAtTheMoon

Feature da implementare per rendere il tema ancora più completo.

## TODO URGENTI

- syntax highlight in light mode
- pagina demo markdown nel demosite del tema


## 🎯 Suggerimenti

### 1. **RSS Feed Migliorato**

**Cosa aggiungere:**
- Icona RSS in sidebar
- Full-text RSS feed (opzionale)
- Feed per tag/categorie

**Implementazione:**
```toml
[params]
  rss_icon = true
  rss_fulltext = false
```

**Benefici:**
- Migliore discoverability
- Supporto lettori RSS

---

### 2. **Search Functionality**

**Cosa aggiungere:**
- Client-side search con Fuse.js o Lunr.js
- Search index JSON generato da Hugo
- Search box in sidebar/mobile

**File da creare:**
- `layouts/_default/index.json` - Search index
- `static/js/search.js` - Client search logic
- `layouts/partials/search.html` - Search UI

**Benefici:**
- Navigazione più facile per siti grandi
- No backend necessario

---

### 3. **Shortcodes Utili**

**Cosa aggiungere:**
- `{{< tabs >}}` - Contenuto a tab
- `{{< alert >}}` - Box di avviso (info/warning/error)
- `{{< figure >}}` - Immagini con caption avanzate
- `{{< github >}}` - Embed GitHub gist/repo
- `{{< youtube >}}` - Embed video responsive

**Directory:**
- `layouts/shortcodes/tabs.html`
- `layouts/shortcodes/alert.html`
- etc.

**Benefici:**
- Content più ricco senza HTML custom
- Riutilizzabile

---

### 4. **Related Posts**

**Cosa aggiungere:**
- Sezione "Related Posts" alla fine degli articoli
- Basato su tags/categories
- Configurabile (numero di post, criterio)

**Implementazione:**
```go
{{ $related := .Site.RegularPages.Related . | first 3 }}
```

**File da creare:**
- `layouts/partials/related-posts.html`

**Benefici:**
- Aumenta page views
- Migliora engagement

---

### 5. **Breadcrumbs**

**Cosa aggiungere:**
- Breadcrumb navigation
- Schema.org markup per SEO

**File da creare:**
- `layouts/partials/breadcrumbs.html`

**Benefici:**
- Migliora UX
- SEO boost

---

### 6. **Image Optimization**

**Cosa aggiungere:**
- Hugo Image Processing per thumbnail
- Lazy loading
- Responsive images con srcset

**Esempio:**
```go
{{ $img := .Resources.GetMatch "*.jpg" }}
{{ $thumb := $img.Resize "600x" }}
<img src="{{ $thumb.RelPermalink }}" loading="lazy">
```

**Benefici:**
- Performance migliore
- Bandwidth ridotto

---

### 7. **Analytics Privacy-First**

**Cosa aggiungere:**
- Supporto Plausible Analytics
- Supporto Umami (self-hosted)
- Opzionale e configurabile

**Implementazione:**
```toml
[params.analytics]
  plausible = "yourdomain.com"
  # OR
  umami_website_id = "xxx"
  umami_src = "https://analytics.yourdomain.com/script.js"
```

**File da creare:**
- `layouts/partials/analytics.html`

**Benefici:**
- Privacy-friendly
- GDPR compliant

---

### 8. **Open Graph & Twitter Cards**

**Cosa aggiungere:**
- Meta tags OG automatici
- Twitter card support
- Immagine di default se non specificata

**File da creare:**
- `layouts/partials/seo.html`
- Usare in `layouts/partials/head.html`

**Benefici:**
- Share preview belli su social
- SEO migliorato

---

### 9. **Multiple Authors Support**

**Cosa aggiungere:**
- Taxonomy "authors"
- Author pages con bio e lista post
- Avatar autore nei post

**Directory:**
- `content/authors/_index.md`
- `layouts/authors/` templates

**Benefici:**
- Blog multi-autore
- Credito corretto

---

### 10. **Archive Page**

**Cosa aggiungere:**
- Pagina archivio completo
- Raggruppato per anno/mese
- Link nella sidebar

**File da creare:**
- `layouts/section/archive.html`
- `content/archive/_index.md`

**Benefici:**
- Overview completo contenuti
- SEO per old content

---

### 11. **Print Stylesheet**

**Cosa aggiungere:**
- CSS ottimizzato per stampa
- Rimuove sidebar, navigation
- Formattazione pulita

**File:**
```css
@media print {
  .sidebar, nav, footer { display: none; }
  /* ... */
}
```

**Benefici:**
- Articoli stampabili
- PDF export migliore

---

### 12. **Syntax Highlighting Theme Switcher**

**Cosa aggiungere:**
- Tema syntax highlighting che cambia con dark mode
- Configurabile (es. GitHub Light/Dark)

**Implementazione:**
Già supportato da Hugo con `markup.highlight.noClasses = false`

**Benefici:**
- Consistenza visiva
- Leggibilità codice

---

## 📊 Priorità Suggerita

### Alta Priorità (Quick Wins)
1. Open Graph & Twitter Cards
2. RSS Feed icon
3. Related Posts
4. Breadcrumbs
5. SEO improvements

### Media Priorità
4. Search functionality
5. Shortcodes (alert, tabs)
6. Image optimization

### Bassa Priorità (Nice to Have)
7. Multiple authors
8. Analytics
9. Archive page
10. Print stylesheet
11. Syntax highlighting theme switcher

---

## 🔧 Come Implementare

Per ogni feature:
1. Crea i file necessari nella directory theme
2. Aggiungi parametri in hugo.toml con default sensati
3. Documenta nel README.md
4. Testa in light/dark mode
5. Verifica mobile responsive

---

## 📝 Note Finali

Il tuo tema è già molto solido! Queste sono solo migliorie opzionali per renderlo ancora più completo e competitivo con temi come Poison.

Concentrati su features che useresti davvero - non è necessario implementare tutto.
