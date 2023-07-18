# Tachiyomi Website Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Development Setup

You will need [Node.js](http://nodejs.org) **version 16+**, and [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) **version 8+**.

After cloning the repo, run:

``` bash
# Installs any dependencies needed.
$ npm install
```

To run the project now, run:

``` bash
# This command start a local server you can access and edit live.
$ npm run docs:dev
```

### Commonly used NPM scripts

``` bash
# This command will generate a static site inside a dist directory in your project.
$ npm run docs:build

# Run this command to preview the built files in a local server.
$ npm run docs:preview
```

 **Please make sure to have `npm run docs:build` pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

It is also recommended you lint your files before the PR.

## Project Structure

- **`src`**: contains all the markdown files used for the website.
  - **`.vitepress`**:
    - **[`dist`](https://vitepress.dev/guide/deploy)**: contains built files for distribution. Note this directory is only updated when a release happens or when you run the build command. Changes to this folder will not carry over with Git.
    - **`theme`**: contains custom theme files.
    - `config.ts`: main configuration file for VitePress.
  - **`public`**: files to be exposed publicly without any processing.
- `package.json`: contains information about which plugins are installed in the project.

## Images and Videos guidelines

### Common

- Use the Android Emulator

- Use the default white theme

- Preferably use local source or a self-hosted extension if your media contains manga

- Resize to have a width of 648px

### Images

- Use `.png` format (should we use `.webp` to match videos?)

### Videos

- Use `.webm` format
  - Encode it with our [HandBreak profile](../.github/tachiyomi-handbrake-profile.json)

- Remove audio track

## Credits

Thank you to all the people who have already contributed!

<a href="https://github.com/tachiyomiorg/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tachiyomiorg/website" />
</a>

