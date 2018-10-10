import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../../src/components/App';

const initialState = { area: {}, competition: {}, modal: {} };

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<App />', () => {
    it('should mount the smart component App', () => {
        const wrapper = shallow(<Provider store={store}>
            <App {...initialState} />
        </Provider>);
        expect(wrapper.find(App).length).toEqual(1);
    });
});
