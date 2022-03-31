/* eslint-disable no-undef */
import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

it('Renders App', () => {
  mount(<App />);
});