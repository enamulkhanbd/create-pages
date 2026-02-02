# Create Pages

Create Pages is a lightweight Figma plugin that replaces whatever pages exist in the current document with a clean, opinionated structure for common design and handoff workflows. It renames the first page to **Cover**, removes every other page, and then recreates the selected template's sequence of steps with separators (`-----`) where they belong.

## Key Features
- Five curated page templates for Design Web, Design App, Feedback, Dev Web, and Dev App workflows so teams always start with the right structure.
- Clears the file by renaming the first page, deleting every other page, and creating the new page set in the exact order defined in `code.js`.
- Offline UI: everything runs from `ui.html` and `code.js`, and the manifest explicitly forbids network access (`"allowedDomains": ["none"]`) while granting `dynamic-page` document access.
- Friendly UX that prevents creation until a template is selected and surfaces success or error notifications inside Figma.

## Template page sets
Page names are created in the order listed below; separators (`-----`) keep long sections readable.

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
- Web UI (prefixed with a laptop emoji)
- Responsive UI (prefixed with a phone emoji)
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

## Installation
1. Open the Figma desktop app (plugin development only works on desktop).
2. Use **Plugins > Development > Import plugin from manifest...** and point to this repo's `manifest.json` file.
3. Run the plugin from **Plugins > Development > Create Pages**.

## Plugin workflow
- The UI defined in `ui.html` renders five cards with inline SVG icons, tracks the selected design type, and enables the **Create Pages** button only after a card is chosen.
- Clicking **Create Pages** sends a `create-page` message to `code.js`. The script renames the first page to Cover, removes the rest, creates the template's pages, shows a success notification, and closes the plugin.
- If no template is selected, the UI posts an `error` message so `code.js` can show a reminder notification.
- The **Cancel** button only closes the plugin and leaves the file untouched.

## Development
- Requirements: Figma desktop app and a text editor. There is no build step or package manager; editing `code.js` and `ui.html` is enough.
- Typical cycle:
  1. Make edits to `code.js` (template logic, cleanup) or `ui.html` (layout, styling, event handling).
  2. Inside Figma, choose **Plugins > Development > Reload** to refresh the plugin bundle.
  3. Run the plugin, choose a template card, and confirm the resulting pages match the desired sequence.

## Project layout
- `manifest.json`: declares `api: 1.0.0`, the main script (`code.js`), the UI bundle (`ui.html`), `dynamic-page` access, and zero network permissions.
- `code.js`: handles messages, resets existing pages, creates the selected template, and posts notifications.
- `ui.html`: renders the card grid, wires the buttons, and posts `create-page` / `cancel` messages to the controller.
- `.github/`: houses any workflow definitions (not modified here but part of the repository).

## Notes
- The Dev Web template keeps emoji prefixes on Web UI and Responsive UI; change those strings in `code.js` if you prefer plain text names.
- Since the plugin removes every page except Cover, run it only when you intend to start fresh. Figma's undo stack still preserves the previous pages until you close the file.
