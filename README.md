# Reloop Templates

> Showcase and live preview environment for production-ready Reloop email templates.

Inspired by modern developer-first email tools like React Email, **reloop-templates** provides a playground, component library, and preview interface to design, test, and render transactional and marketing emails with Reloop.

## Features

- ⚡ **Instant Live Preview**: Test templates dynamically with simulated email viewports (Desktop, Tablet, Mobile).
- 🔍 **Source Code Inspection**: Toggle between live rendered view and clean React / TSX source code.
- 📁 **Organized Template Library**: Structured directories for Auth, Transactional, Lifecycle, and Marketing emails.
- 📱 **Cross-Client Tested**: Optimized for deliverability across Outlook, Apple Mail, Gmail, and iOS/Android.
- 🎨 **Tailwind CSS Ready**: Modern styling patterns and dark mode email support.

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh) (or Node.js >= 18) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/reloop-labs/reloop-templates.git
cd reloop-templates

# Install dependencies
bun install
```

### Running Locally

```bash
bun run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser to inspect the template previewer.

### Building for Production

```bash
bun run build
bun run start
```

## Project Structure

```
reloop-templates/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with dark mode
│   │   ├── page.tsx           # Template gallery & preview viewer
│   │   └── globals.css        # Tailwind CSS v4 styling
│   ├── components/
│   │   ├── sidebar.tsx        # Template folder tree navigation
│   │   ├── topbar.tsx         # Preview/Code toggles, viewport controls
│   │   ├── preview-canvas.tsx # Responsive email frame
│   │   └── code-viewer.tsx    # Syntax-highlighted code inspector
│   └── templates/
│       ├── data.ts            # Template registry and categories
│       └── hello-world/       # Hello World starter template
└── package.json
```

## License

MIT © [Reloop Labs](https://reloop.sh)
