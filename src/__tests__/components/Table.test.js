import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Table from './../../components/Table';

const initialState = { competition: { standings: { loading: true } } };
const tableData = [{ position: 1, team: { id: 1 } }, { position: 2, team: { id: 2 } }];

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Table />', () => {
    it('should be existis', () => {
        const showModal = jest.fn();
        const wrapper = shallow(<Table store={store} data={tableData} showModal={showModal} />);

        expect(wrapper.exists()).toEqual(true);
    });

    it('should show modal', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<Table store={store} data={tableData} showModal={mockFn} />).dive();

        wrapper.find('.Button').forEach((button) => {
            button.simulate('click');
            expect(mockFn).toBeCalled();
        });
    });
});
