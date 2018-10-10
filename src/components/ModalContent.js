import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from './../utils';

class ModalContent extends Component {
    constructor(props) {
        super(props);
        this.state = { tab: 'players' };
        this.activate = this.activate.bind(this);
    }

    activate(tab) {
        this.setState({ tab });
    }

    render() {
        const { modal } = this.props;
        const { tab } = this.state;

        return (
            <div className="ModalContent">
                <header className="ModalContent__Header">
                    <img
                        alt={modal.content.name}
                        className="ModalContent__Header__Brand"
                        src={modal.content.crestUrl}
                    />
                    <h2 className="ModalContent__Header__Name">{modal.content.name}</h2>
                </header>
                <div className="ModalContent__Body">
                    <ul className="ModalContent__Body__Tabs">
                        <li
                            className={classnames(
                                'ModalContent__Body__Tabs__Item',
                                tab === 'players' && 'ModalContent__Body__Tabs__Item--active',
                            )}
                        >
                            <button className="Button Button--link" onClick={() => this.activate('players')}>
                                Players
                            </button>
                        </li>
                        <li
                            className={classnames(
                                'ModalContent__Body__Tabs__Item',
                                tab === 'informations' && 'ModalContent__Body__Tabs__Item--active',
                            )}
                        >
                            <button className="Button Button--link" onClick={() => this.activate('informations')}>
                                Informations
                            </button>
                        </li>
                    </ul>
                    <div className="ModalContent__Body__PanelWrapper">
                        <div
                            className={classnames(
                                'ModalContent__Body__PanelWrapper__Panel',
                                tab === 'players' && 'ModalContent__Body__PanelWrapper__Panel--active',
                            )}
                        >
                            <dl className="ModalContent__Body__PlayersList">
                                <dt className="ModalContent__Body__PlayersList__Title">Goalkeepers</dt>
                                {filter(modal.content.squad, 'Goalkeeper').map(player => (
                                    <dd className="ModalContent__Body__PlayersList__Item" key={player.id}>
                                        {player.name}
                                    </dd>
                                ))}
                            </dl>
                            <dl className="ModalContent__Body__PlayersList">
                                <dt className="ModalContent__Body__PlayersList__Title">Defenders</dt>
                                {filter(modal.content.squad, 'Defender').map(player => (
                                    <dd className="ModalContent__Body__PlayersList__Item" key={player.id}>
                                        {player.name}
                                    </dd>
                                ))}
                            </dl>
                            <dl className="ModalContent__Body__PlayersList">
                                <dt className="ModalContent__Body__PlayersList__Title">Midfielders</dt>
                                {filter(modal.content.squad, 'Midfielder').map(player => (
                                    <dd className="ModalContent__Body__PlayersList__Item" key={player.id}>
                                        {player.name}
                                    </dd>
                                ))}
                            </dl>
                            <dl className="ModalContent__Body__PlayersList">
                                <dt className="ModalContent__Body__PlayersList__Title">Attackers</dt>
                                {filter(modal.content.squad, 'Attacker').map(player => (
                                    <dd className="ModalContent__Body__PlayersList__Item" key={player.id}>
                                        {player.name}
                                    </dd>
                                ))}
                            </dl>
                        </div>
                        <div
                            className={classnames(
                                'ModalContent__Body__PanelWrapper__Panel',
                                tab === 'informations' && 'ModalContent__Body__PanelWrapper__Panel--active',
                            )}
                        >
                            <p>
                                <strong>{modal.content.name}</strong>
                            </p>
                            <p>{modal.content.address}</p>
                            <p>{modal.content.phone}</p>
                            <p>{modal.content.venue}</p>
                            <p>
                                <a href={modal.content.website} target="_blank">
                                    {modal.content.website}
                                </a>
                            </p>
                            <p>{modal.content.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ModalContent.propTypes = {
    modal: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ModalContent);
