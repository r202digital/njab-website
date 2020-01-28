const withFonts = require('next-fonts');

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports =
withCss(
  withSass(
    withFonts(
      {
        webpack: config => {
          // Fixes npm packages that depend on `fs` module
          config.node = {
            fs: 'empty'
          }

          return config
        },
        devIndicators: {
          autoPrerender: false,
        },
        target: "serverless",
      }
    )
  )
)
