import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import TextBox from './TextBox';

const styles = {
    price: {
        color: purple["800"]
    }
};

class Price extends Component {
    render() {
        const { currency, classes } = this.props;
        const currencyBox = currency ? <TextBox> {currency} </TextBox> : "";
        return (
            <span className={classes.price}>
                <TextBox> {this.props.children} </TextBox>
                {currencyBox}
            </span>
        );
    }
}

export default withStyles(styles)(Price);