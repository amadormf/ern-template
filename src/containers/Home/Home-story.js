import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Home from './Home';


storiesOf('Home', module)
  .add('Home view', () => (
    <Home />
  ));
