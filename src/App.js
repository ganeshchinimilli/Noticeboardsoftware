import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoading } from "actions/general";

import Loader from 'utils/loader';
import PrivateRoute from "components/hocs/private-route/PrivateRoute";
import AuthRoute from "components/hocs/auth-route/AuthRoute";
import Login from "components/auth/login/Login";
import {Landing} from "components/dashboard/landing/Landing";
import NotFound from "components/information/not-found/NotFound";

import { UpdateProduct } from './components/dashboard/landing/UpdateProduct.js.js';


class App extends React.Component {
  render() {
    const { auth, general } = this.props;
    return (
      <>
        {general.loading && <Loader />}
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Landing} authenticated={auth.authenticated} />
            
            
            <AuthRoute exact path="/login" component={Login} authenticated={auth.authenticated} />
            
            <AuthRoute  exact path="/editar/:id" component={UpdateProduct} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    general: state.general
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (status) => dispatch(setLoading(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);