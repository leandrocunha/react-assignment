import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Empty from './../../components/Empty';
import Loader from './../../components/Loader';
import Standings from './../../components/Standings';
import Table from './../../components/Table';

const initialState = { competition: { standings: { loading: true } } };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Standings />', () => {
    it('should be existis', () => {
        const wrapper = shallow(<Standings store={store} {...initialState} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render Loader', () => {
        const wrapper = shallow(<Standings store={store} {...initialState} />).dive();

        wrapper.setProps({ competition: { standings: { loading: true } } });
        expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('should render Table', () => {
        const wrapper = shallow(<Standings store={store} {...initialState} />).dive();
        const showModal = jest.spyOn(wrapper.instance(), 'showModal');

        wrapper.setProps({ competition: { standings: { loading: false, list: [{ id: 1 }] } } });
        expect(wrapper.find(Table).length).toEqual(1);

        wrapper
            .find(Table)
            .props()
            .showModal();
        expect(showModal).toBeCalled();
    });

    it('should render Empty', () => {
        const wrapper = shallow(<Standings store={store} {...initialState} />).dive();

        wrapper.setProps({ competition: { standings: { loading: false, list: [] } } });
        expect(wrapper.find(Empty).length).toEqual(1);
    });
});
