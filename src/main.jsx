import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import theme from './theme.js'

// HashRouter (URLs like /#/about) is used instead of BrowserRouter because
// GitHub Pages serves static files and doesn't know how to route a direct
// visit to /about back to index.html. HashRouter avoids needing any extra
// server configuration.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
