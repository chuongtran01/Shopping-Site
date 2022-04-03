import React from 'react';
import { Box } from '../../../node_modules/@material-ui/core/index';
import { useRouteMatch } from '../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from '../../../node_modules/react-router-dom/index';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
    const match = useRouteMatch()
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage}/>
                <Route path={`${match.url}/:productId`} component={DetailPage}/>
            </Switch>
        </Box>
    );
}

export default ProductFeature;