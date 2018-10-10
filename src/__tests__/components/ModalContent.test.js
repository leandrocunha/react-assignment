import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ModalContent from './../../components/ModalContent';
import { filter } from './../../utils';

const initialState = {
    modal: {
        content: {
            name: 'PSV',
            crestUrl: 'http://upload.wikimedia.org/wikipedia/de/0/05/PSV_Eindhoven.svg',
            squad: [
                { id: 1, name: 'John', position: 'Goalkeeper' },
                { id: 2, name: 'Doe', position: 'Goalkeeper' },
                { id: 3, name: 'John', position: 'Defender' },
                { id: 4, name: 'Doe', position: 'Defender' },
                { id: 5, name: 'John', position: 'Midfielder' },
                { id: 6, name: 'Doe', position: 'Midfielder' },
                { id: 7, name: 'John', position: 'Attacker' },
                { id: 7, name: 'Doe', position: 'Attacker' },
            ],
            addres: 'Fredriklaan 10a Eindhoven 5616 NH',
            phone: '+31 (040) 2505501',
            venue: 'Philips Stadion',
            website: 'http://www.psv.nl',
            email: 'info@psv.nl',
        },
    },
};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('<ModalContent />', () => {
    it('should be exists', () => {
        const wrapper = shallow(<ModalContent store={store} />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('should tab player is active', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();
        const tab = 'players';

        wrapper.setState({ tab });
        expect(wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .first()
            .hasClass('ModalContent__Body__Tabs__Item--active')).toEqual(true);
        expect(wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .last()
            .hasClass('ModalContent__Body__Tabs__Item--active')).toEqual(false);
    });

    it('should tab informations is active', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();

        wrapper.setState({ tab: 'informations' });
        expect(wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .last()
            .hasClass('ModalContent__Body__Tabs__Item--active')).toEqual(true);
        expect(wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .first()
            .hasClass('ModalContent__Body__Tabs__Item--active')).toEqual(false);
    });

    it('should panel players is active', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();

        wrapper.setState({ tab: 'players' });
        expect(wrapper
            .find('.ModalContent__Body__PanelWrapper__Panel')
            .first()
            .hasClass('ModalContent__Body__PanelWrapper__Panel--active')).toEqual(true);
        expect(wrapper
            .find('.ModalContent__Body__PanelWrapper__Panel')
            .last()
            .hasClass('ModalContent__Body__PanelWrapper__Panel--active')).toEqual(false);
    });

    it('should panel informations is active', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();

        wrapper.setState({ tab: 'informations' });
        expect(wrapper
            .find('.ModalContent__Body__PanelWrapper__Panel')
            .last()
            .hasClass('ModalContent__Body__PanelWrapper__Panel--active')).toEqual(true);
        expect(wrapper
            .find('.ModalContent__Body__PanelWrapper__Panel')
            .first()
            .hasClass('ModalContent__Body__PanelWrapper__Panel--active')).toEqual(false);
    });

    it('should list player', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();
        const expectArr = [
            { id: 1, name: 'John', position: 'Goalkeeper' },
            { id: 2, name: 'Doe', position: 'Goalkeeper' },
        ];

        wrapper.setState({ tab: 'players' });
        expect(filter(initialState.modal.content.squad, 'Goalkeeper')).toEqual(expectArr);
    });

    it('should activate tab players', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();
        const activate = jest.spyOn(wrapper.instance(), 'activate');
        const tab = 'players';

        wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .find('.Button')
            .first()
            .simulate('click');
        expect(activate).toBeCalledWith(tab);
    });

    it('should activate tab informations', () => {
        const wrapper = shallow(<ModalContent store={store} />).dive();
        const activate = jest.spyOn(wrapper.instance(), 'activate');
        const tab = 'informations';

        wrapper
            .find('.ModalContent__Body__Tabs__Item')
            .find('.Button')
            .last()
            .simulate('click');
        expect(activate).toBeCalledWith(tab);
    });
});
