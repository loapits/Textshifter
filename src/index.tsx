import React from 'react'
import ReactDOM from 'react-dom'
import App from './App-Container'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import 'normalize.css'

/**
 * Parent component, from which start rendering application. To Provider
 * transmitted global store. In a container BrowserRouter transmitted basename, 
 * which needs for working on hosing.
 */
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
