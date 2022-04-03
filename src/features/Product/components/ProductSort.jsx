import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '../../../../node_modules/@material-ui/core/index';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange} 
            textColor = "primary"
            aria-label="disabled tabs example"
        >
            <Tab label="Lowest to Highest" value="salePrice:ASC"></Tab>
            <Tab label="Highest to Lowest" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;