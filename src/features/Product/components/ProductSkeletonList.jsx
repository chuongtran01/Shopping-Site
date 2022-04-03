import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '../../../../node_modules/@material-ui/core/index';
import { Skeleton } from '../../../../node_modules/@mui/material/index';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};


function ProductSkeletonList({length = 6}) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width="100%" height={262} />
                            <Skeleton/>
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;