import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '../../../../../node_modules/@material-ui/core/index';
import { Chip } from '@mui/material'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        padding: 0,
        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            margin: 0,
            padding: theme.spacing(1)
        }
    }
}))

const FILTER_LIST = [
    {
        id: 1,
        getLabel:  () => 'Free Delivery',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = {...filters}
            if (newFilters.isFreeShip) {
                newFilters.isFreeShip = false
            }
            else {
                newFilters.isFreeShip = true
            }

            return newFilters
        },
    },
    {
        id: 2,
        getLabel:  (filters) => 'Discounts',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.isPromotion
            return newFilters
        },
        onToggle: () => {},
    },
    {
        id: 3,
        getLabel:  (filters) => `$${filters.salePrice_gte} - ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.salePrice_lte
            delete newFilters.salePrice_gte
            return newFilters
        },
        onToggle: () => {},
    },
    {
        id: 4,
        getLabel:  (filters) => {
            switch (filters['category.id']) {
                case 1:
                    return 'Fashion'
                    break;
                case 2:
                    return 'Face Mask'
                    break;
                case 3:
                    return 'Beauty'
                    break;
                case 4:
                    return 'Laptop'
                    break;
                case 5:
                    return 'Hard Drive'
                    break;
                case 6:
                    return 'Cellphone'
                    break;
            }
        },
        isActive: () => true,
        isVisible: (filters) => filters['category.id'],
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters['category.id']
            return newFilters
        },
        onToggle: () => {},
    }
]


FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterViewer({filters = {}, onChange = null}) {
    const classes = useStyles();

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters])
    return (
        <Box component="ul" className={classes.root}>
            {visibleFilters.map(x => (
                <li key={x.id}>
                    <Chip
                        label = {x.getLabel(filters)}
                        color = {x.isActive(filters) ? 'primary' : 'default'}
                        clickable = {!x.isRemovable}
                        size = 'small'
                        onClick = {x.isRemovable ? null : () => {
                            if (!onChange) return;

                            const newFilters = x.onToggle(filters)
                            onChange(newFilters)
                        }}
                        onDelete = {x.isRemovable ? () => {
                            if (!onChange) return;

                            const newFilters = x.onRemove(filters)
                            onChange(newFilters)
                        } : null}
                    />
                </li>
            ))}
        </Box>
        
    );
}

export default FilterViewer;