import * as variables from '../styles/variables'

import ProximaNovaRegular from '../fonts/ProximaNova-Regular.woff'
import ProximaNovaLight from '../fonts/ProximaNova-Light.woff'
import ProximaNovaSemibold from '../fonts/ProximaNova-Semibold.woff'
import ProximaNovaBold from '../fonts/ProximaNova-Bold.woff'

import ProximaNovaRegularW2 from '../fonts/ProximaNova-Regular.woff2'
import ProximaNovaLightW2 from '../fonts/ProximaNova-Light.woff2'
import ProximaNovaSemiboldW2 from '../fonts/ProximaNova-Semibold.woff2'
import ProximaNovaBoldW2 from '../fonts/ProximaNova-Bold.woff2'

export default `
  @font-face {
    font-family: 'ProximaNova-Regular';
    src:url('${ProximaNovaRegularW2}') format('woff2'),
    url('${ProximaNovaRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ProximaNova-Light';
    src:url('${ProximaNovaLightW2}') format('woff2'),
    url('${ProximaNovaLight}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ProximaNova-Semibold';
    src:url('${ProximaNovaSemiboldW2}') format('woff2'),
    url('${ProximaNovaSemibold}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ProximaNova-Bold';
    src:url('${ProximaNovaBoldW2}') format('woff2'),
    url('${ProximaNovaBold}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

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
