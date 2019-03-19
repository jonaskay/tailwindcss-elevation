# tailwindcss-elevation

Add Material Components elevation classes to your Tailwind CSS project.

## Installation

To install the package, run

    npm install tailwindcss-elevation

To activate the plugin, modify your Tailwind CSS config file:

```javascript
// ...

module.exports = {
  // ...
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
  ]
  // ...
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

## Basic usage

You can apply elevation to an element using the `.elevation-{z-value}` utilities.

```html
<button class="elevation-2">Button</button>
```

The z values range from 0 to 24.

## Material documentation
* [Material Design: Elevation](https://material.io/design/environment/elevation.html)
* [Material Components for the web](https://material.io/develop/web/)
