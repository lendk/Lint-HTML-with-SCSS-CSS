# Lint-HTML-with-SCSS-CSS
You can use this sass/css file to lint your html for broken links, bad attributes or any other development lazyness

## Installation
Using `npm`: `npm install lint-html-with-scss-css`

## Developement
Clone this repo and `cd` to it, after that in console type: `npm install` to install dev dependencies, it is gulp based and has a `gulp watch` with `browsersync` enabled, it will autocompile on save.

## Usage
Include the script from the `dist` folder in your page or use it directly on your scss project via `@import lint.scss`

Add `.debug` class on the `html` element and you are ready to go.

See: `index.html` to see how it works.

### Referrence 
Based on this article : https://bitsofco.de/linting-html-using-css/
