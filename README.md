# Create Pages

Create Pages is a Figma plugin that builds a clean, standardized page structure for common design and handoff workflows in one click.

## Features
- One-click page templates for Design Web, Design App, Feedback, Dev Web, and Dev App workflows.
- Resets the current file to a consistent structure (renames the first page to `Cover`, removes all other pages, then creates the new set).
- Simple UI with selectable cards and a single "Create Pages" action.
- Works fully offline (no network access, no external dependencies).

## Page Sets
Each template creates pages in this exact order. Pages named `-----` are simple separators.

### Design Web
- Cover
- -----
- Mood-board
- Information Architecture
- User Flow
- -----
- Wireframe
- -----
- Draft
- Web UI
- Responsive UI
- -----
- Prototyping Web
- Prototyping Responsive
- -----
- Archive

### Design App
- Cover
- -----
- User Research
- Persona
- User Flow
- -----
- Wireframe - Mobile
- Wireframe - Tablet
- -----
- UI Design
- Dark Mode
- -----
- Prototyping
- -----
- Archive

### Feedback
- Cover
- -----
- Web UI
- -----
- Archive

### Dev Web
- Cover
- -----
- Web UI (prefixed with laptop emoji in the current code)
- Responsive UI (prefixed with phone emoji in the current code)
- -----
- Prototyping Web
- Prototyping Responsive
- -----
- Archive

### Dev App
- Cover
- -----
- Mobile UI - Light
- Mobile UI - Dark
- -----
- Tablet UI - Light
- Tablet UI - Dark
- -----
- Prototyping

## How to Use in Figma
1. Open the Figma desktop app.
2. Go to `Plugins` > `Development` > `Import plugin from manifest...`.
3. Select `manifest.json` from this repo.
4. Run the plugin from `Plugins` > `Development` > `Create Pages`.
5. Select a template and click **Create Pages**.

Note: Running the plugin will remove all existing pages except the first, which is renamed to `Cover`.

## Start Development
Requirements:
- Figma desktop app (plugin development is only supported in the desktop app).
- No build step or dependencies; this plugin uses plain HTML/CSS/JS.

Steps:
1. Clone or download this repo.
2. In Figma, import the plugin via `manifest.json` (see steps above).
3. Edit `code.js` (plugin logic) and `ui.html` (UI layout and styles).
4. In Figma, use `Plugins` > `Development` > `Reload` to pick up changes.

## Project Structure
- `manifest.json` - Figma plugin manifest and permissions.
- `code.js` - Plugin logic (creates pages and handles messages).
- `ui.html` - Plugin UI (cards, buttons, styles).

## Notes
- Document access is `dynamic-page`, and the plugin is limited to Figma files (not FigJam).
- The current Dev Web template includes emoji prefixes in page names; adjust in `code.js` if you want plain text names.
