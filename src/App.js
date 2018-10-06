import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import Sidebar from './Sidebar';
import Standings from './Standings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: { loading: true },
        };
    }

    render() {
        const { matches } = this.state;

        return (
            <div className="App" style={{ display: 'flex' }}>
                <Sidebar {...this.props} />
                <Competitions />
                <Standings />
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
