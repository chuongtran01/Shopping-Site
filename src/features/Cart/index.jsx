import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';
import { Box, Container, Grid, Paper, Typography, makeStyles } from '../../../node_modules/@material-ui/core/index';

CartFeature.propTypes = {
    
};

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(3)
    },

    left: {
        width: '70%',
        padding: theme.spacing(1.5),
    },

    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),

    },

    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
    }

}))
function CartFeature(props) {
    const classes = useStyles();

    const cartTotal = useSelector(cartTotalSelector)
    return (
        <div>
            <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <Typography>HAHA</Typography>
                        </Paper>  
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <Typography>Total: {cartTotal}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </div>
    );
}

export default CartFeature;