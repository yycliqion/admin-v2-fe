import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

//页面
import ProductList from 'pages/product/index/index.jsx';
import ProductSave from 'pages/product/index/save.jsx';
import ProductDetail from 'pages/product/index/detail.jsx';

class ProductRouter extends React.Component {
    render() {

        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Redirect exact from="/product" to="/product/index"/>
                <Route path="/product/save/:pid?" component={ProductSave}/>
                <Route path="/product/detail/:pid" component={ProductDetail}/>

            </Switch>
        )
    }
}

export default ProductRouter;
