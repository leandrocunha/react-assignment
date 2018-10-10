import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Loader from './../../components/Loader';
import Modal from './../../components/Modal';
import ModalContent from './../../components/ModalContent';

const initialState = { modal: {} };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Modal />', () => {
    it('should be exists', () => {
        const wrapper = shallow(<Modal store={store} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render Loader', () => {
        const wrapper = shallow(<Modal store={store} />).dive();
        expect(wrapper.find('.Modal').length).toEqual(1);
        expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('should render ModalContent', () => {
        const wrapper = shallow(<Modal store={store} />).dive();

        wrapper.setState({ loading: false });
        expect(wrapper.find(ModalContent).length).toEqual(1);
    });

    it('should close modal', () => {
        const wrapper = shallow(<Modal store={store} />).dive();
        const close = jest.spyOn(wrapper.instance(), 'close');

        wrapper.instance().forceUpdate();
        wrapper
            .find('.Modal__Content__Close')
            .props()
            .onClick();
        expect(close).toBeCalled();
    });
});
