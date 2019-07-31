import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './components/App'
import { configureStore } from './store'
import { createApplicationServices } from './services'
import { theme, GlobalStyle } from './theme'


const services = createApplicationServices("foo")
const store = configureStore(services)

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)