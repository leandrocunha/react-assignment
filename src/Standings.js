import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Standings = ({ competition }) => (
    <div className="Standings">
        <table className="Standings__Table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>P</th>
                    <th>Played Games</th>
                    <th>Goal For</th>
                    <th>Goal Against</th>
                    <th>Goal Difference</th>
                </tr>
            </thead>
            <tbody>
                {competition.standings.map(standing => (
                    <tr key={standing.position}>
                        <td>
                            {standing.position}) {standing.team.name}
                        </td>
                        <td>{standing.points}</td>
                        <td>{standing.playedGames}</td>
                        <td>{standing.goalsFor}</td>
                        <td>{standing.goalsAgainst}</td>
                        <td>{standing.goalDifference}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

Standings.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Standings);
