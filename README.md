# Modular Sass Examples

Many real-world applications suffer from monolithic stylesheets. This is even more likely to happen when a CSS preprocessor is used, such as Sass or Less. This example project demonstrates a setup where styles are loaded per component while still using a central component library such as bootstrap.

The crucial part is that you need to separate you Sass imports into two types:

- Pure imports that only provide variables, mixins, functions but don't output any CSS
- Side-effect imports that will produce CSS when imported

**If you can, you should replace your `@import` rules with `@use` rules. See the official documentation about [Sass Modules](https://sass-lang.com/documentation/modules)**.

- `npm start` demonstrates the setup in development mode. CSS is embedded into JavaScript and hot module replacement (HMR) is activated which means that you can change the styles without reloading the website. This is especially useful when designing forms.
- `npm run build` creates a production build. Run `npm run serve` afterwards to view it in a browser. Observe the network tab for on-demand CSS files.
  