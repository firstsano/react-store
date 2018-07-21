import React from 'react';
import { renderToString } from 'react-dom/server'
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

import App from './src/App';

function renderFullPage(html, css) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>React Store</title>
                <!-- Setup material ui -->
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            </head>
            <body>
                <div id="root">${html}</div>
                <style id="jss-server-side">${css}</style>
            </body>
        </html>
    `;
}

const handleRender = function(req, res) {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const theme = createMuiTheme({});

  const generateClassName = createGenerateClassName();

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))
}

export default handleRender;