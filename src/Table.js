import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionModal from './actions/modal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    showModal(teamId) {
        const { dispatch } = this.props;
        dispatch(actionModal.show(teamId));
    }

    render() {
        const { data } = this.props;

        return (
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
                    {data.map(standing => (
                        <tr key={standing.position}>
                            <td align="right">{standing.position}</td>
                            <td>
                                <button
                                    className="Button Button--link"
                                    onClick={() => this.props.showModal(standing.team.id)}
                                >
                                    {standing.team.name}
                                </button>
                            </td>
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
        );
    }
}

Table.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    dispatch: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default connect()(Table);
