<img src="./src/assets/ost-gradient-logo.svg" alt="osTicket SVG logo" style="height: 128px; width: 128px;" />

# osTicket 2.0 Documentation

## Important references

This is a list of important tech you should be familiar with; used to build the project and documentation markup.

| Project                                     | Purpose                                                                                                                    |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Markdoc](https://markdoc.dev/)             | A Markdown superset; with cool utility components like tabs. All the docs should use this format (`*.mdoc`)                |
| [Astro](https://astro.build/)               | A static site generation framework with multi-framework support (eg. can use React and Vue components on the same project) |
| [Starlight](https://starlight.astro.build/) | The template used to build these docs                                                                                      |
| [Tailwind](https://tailwindcss.com/)        | The CSS preprocessor                                                                                                       |

## Running the project

### Prerequisite

The project uses [PNPM](https://pnpm.io/) for package management so if you don't have this installed already run:

```sh
# using the Node Package Manager
npm i -g pnpm

#using Homebrew
brew install pnpm
```

### Starting local server

Start a local server on `localhost:4321` :

```sh
pnpm dev
```

The (command) searchbar only works on production builds, so if you want to tech this first run:

```sh
pnpm build
pnpm preview
```

You access the docs on the same port.

> Happy hacking!
