# Portfolio Website - Maximilian Krupa

Eine moderne, responsive Portfolio-Website für Bewerbungen als Werkstudent oder Praktikant.

## 🚀 Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne UI/UX**: Professionelles Design mit Animationen und Hover-Effekten
- **Single Page Application**: Smooth Scrolling zwischen Sections
- **Projektübersicht**: Showcase deiner Coding-Projekte
- **Skills Section**: Darstellung deiner technischen Fähigkeiten
- **Kontaktformular**: Einfache Kontaktaufnahme für potenzielle Arbeitgeber
- **Social Media Integration**: Links zu GitHub, LinkedIn und E-Mail

## 📋 Sections

1. **Hero Section**: Einleitende Sektion mit Name und Titel
2. **Über mich**: Informationen über dein Studium und deine Interessen
3. **Skills**: Darstellung deiner technischen Fähigkeiten und Kenntnisse
4. **Projekte**: Showcase deiner Coding-Projekte mit Links zu GitHub
5. **Kontakt**: Kontaktformular und Kontaktinformationen

## 🛠️ Verwendete Technologien

- **HTML5**: Semantische Struktur
- **CSS3**: Modernes Styling mit Flexbox und Grid
- **JavaScript**: Interaktive Elemente und Animationen
- **Font Awesome**: Icons für eine bessere visuelle Darstellung

## 📦 Installation & Verwendung

### Lokale Verwendung

1. Repository klonen oder Dateien herunterladen
2. `index.html` in einem Browser öffnen

Das war's! Die Website läuft komplett statisch ohne Server.

### Mit lokalem Server (empfohlen)

Für die beste Entwicklungserfahrung kannst du einen lokalen Server verwenden:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (mit http-server)**
```bash
npx http-server
```

**Option 3: VS Code Live Server Extension**
- Installiere die "Live Server" Extension
- Rechtsklick auf `index.html` → "Open with Live Server"

Dann öffne `http://localhost:8000` in deinem Browser.

## 🎨 Anpassung

### Persönliche Informationen ändern

1. **Name und Titel**: Öffne `index.html` und suche nach "Maximilian Krupa"
2. **E-Mail**: Ersetze `maximilian.krupa@rwth-aachen.de` durch deine E-Mail
3. **GitHub**: Ersetze `github.com/maxkrupa` durch dein GitHub-Profil
4. **LinkedIn**: Ersetze `linkedin.com/in/maxkrupa` durch dein LinkedIn-Profil

### Projekte hinzufügen

Bearbeite die Projekt-Karten in `index.html` (Section `<section id="projects">`):

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Dein Projekt Titel</h3>
        <p>Beschreibung deines Projekts...</p>
        <div class="project-tags">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
        <div class="project-links">
            <a href="DEIN_GITHUB_LINK" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="DEINE_DEMO_URL" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### Skills anpassen

Bearbeite die Skills in `index.html` (Section `<section id="skills">`):

```html
<div class="skill-category">
    <h3><i class="fas fa-laptop-code"></i> Kategorie Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <!-- Weitere Skills hinzufügen -->
    </div>
</div>
```

### Farben ändern

Passe die Farben in `styles.css` an (am Anfang der Datei):

```css
:root {
    --primary-color: #2563eb;      /* Hauptfarbe */
    --secondary-color: #10b981;    /* Akzentfarbe */
    --text-primary: #1f2937;       /* Textfarbe */
    /* ... weitere Farben */
}
```

### Eigene Bilder für Projekte

Ersetze die Placeholder-Divs durch echte Bilder:

```html
<!-- Alt (Placeholder) -->
<div class="project-placeholder">
    <i class="fas fa-code"></i>
</div>

<!-- Neu (mit Bild) -->
<img src="pfad/zu/deinem/bild.jpg" alt="Projekt Name">
```

## 🌐 Deployment

### GitHub Pages

1. Pushe die Dateien zu einem GitHub Repository
2. Gehe zu Repository Settings → Pages
3. Wähle Branch (z.B. `main`) und `/root` als Quelle
4. Speichern und die URL wird angezeigt

### Netlify

1. Gehe zu [netlify.com](https://www.netlify.com/)
2. Drag & Drop den Projekt-Ordner
3. Die Website wird automatisch deployed

### Vercel

1. Installiere Vercel CLI: `npm i -g vercel`
2. Im Projektordner: `vercel`
3. Folge den Anweisungen

## 📱 Browser-Kompatibilität

Die Website funktioniert in allen modernen Browsern:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 💡 Tipps für Bewerbungen

1. **Halte die Projekte aktuell**: Zeige deine neuesten und besten Arbeiten
2. **Füge echte Bilder hinzu**: Screenshots deiner Projekte wirken professioneller
3. **Detaillierte Projektbeschreibungen**: Erkläre was du gemacht hast und welche Technologien du verwendet hast
4. **Aktive GitHub Links**: Stelle sicher, dass alle GitHub Links funktionieren und die Repositories public sind
5. **CV/Lebenslauf**: Überlege, einen Link zu deinem CV hinzuzufügen
6. **Blog (optional)**: Du könntest eine Blog-Section für technische Artikel hinzufügen

## 🔧 Erweiterte Features (optional)

Weitere Features, die du hinzufügen könntest:

- **Dark Mode**: Toggle zwischen hellem und dunklem Design
- **Blog Section**: Für technische Artikel und Tutorials
- **Zertifikate**: Sektion für Kurse und Zertifizierungen
- **Timeline**: Darstellung deiner Ausbildung und Erfahrung
- **Mehrsprachigkeit**: Deutsch/Englisch Toggle
- **Analytics**: Google Analytics oder ähnliches für Besucher-Tracking
- **Backend für Kontaktformular**: Integration mit einem Backend-Service

## 📄 Lizenz

Dieses Projekt steht zur freien Verfügung. Du kannst es nach Belieben anpassen und verwenden.

## 📧 Kontakt

Bei Fragen oder Anregungen:
- **E-Mail**: maximilian.krupa@rwth-aachen.de
- **GitHub**: [github.com/maxkrupa](https://github.com/maxkrupa)
- **LinkedIn**: [linkedin.com/in/maxkrupa](https://linkedin.com/in/maxkrupa)

---

Viel Erfolg bei deinen Bewerbungen! 🎓💼
