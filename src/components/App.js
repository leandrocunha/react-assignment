import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import Header from './Header';
import MainNav from './MainNav';
import Matches from './Matches';
import Standings from './Standings';
import Modal from './Modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { competition, modal } = this.props;
        return (
            <div className="App">
                <Header />
                <MainNav {...this.props} />
                <Competitions />
                <div className="MainContent">
                    <Standings />
                    {competition.matches && <Matches />}
                </div>
                {modal.open && <Modal />}
            </div>
        );
    }
}

const mapStateToProps = state => state;

App.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
    modal: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(App);
