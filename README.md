# Modular Sass Examples

Many real-world applications suffer from monolithic stylesheets. This is even more likely to happen when a CSS preprocessor is used, such as Sass or Less.

This example project demonstrates a setup where styles are loaded per component while still using a central component library such as bootstrap.

- `npm start` demonstrates the setup in development mode. CSS is embedded into JavaScript and hot module replacement (HMR) is activated which means that you can change the styles without reloading the website. This is especially useful when designing forms.
- `npm run build` creates a production build. Run `npm run serve` afterwards to view it in a browser. Observe the network tab for on-demand CSS files.
  