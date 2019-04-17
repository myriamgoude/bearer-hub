import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'

export default `
  html ,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.darkBlue};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.darkBlue};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }



  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table:not(.pricing-table) {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.bright};
    font-size: 85%;
    border-collapse: collapse;
  }

  table:not(.pricing-table) td,
  table:not(.pricing-table) th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.bright};
  }

  table:not(.pricing-table) th {
    text-align: left;
  }

  table:not(.pricing-table) tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${colors.darkBlue};
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${colors.darkBlue};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.bright};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.bright};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`
