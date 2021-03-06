import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, mount } from 'enzyme';
import Amenities from '../client/src/components/Amenities.jsx';

configure({ adapter: new Adapter() });

describe('Amenities Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper.exists()).toBe(true);
  });
});
