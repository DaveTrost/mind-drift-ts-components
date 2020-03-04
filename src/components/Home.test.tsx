import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component', () => {
  it('renders the Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
