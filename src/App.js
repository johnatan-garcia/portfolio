import React, { Component } from 'react';
import { connect } from 'react-redux';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './components/hoc/Layout';
import HomeNavigation from './components/Navigation/HomeNavigation';
//import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <HomeNavigation />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);