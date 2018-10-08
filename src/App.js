import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import Header from './Header';
import MainNav from './MainNav';
import Matches from './Matches';
import Standings from './Standings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { competition } = this.props;

        return (
            <div className="App">
                <Header />
                <MainNav {...this.props} />
                <Competitions />
                <div className="MainContent">
                    {competition.standings.length > 0 && <Standings />}
                    {competition.matches.length > 0 && <Matches />}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    competition: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
