import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, LinearProgress, makeStyles, Paper, Typography } from '../../../../node_modules/@material-ui/core/index';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch } from '../../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/Filters/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import { Route, Switch } from '../../../../node_modules/react-router-dom/index';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(3)
    },

    left: {
        width: '250px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
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

function DetailPage() {
    const classes = useStyles();
    const {params : {productId}, url} = useRouteMatch()

    const {product, loading} = useProductDetail(productId)
    if (loading) {
        return (
            // TODO: Make a better loading (skeleton)
            <Box className={classes.loading}>
                <LinearProgress/>
            </Box>
        )
    }

    const handleAddToCartSubmit = (formValues) => {
        console.log('Form Submit', formValues);
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product}/>
                        </Grid>

                        <Grid item className={classes.right}>
                            <ProductInfo product={product}/>
                            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu/>

                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product}/>
                    </Route>

                    <Route exact path={`${url}/additional`} component={ProductAdditional} />
                    <Route exact path={`${url}/reviews`} component={ProductReviews} />
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;