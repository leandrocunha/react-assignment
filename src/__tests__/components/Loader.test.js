import React from 'react';
import { shallow } from 'enzyme';
import Loader from './../../components/Loader';

describe('<Loader />', () => {
    it('should be mount', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render with theme', () => {
        const theme = 'gray';
        const wrapper = shallow(<Loader />);

        wrapper.setProps({ theme });
        expect(wrapper.find(`.Loader--${theme}`).length).toEqual(1);
    });
});
