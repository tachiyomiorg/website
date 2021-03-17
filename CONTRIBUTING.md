# Tachiyomi Website Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Development Setup

You will need [Node.js](http://nodejs.org) **version 12+**, and [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) **version 7+**.

After cloning the repo, run:

``` bash
# Installs any dependencies needed.
$ npm install
```

To run the project now, run:

``` bash
# This command start a local server you can access and edit live.
$ npm run serve
```

### Commonly used NPM scripts

``` bash
# This command will generate a static site inside a public directory in your project.
$ npm run build

# This command will lint your files.
$ npm run lint
```

 **Please make sure to have `npm run build` pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

## Project Structure

- **`public`**: contains built files for distribution. Note this directory is only updated when a release happens or when you run the build command. Changes to this folder will not carry over with Git.

- **`src`**: contains the main code files.

  - **`.vuepress`**: contains the main code files.

	- **`components`**: this contains all the `.vue` components used on the website.

    - **`config`**: contains complementary files for `config.js`.

      - `navBar.js`: config for navigation bar.

      - `plugins.js`: config for plugins.

      - `sideBar.js`: config for sidebar.

     - **`public`**: contains the static images/videos/scripts you'll want to use for the website.

     - **`store`**: this contains the data store file used to connect features like downloads to main app and its forks.

     - **`styles`**: all the projects style files are contained here.

     - **`theme`**: this contains the extended Vuepress theme files.

    - [`config.js`](https://vuepress.vuejs.org/guide/basic-config.html#config-file): main config file for Vuepress.

	- `constants.js`: all reused variables/constants is stored here.

	- [`enhanceApp.js`](https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements): this file is the place to install Vue plugins, register components and directives, etc.

  - **`download`**: contains the markdown file for the `/download/` page.

  - **`extensions`**: contains the markdown file for the `/extensions/` page.

  - **`forks`**: contains the markdown files for the `/forks/...` pages.

  - **`help`**: contains the markdown files for all the `/help/...` pages.

  - **`sandbox`**: contains the markdown files for the `/sandbox/...` pages.

  - `README.md`: markdown file for the front-page.

- `package.json`: contains information about which plugins are installed in the project.

## Credits

Thank you to all the people who have already contributed!

<a href="https://github.com/tachiyomiorg/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tachiyomiorg/website" />
</a>
