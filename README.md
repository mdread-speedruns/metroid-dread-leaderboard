# Metroid Dread Leaderboard

Work in progress.

## Development Environment

Requires:

- Node.js v18.1.0
- npm v8.12.1

Better to use [asdf-vm/asdf](https://github.com/asdf-vm/asdf) or [nodenv/nodenv](https://github.com/nodenv/nodenv) for Node.js version control.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser, and developing the application with Hot reloading.

## Generate Static Resource

Generate static resources:

```bash
npm run build
npm run export
```

Serve generated static resource:

```bash
npm run serve
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see static resources.
