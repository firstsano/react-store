import 'typeface-roboto';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from '../../src/App';

class Main extends Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return <App />
    }
}

// Create a theme instance.
const theme = createMuiTheme({});

ReactDOM.hydrate(
    <MuiThemeProvider theme={theme}>
        <Main />
    </MuiThemeProvider>,
    document.getElementById('root')
);