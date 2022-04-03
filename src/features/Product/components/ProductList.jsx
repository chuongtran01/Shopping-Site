import PropTypes from 'prop-types';
import React from 'react';
import { Box, Grid } from '../../../../node_modules/@material-ui/core/index';
import Product from './Product';

ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
}

function ProductList({data}) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;