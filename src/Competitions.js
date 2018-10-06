import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from './connections';
import * as actionCompetitions from './actions/competitions';

class Competitions extends Component {
    constructor(props) {
        super(props);
        this.standings = this.standings.bind(this);
    }

    standings(competitionId) {
        const { dispatch } = this.props;
        api.standings(competitionId).then(res => dispatch(actionCompetitions.standings(res)));
    }

    render() {
        const { competition } = this.props;

        return (
            <div className="Sidebar Sidebar--competitions">
                {competition.loading ? (
                    <p>loading...</p>
                ) : (
                    <ul className="Sidebar__List">
                        {competition.list.map(c => (
                            <li className="Sidebar__List__Item" key={c.id}>
                                <button className="Button" onClick={() => this.standings(c.id)}>
                                    {c.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

Competitions.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Competitions);
