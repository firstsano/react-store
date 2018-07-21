import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles'
import { Grid, Divider } from '@material-ui/core';

import Header from './Header';
import CatalogPage from './CatalogPage';

const styles = {
    container: {
        maxWidth: '1170px',
        margin: 'auto'
    },
    divider: {
        margin: '20px 0'
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseLine />
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Header title='React Store' />
                        <Divider className={classes.divider} />
                        <CatalogPage />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);