import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from './connections';
import Sidebar from './Sidebar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: { loading: true },
            standings: { loading: true },
            matches: { loading: true },
        };
        this.standings = this.standings.bind(this);
    }

    standings(competitionId) {
        api.standings(competitionId).then((res) => {
            this.setState({ standings: { loading: false, ...res } });
            api.matches(competitionId).then(res2 => this.setState({ matches: { loading: false, ...res2 } }));
        });
    }

    render() {
        const { area, matches, standings } = this.state;
        return (
            <div className="App" style={{ display: 'flex' }}>
                <Sidebar {...this.props} />
                <div>
                    {area.loading ? (
                        <p>loading...</p>
                    ) : (
                        <ul>
                            {area.competitions.map(competition => (
                                <li key={competition.id}>
                                    <button onClick={() => this.standings(competition.id)}>{competition.name}</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    {standings.loading && <p>loading...</p>}
                    {!standings.loading && standings.standings ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Team</th>
                                    <th>Played Games</th>
                                    <th>Goal For</th>
                                    <th>Goal Against</th>
                                    <th>Goal Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.standings[0].table.map(standing => (
                                    <tr key={standing.position}>
                                        <td>{standing.position}</td>
                                        <td>{standing.team.name}</td>
                                        <td>{standing.playedGames}</td>
                                        <td>{standing.goalsFor}</td>
                                        <td>{standing.goalsAgainst}</td>
                                        <td>{standing.goalDifference}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Nothind to show here, try another area.</p>
                    )}
                </div>
                <div>
                    {matches.loading && <p>loading...</p>}
                    <ul>
                        {!matches.loading && matches.matches ? (
                            matches.matches.map(match => (
                                <li key={match.id}>{`${match.homeTeam.name} x ${match.awayTeam.name}`}</li>
                            ))
                        ) : (
                            <li>Nothing to show here, try another area.</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
