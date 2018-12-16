import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './components/hoc/Layout';
import Clickable from './components/hoc/Clickable';
import AsyncComponent from './components/hoc/AsyncComponent';

import Logo from './assets/global/logo.svg';
//import * as actions from './store/actions/index';

const asyncHomeNavigation = AsyncComponent(() => {
  return import('./components/Navigation/HomeNavigation');
});

const asyncPortfolio = AsyncComponent(() => {
  return import('./components/Portfolio');
});

class App extends Component {
  
  render() {

    // TODO: Define routes according to initial load
    let routes = (
      <Switch>
          <Route path="/portfolio" component={asyncPortfolio} />
          {/* <Route path="/profile"   component={asyncOrders} />
          <Route path="/about"     component={Logout} />
          <Route path="/blog"      component={asyncAuth} /> */}
          <Route path="/"          exact component={asyncHomeNavigation} />
          <Redirect to="/" />
      </Switch>
    );

    return (
      <Layout>
        <Clickable url="/" className="svg-wrapper mainLogo">
          <Logo />
        </Clickable>
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    // TODO. Auth is not ready. Link to Sitecore Edit
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);