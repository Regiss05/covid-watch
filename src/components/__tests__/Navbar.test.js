import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Header/Navbar';

describe('Test presence of Navbar', () => {
  test('should render Navbar component', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});
