import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from '../../config/config';
import { asyncConnect } from 'redux-async-connect';
import styles from './App.styl';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    return Promise.all(promises);
  },
}])

@connect(
  state => ({}),
  { pushState: push })

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  handleLogout = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
