import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Loader from './../../components/Loader';
import Matches from './../../components/Matches';

const initialState = { competition: { matches: { loading: true } } };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Matches />', () => {
    it('should be exists', () => {
        const wrapper = shallow(<Matches store={store} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should be render loader', () => {
        const wrapper = shallow(<Matches store={store} />).dive();

        expect(wrapper.find('.Matches').length).toEqual(1);
        expect(wrapper.find(Loader).length).toEqual(1);
    });

    it('should be render loader', () => {
        const wrapper = shallow(<Matches store={store} />).dive();
        const props = {
            competition: {
                matches: {
                    list: [
                        [
                            {
                                id: 1,
                                homeTeam: { name: 'PSV' },
                                awayTeam: { name: 'Ajax' },
                                score: { fullTime: { homeTeam: 0, awayTeam: 1 } },
                            },
                        ],
                        [
                            {
                                id: 2,
                                homeTeam: { name: 'Ajax' },
                                awayTeam: { name: 'PSV' },
                                score: { fullTime: { homeTeam: 1, awayTeam: 0 } },
                            },
                        ],
                    ],
                    loading: false,
                },
            },
        };

        wrapper.setProps(props);
        expect(wrapper.find('.Matches').length).toEqual(1);
        expect(wrapper.find(Loader).length).toEqual(0);
    });
});
