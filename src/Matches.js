import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Matches = props => (
    <div className="Matches">
        {props.competition.matches.map(match => (
            <li>
                {match.homeTeam.name} x {match.awayTeam.name}
            </li>
        ))}
    </div>
);

const mapStateToProps = state => state;

Matches.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Matches);
