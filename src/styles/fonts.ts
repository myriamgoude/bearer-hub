import * as variables from '../styles/variables'

export default `
  body {
    font-family:
      'ProximaNova-Regular', apple-system,BlinkMacSystemFont,
      "Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans",
      "Droid Sans","Helvetica Neue",Arial,sans-serif
  }

  h1 {
    font-size: ${variables.dimensions.headingSizes.h1}rem;
     font-family:
      'ProximaNova-Bold', apple-system,BlinkMacSystemFont,
      "Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans",
      "Droid Sans","Helvetica Neue",Arial,sans-serif
  }

  h2 {
    font-size: ${variables.dimensions.headingSizes.h2}rem
  }

  h3 {
    font-size: ${variables.dimensions.headingSizes.h3}rem
  }

  h4 {
    font-size: ${variables.dimensions.headingSizes.h4}rem
  }
 `
