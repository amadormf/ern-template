const req = require.context('../src', true, /\-test\.js?$/);
req.keys().forEach(req);
