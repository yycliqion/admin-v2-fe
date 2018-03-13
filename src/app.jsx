import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

//页面
import Home from 'pages/home/index.jsx';
import Layout from 'components/layout/index.jsx';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/product" component={Home}/> 
            <Route exact path="/product.cotegpry" component={Home}/> 
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));
