import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from './../../components/App';
import Matches from './../../components/Matches';
import Modal from './../../components/Modal';

const initialState = { competition: {}, modal: {} };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<App />', () => {
    it('should be existis', () => {
        const wrapper = shallow(<App store={store} {...initialState} />).dive();
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render matches', () => {
        const wrapper = shallow(<App store={store} {...initialState} />).dive();

        wrapper.setProps({ competition: { matches: { list: [], loading: false } } });
        expect(wrapper.find(Matches).length).toEqual(1);
    });

    it('should render modal', () => {
        const wrapper = shallow(<App store={store} {...initialState} />).dive();

        wrapper.setProps({ modal: { open: true } });
        expect(wrapper.find(Modal).length).toEqual(1);
    });
});
