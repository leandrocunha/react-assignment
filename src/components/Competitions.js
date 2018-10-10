import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from './../connections';
import * as actionCompetitions from './../actions/competitions';
import Empty from './Empty';
import Loader from './Loader';

class Competitions extends Component {
    constructor(props) {
        super(props);

        /** Bind standingsAndMatches function to get stangings and matches. */
        this.standingsAndMatches = this.standingsAndMatches.bind(this);
    }

    /**
     * @function standingsAndMatches Dispatch an action to start loader and
     *  then fetch standings and matches from a competition.
     * @param {number} competitionId
     * @example standingsAndMatches(2031){
     *      //do something
     *  }
     */
    standingsAndMatches(competitionId) {
        const { dispatch } = this.props;
        dispatch(actionCompetitions.getStandingsAndMatches());
        api.standings(competitionId).then(res => dispatch(actionCompetitions.standings(res)));
        api.matches(competitionId).then(res => dispatch(actionCompetitions.matches(res)));
    }

    render() {
        const { competition } = this.props;

        return (
            <div className="Competitions">
                <div className="Competitions__Container">
                    {competition.loading && <Loader theme="gray" />}
                    {!competition.loading &&
                        competition.count > 0 && (
                            <ul className="Competitions__Container__List">
                                {competition.list.map(c => (
                                    <li className="Competitions__Container__List__Item" key={c.id}>
                                        <button
                                            className="Button Button--link"
                                            onClick={() => this.standingsAndMatches(c.id)}
                                        >
                                            {c.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    {competition.count === 0 && <Empty />}
                </div>
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
