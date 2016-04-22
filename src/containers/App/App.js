import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Helmet from 'react-helmet';
import { InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from '../../config/config';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    return Promise.all(promises);
  }
}])

@connect(
  state => ({}),
  {pushState: push})

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const {user} = this.props;
    const styles = require('./App.styl');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
