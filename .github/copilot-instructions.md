# Copilot instructions for Kd's Tools

## Repository overview

This repository is a small static web app for a personal toolbox. It is not a framework app and does not use a bundler or package manager.

Primary files:
- `index.html`: tool catalog and the separate modal panel for each tool
- `script.js`: browser logic for search/filtering, tool dispatch, utility tools, and persistence
- `style.css`: layout, color system, card styling, dialog styles, and responsive behavior
- `assets/`: static media assets used by the UI

## Build, test, and lint commands

There is no automated build, lint, or test setup in this repository.

Use a simple static server for manual verification from the repo root:

```bash
cd d:\KdsTools
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser to validate UI changes.

If a quick smoke check is needed, focus on the specific feature being edited rather than running a broad suite (there is no suite to run).

## Architecture and workflow

This app is a single-page toolbox with a catalog-driven UI.

- `index.html` defines the grouped tool cards and the shared modal used for interactive utilities.
- `script.js` wires tool cards to their panels through matching `data-tool` attributes; `openTool()` shows only the selected panel inside the shared modal.
- Keep each tool's inputs, outputs, and status message in its own panel so opening one tool cannot expose or reuse another tool's controls.
- The app keeps user state in `localStorage` for Pomodoro state, todo items, quick notes, exam events, weekly study hours, and timetable entries.
- Search and category filtering are implemented client-side by normalizing text and checking tool metadata (`data-name`, `data-category`, `data-keywords`, and the description text).
- PDF merge, split, image conversion, and optimization use pdf-lib 1.17.1, loaded on demand from cdnjs. PDF contents are processed in the browser; PDF tools require a network connection to fetch the library on first use.
- PDF optimization rewrites the document without lossy image recompression; it does not guarantee a smaller output file.
- Productivity panels include a three-mode Pomodoro timer, animated checklist, autosaved notes, exam countdown, weekly study chart, editable weekly timetable, and bill splitter.
- Each tool panel uses its own `data-tool` value and dedicated DOM controls. Storage uses the `kds-tools-` key prefix in `storageKeys` to keep each feature's state separate.

The app is intentionally lightweight: browser-native JavaScript, DOM manipulation, and local persistence rather than a framework or module system.

## Key conventions

- Keep changes compatible with the existing vanilla JavaScript approach; avoid introducing frameworks, build tooling, or a module-based structure unless there is an explicit repo-wide requirement.
- Prefer editing the existing DOM-based patterns instead of creating a new app architecture. The current structure relies on IDs, `data-tool`, and `data-open-tool` attributes.
- When adding a new tool, add a card and a dedicated panel in `index.html` with the same `data-tool` value; add that panel's behavior in `script.js`. The panel registry drives modal visibility and focus.
- Persist user data with the `kds-tools-` keys declared in `storageKeys` and validate data loaded from `localStorage` before rendering it.
- Preserve the existing Vietnamese UI copy and the current app styling unless a task specifically calls for a redesign.
- Keep accessibility in mind: buttons, modal close actions, status text, and keyboard shortcuts are already part of the UI conventions.

## Working expectations for changes

- Validate UI changes by loading the page in a browser and checking the affected workflow directly.
- Prefer surgical edits to the existing HTML/CSS/JS structure over refactors.
- If a new feature needs persistent state, reuse the established `localStorage` pattern rather than inventing a separate storage system.
- Treat this as a static tool dashboard, not a multi-page application: keep interactions self-contained inside the main page and dialog pattern.
