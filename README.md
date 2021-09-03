# Hugo / Netlify CMS Template site #

NB Template Static Site

A package for building static code [Hugo](https://gohugo.io/) for static site generation, [NetlifyCMS](https://www.netlifycms.org/) for content management and [Netlify](https://www.netlify.com/) for hosting.

## Installation

	yarn init

Rename the package, and set the version to 1.0.0.

	yarn install

This will install all dependencies and prepare the package for use.

## Development
First run:

	yarn build

This will copy the `uikit.min.js` file into the `js` folder. It will also create public and resources folders with and it will copy assets into the `resources` folder.

If you need to run this task again run:

	yarn prebuild && yarn build

This will reset the project before it is built again.

To start development, run:

	yarn start

This will start watching the files, and boot the server at http://localhost:1313.

### UIkit Themeing
A custom UIkit theme is created based on the variables/mixins in the files in `src/scss/abstracts/`.

For small projects, tweaking the colour and typography variables in `src/scss/abstracts/_variables.scss` may be enough.

For most projects, you will also want to directly customise the theme using the UIkit variables themselves. These are in `src/scss/abstracts/uikit/_variables.scss`. You can add variables that are used in other UIkit components too - these will override UIkit's defaults.

If you need to significantly change the styling of a UIkit component, you need to add a file in the `uikit` folder containing mixin hooks that extend/override the component.

There are a few empty files there already. These do not need to be used, they are just the most common components that are extended. If you create a brand new file, make sure it is included at the bottom of `src/scss/abstracts/_mixins.scss`.

No SCSS that will be used elsewhere in the main theme should be placed in the `uikit` folder, it is only for the UIkit theme.

See https://github.com/uikit/uikit/tree/develop/src/scss for more information on the above and https://getuikit.com/docs/sass for more information on UIkit themeing in general.

## Hugo

### Data
A range of data is passed to Hugo:

* `./config.toml` - site-wide data including:
	*  A couple of site-wide variables - it includes `author`-> `name`, the name of the site (`title`) and the legal name of the client, `params` -> `clientName` (for the copyright text).
	* `instantPage` - An boolean for using (or excluding) just-in-time preloading plugin [instant.page](https://instant.page/).
	* `menu` - An array of title/name objects that defines the site menu.

### Partials
Where possible, the provided partials should be used (and can be edited where necessary).

## Linting
ESlint, Stylelint and Markdownlint are enabled in this package and can be run with:

	yarn lint

ESlint can be run with:

	lint:scripts

Stylelint is run with:

	lint:styles

And Markdownlint is run with:

	lint:markdown

## Release
When the project is complete, run:

	yarn release

This will create CHANGELOG.md file.
