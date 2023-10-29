# Tachiyomi Website Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Development Setup

You will need [Node.js](http://nodejs.org) **version 20+**, and [pnpm](https://pnpm.io/installation) **version 8+**.

After cloning the repo and entering the the directory, go to the `/website` folder and run:

``` bash
# Installs any dependencies needed.
$ pnpm install
```

To run the project now, run:

``` bash
# This command start a local server you can access and edit live.
$ pnpm dev
```

### Commonly used PNPM scripts

``` bash
# This command will generate a static site inside a dist directory in your project.
$ pnpm build

# Run this command to preview the built files in a local server.
$ pnpm preview
```

 **Please make sure to have `pnpm test` pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

It is also recommended you lint your files before the PR.

## Project Structure

- **`website`**: contains all the website related files.
  - **`src`**: contains all the markdown files used for the website.
    - **`.vitepress`**:
      - **`theme`**: contains custom theme files.
      - `config.ts`: main configuration file for VitePress.
    - **`public`**: files to be exposed publicly without any processing.
  - **[`dist`](https://vitepress.dev/guide/deploy)**: contains built files for distribution.
    Note this directory is only updated when a release happens or when you run the build command.
    Changes to this folder will not carry over with Git.
  - `package.json`: contains information about which plugins are installed in the project.

## Images and Videos guidelines

### Common

- Use the Android Emulator

- Use the default white theme

- Preferably use local source or a self-hosted extension if your media contains series

- Resize to have a width of 648px

### Images

- Use `.webp`

### Videos

- Use `.webm` format
  - Encode it with our [HandBrake profile](./.github/assets/tachiyomi-handbrake-profile.json)

- Remove audio track

## Credits

Thank you to all the people who have already contributed!

[![List of Contributors](https://contrib.rocks/image?repo=tachiyomiorg/website 'List of Contributors')](https://github.com/tachiyomiorg/website/graphs/contributors)
