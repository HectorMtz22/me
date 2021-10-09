// const postcss = require("postcss");
// const postcssImport = require("postcss-import");
// const postcssNormalize = require("postcss-normalize");

// postcss([
//   postcssImport(
//     postcssNormalize()
//     /* pluginOptions (for PostCSS Normalize) */
//       .postcssImport
//       /* pluginOptions (for PostCSS Import) */
//       ()
//   ),
// ]); // now you can use @import "normalize.css", etc. again

module.exports = {
  plugins: [
    require("postcss-normalize"),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};
