import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MainNav from './../../components/MainNav';

const initialState = {
    area: {
        list: [{ id: 2163, countryCode: 'NL', name: 'Netherlands' }, { id: 1, countryCode: 'BRA', name: 'Brazil' }],
        searcheable: [
            { id: 2163, countryCode: 'NL', name: 'Netherlands' },
            { id: 1, countryCode: 'BRA', name: 'Brazil' },
        ],
    },
};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<MainNav />', () => {
    it('should be exists', () => {
        const wrapper = shallow(<MainNav store={store} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should input focus', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();
        const onFocus = jest.spyOn(wrapper.instance(), 'onFocus');

        wrapper.instance().forceUpdate();
        wrapper.find('.MainNav__Container__Form__Input').simulate('focus');
        expect(onFocus).toBeCalled();
    });

    it('should input type', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();
        const onType = jest.spyOn(wrapper.instance(), 'onType');
        const fakeEvent = { target: { value: 'Netherlands' } };

        wrapper.instance().forceUpdate();
        wrapper.find('.MainNav__Container__Form__Input').simulate('keyup', fakeEvent);
        expect(onType).toBeCalledWith(fakeEvent);
    });

    it('should input blur', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();
        const blur = jest.spyOn(wrapper.instance(), 'blur');

        wrapper.instance().forceUpdate();
        wrapper.find('.MainNav__Container__Form__Input').simulate('blur');
        expect(blur).toBeCalled();
    });

    it('should show results dropdown', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();

        wrapper.setState({ search: true });
        wrapper.instance().forceUpdate();

        expect(wrapper.find('.MainNav__Container__Form__Results').length).toEqual(1);
    });

    it('should do a search', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();
        const getCompetitions = jest.spyOn(wrapper.instance(), 'getCompetitions');
        const fakeEvent = { stopPropagation: () => undefined };

        wrapper.instance().input = { current: { value: null } };
        wrapper.setState({ search: true });
        wrapper.instance().forceUpdate();
        wrapper.find('.MainNav__Container__Form__Results__List__Item').forEach((item) => {
            item.find('.Button').simulate('click', fakeEvent);
            expect(getCompetitions).toBeCalledWith(2163, 'Netherlands', fakeEvent);
        });
    });

    it('should do a quick search', () => {
        const wrapper = shallow(<MainNav store={store} />).dive();
        const getCompetitions = jest.spyOn(wrapper.instance(), 'getCompetitions');
        const fakeEvent = { stopPropagation: () => undefined };

        wrapper.instance().input.current = wrapper.find('.MainNav__Container__Form__Input');
        wrapper.find('.MainNav__Container__QuickLinks__List__Item').forEach((item) => {
            item.find('.Button').simulate('click', fakeEvent);
            expect(getCompetitions).toBeCalledWith(2163, 'Netherlands', fakeEvent);
        });
    });
});
