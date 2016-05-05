import glob from 'glob';
import path from 'path';
import register from 'ignore-styles';
register(['.styl', '.png']);

const source = path.join(__dirname, '../src/**/*-test.js');
const g = glob.sync(source, { realpath: true });
g.forEach(file => {
  require(file);
});
