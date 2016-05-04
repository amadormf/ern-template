/* eslint-disable no-unused-expressions */
import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import routes from '../src/routes';
const { describe, it, before, beforeEach, context } = global;
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

describe('Loader routes', () => {
  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>App</h1>
          <Link to="/about" activeClassName="about-is-active">About</Link>{' '}
          <Link to="/dashboard" activeClassName="dashboard-is-active">Dashboard</Link>
          <div>
            {this.props.children}
          </div>
        </div>
      );
    }
  }

  class Dashboard extends Component {
    render() {
      return (
        <div className="Dashboard">
          <h1>The Dashboard</h1>
        </div>
      );
    }
  }

  class About extends Component {
    render() {
      return (
        <div className="About">
          <h1>About</h1>
        </div>
      );
    }
  }

  const DashboardRoute = {
    path: '/dashboard',
    component: Dashboard
  }

  const AboutRoute = {
    path: '/about',
    component: About
  }

  const RedirectRoute = {
    path: '/company',
    onEnter(nextState, replaceState) {
      replaceState(null, '/about')
    }
  }

  const routes = {
    path: '/',
    component: App,
    childRoutes: [ DashboardRoute, AboutRoute, RedirectRoute ]
  }

  it('Main route /', (done) => {

    match({ routes, location: '/company' }, function (error, redirectLocation, renderProps) {
      console.log(arguments);
    });
    done();
  });
});
