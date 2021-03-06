import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Avatar
} from '@material-ui/core';

import Image from './Image';
import Price from './Price';
import TextBox from './TextBox';

const styles = {
    media: {
        height: 0,
        paddingTop: '130%',
    }
};

class ProductCard extends Component {
    render() {
        const { product, classes } = this.props;
        const avatar = <Avatar> <Image  src={product.imageUrl} width="100%" height="100%" /> </Avatar>;
        const title = <TextBox> {product.title} </TextBox>;
        const price = <Price currency="руб."> {product.price} </Price>;

        return(
            <Card>
                <CardMedia
                    className={classes.media}
                    image={product.imageUrl}
                    title={product.title}
                />
                <CardContent>
                    <Chip avatar={avatar} label={title} />
                    <Typography component="p"> {price} </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);