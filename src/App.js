import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import Header from './Header';
import MainNav from './MainNav';
import Standings from './Standings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Header />
                <MainNav {...this.props} />
                <Competitions />
                <Standings />
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
