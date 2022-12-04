import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cons Cantarell, 'Open Sans', 'Helvetica Neue', 'Helvetica', sans-serif
  }

  html, body, #__next {
    height: 100%;
  }
`
export default GlobalStyles
