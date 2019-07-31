import 'ress'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    overflow-y: initial;
    margin: 0;
    font-size: 62.5%;
  }
  @font-face{
    font-family: 'Roboto', sans-serif;
    src: url(fonts/roboto/Roboto-Regular.tff) format('tff');
  }
  
  
  body, #root {
    height: 100vh;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  ::selection {
    background-color: ${(props: any) => props.theme.selectionColor};
  }
`