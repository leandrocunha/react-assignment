import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';

const Standings = ({ competition }) => (
    <Fragment>
        {competition.standings &&
            competition.standings.loading && (
                <div className="Standings">
                    <Loader />
                </div>
            )}

        {competition.standings &&
            !competition.standings.loading && (
                <div className="Standings">
                    <table className="Standings__Table">
                        <thead>
                            <tr>
                                <th />
                                <th />
                                <th>P</th>
                                <th>G</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>W</th>
                                <th>L</th>
                                <th>D</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competition.standings.list.map(standing => (
                                <tr key={standing.position}>
                                    <td align="right">{standing.position}</td>
                                    <td>{standing.team.name}</td>
                                    <td align="center">
                                        <strong>{standing.points}</strong>
                                    </td>
                                    <td align="center">{standing.playedGames}</td>
                                    <td align="center">{standing.goalsFor}</td>
                                    <td align="center">{standing.goalsAgainst}</td>
                                    <td align="center">{standing.goalDifference}</td>
                                    <td align="center">{standing.won}</td>
                                    <td align="center">{standing.draw}</td>
                                    <td align="center">{standing.lost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
    </Fragment>
);

Standings.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Standings);
