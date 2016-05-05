// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';

function loadStories() {
  const req = require.context('../src', true, /\-story\.js?$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
