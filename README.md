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

This will copy the `uikit.min.js` file into the `js` folder. It will also create public, functions and resources folders with and it will copy assets into the `resources` folder.

If you need to run this task again run:

	yarn prestart (or yarn prebuild) && yarn build

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
	* `nb` - A couple of site-wide variables - the name of the site and the legal name of the client (for the copyright text). These map to the variables used in ProcessWire development. Additional variables could include `clientTel`, `clientEmail` and `clientAddress`.
	* `ukContainer` - The default `.uk-container` size used by the site.
	* `cta` - The default 'Call to Action' text.
	* `menu` - An array of title/name objects that defines the site menu.
	* `social` - An array of social media data.
	* `legal` - These should not need to be changed, as these are standard on all projects.
	* `items` - arrays of items to be rendered on the site.
* `./params.toml` - site-wide data including:

### Partials
Where possible, the provided partials should be used (and can be edited where necessary).

## Linting
ESlint and Stylelint are enabled in this package, but in different ways. ESlint should be enabled in your code editor, whereas Stylelint is run while SCSS files are being watched.

## Release
When the project is complete, run:

	yarn release

This will create CHANGELOG.md file.
