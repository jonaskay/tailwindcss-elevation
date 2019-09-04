# tailwindcss-elevation
[![Build Status](https://travis-ci.com/jonaskay/tailwindcss-elevation.svg?branch=master)](https://travis-ci.com/jonaskay/tailwindcss-elevation)

Add Material Components elevation classes to your [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) project. Check out the [demo](https://jonaskay.github.io/tailwindcss-elevation/)!

## Installation

To install the package, run

    npm install tailwindcss-elevation

To activate the plugin, add a `tailwind.config.js` file to the root of your project:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
  ]
}
```

If you don't need the responsive versions, you can pass in an empty array.

You can also include other supported variants. The full list of available variants is:

* `responsive`
* `hover`
* `focus`
* `active`
* `group-hover`
* `focus-within`

To learn more about configuring your Tailwind CSS installation, see https://tailwindcss.com/docs/configuration.

### Configuration

To change the default configurations, you can include a config object:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss-elevation')(
      [],
      {
        color: '77,192,181',
        opacityBoost: '0.23'
      }
    )
  ]
}
```

Config object accepts the following properties:

* `color` changes the default box-shadow base color and accepts an RGB (e.g. `'77,192,181'`) or HEX triplet (e.g. `'#4dc0b5'`) as its value. When using a CSS custom property (variable) as the value, you have to use an RGB triplet.
* `opacityBoost` is added to the default box-shadow opacity and accepts a number between 0.0 and 1.0

## Basic usage

You can apply elevation to an element using the `.elevation-{z-value}` utilities.

```html
<button class="elevation-2">Button</button>
```

The z values range from 0 to 24.

## Material documentation
* [Material Design: Elevation](https://material.io/design/environment/elevation.html)
* [Material Components for the web](https://material.io/develop/web/)
