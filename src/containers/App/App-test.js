import React from 'react';
import App from './App';
import { expect } from 'chai';
describe('Test nothing', () => {
  it('Check nothing', () => {
    expect(App).to.not.be.a('undefined');
  });
});
