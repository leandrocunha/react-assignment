import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../components/Header';

describe('<Header />', () => {
    it('should be mount', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });
});
