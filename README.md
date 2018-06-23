# next-babel-minify

Change UglifyJS for Babel Minify to minify the code of your application.

## Installation

```
npm install --save next-babel-minify
```

or

```
yarn add next-babel-minify
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withBabelMinify = require('next-babel-minify')()
module.exports = withBabelMinify()
```

Optionally you can provide [Babel Minify options](https://webpack.js.org/plugins/babel-minify-webpack-plugin/#options):

```js
// next.config.js
const withBabelMinify = require('next-babel-minify')({
  comments: false
})
module.exports = withBabelMinify()
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withBabelMinify = require('next-babel-minify')()
module.exports = withBabelMinify({
  webpack(config, options) {
    return config
  }
})
```
