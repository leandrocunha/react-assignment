import React from 'react';
import { shallow } from 'enzyme';
import Empty from './../../components/Empty';

describe('<Empty />', () => {
    it('should be mount', () => {
        const wrapper = shallow(<Empty />);
        expect(wrapper.exists()).toEqual(true);
    });
});
