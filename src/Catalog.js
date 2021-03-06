import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductCard from './ProductCard';

const styles = {
    list: { padding: 0 },
    listItem: { display: 'block' }
}

class Catalog extends Component {
    render() {
        const { products, classes } = this.props;
        const productsList = products.map((product) =>
            <Grid item component='li' className={classes.listItem} key={`Catalog-${product.id}`} xs={3}>
                <ProductCard product={product} />
            </Grid>
        );
        return (
            <Grid container
                  component='ul'
                  spacing={24}
                  className={classes.list}
            >
                {productsList}
            </Grid>
        );
    }
}

export default withStyles(styles)(Catalog);