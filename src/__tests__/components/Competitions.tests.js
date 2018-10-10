import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Competitions from './../../components/Competitions';
import Loader from './../../components/Loader';
import Empty from '../../components/Empty';
import * as api from './../../connections';

const initialState = { competition: { loading: true } };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Competitions />', () => {
    it('shouls be exists', () => {
        const wrapper = shallow(<Competitions store={store} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render loader', () => {
        const wrapper = shallow(<Competitions store={store} />).dive();
        expect(wrapper.find(Loader).length).toEqual(1);
        expect(wrapper.find('.Competitions__Container__List').length).toEqual(0);
    });

    it('should list competitions', () => {
        const wrapper = shallow(<Competitions store={store} />).dive();
        wrapper.setProps({ competition: { count: 10, list: [], loading: false } });
        expect(wrapper.find(Loader).length).toEqual(0);
        expect(wrapper.find('.Competitions__Container__List').length).toEqual(1);
    });

    it('should call standings and matches', () => {
        const wrapper = shallow(<Competitions store={store} />).dive();
        const standingsAndMatches = jest.spyOn(wrapper.instance(), 'standingsAndMatches');
        const props = { competition: { count: 10, list: [{ id: 1 }, { id: 2 }], loading: false } };

        wrapper.setProps(props);
        expect(wrapper.find(Loader).length).toEqual(0);
        expect(wrapper.find('.Competitions__Container__List').length).toEqual(1);

        wrapper.find('.Button').forEach((component, index) => {
            component.simulate('click');
            expect(standingsAndMatches).toBeCalledWith(props.competition.list[index].id);
            // api.standings(competitionId).then(res => expect(res).toBeInstanceOf(Object));
            // api.matches(competitionId).then(res => expect(res).toBeInstanceOf(Object));
        });
    });

    it('should render empty', () => {
        const wrapper = shallow(<Competitions store={store} />).dive();

        wrapper.setProps({ competition: { count: 0 } });
        expect(wrapper.find(Empty).length).toEqual(1);
    });
});
