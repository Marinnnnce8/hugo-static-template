const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: [
                './layouts/**/*.html',
                './content/**/*.md',
            ],
            safelist: [
                'table',
                'thead',
                'tbody',
                'tr',
                'th',
                'td',
                'h5',
                ...whitelister([
                    './node_modules/uikit/dist/uikit.min.css',
                    './node_modules/mmenu-js/dist/mmenu.css',
                ]),
            ],
        }),
    ],
}