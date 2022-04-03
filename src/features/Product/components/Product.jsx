import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '../../../../node_modules/@material-ui/core/index';
import { Skeleton } from '../../../../node_modules/@mui/material/index';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useHistory } from '../../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import { formatPrice } from 'utils';

Product.propTypes = {
    product: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            color: theme.palette.primary.dark,
            cursor: 'pointer',
        }
    },
}) )
function Product({product}) {

    const classes = useStyles()
    const handleClick = () => {
        // navigate to detail page: /products/:productId
        history.push(`/products/${product.id}`)
    }

    const history = useHistory()
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER

    return (
        <Box padding={1} onClick={handleClick} className={classes.root}>
            <Box padding={1} minHeight="262px">
                <img src={thumbnailUrl} alt={product.name} width='100%'/>
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr="1">
                    {formatPrice(product.salePrice)}
                </Box>

                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
            
        </Box>
    );
}

export default Product;