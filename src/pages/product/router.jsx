import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

//页面
import ProductList from 'pages/product/index/index.jsx';
import ProductSave from 'pages/product/index/save.jsx';
import ProductDetail from 'pages/product/index/detail.jsx';
import CategoryList from 'pages/product/category/index.jsx';
import CategoryAdd      from 'pages/product/category/add.jsx';

class ProductRouter extends React.Component {
    render() {

        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Redirect exact from="/product" to="/product/index"/>
                <Route path="/product/save/:pid?" component={ProductSave}/>
                <Route path="/product/detail/:pid" component={ProductDetail}/>
                <Route path="/product-category/index/:categoryid?" component={CategoryList}/>
                <Route path="/product-category/add" component={CategoryAdd}/>

                <Redirect exact from="/product" to="/product/index"/>
                <Redirect exact from="/product-category" to="/product-category/index"/>
            </Switch>
        )
    }
}

export default ProductRouter;
