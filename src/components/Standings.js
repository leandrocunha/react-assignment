import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import Empty from './Empty';
import Table from './Table';
import * as actionModal from './../actions/modal';

class Standings extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    showModal(teamId) {
        const { dispatch } = this.props;
        dispatch(actionModal.show(teamId));
    }

    render() {
        const { competition } = this.props;

        return (
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
                            {competition.standings.list.length ? (
                                <Table data={competition.standings.list} showModal={this.showModal} />
                            ) : (
                                <Empty />
                            )}
                        </div>
                    )}
            </Fragment>
        );
    }
}

Standings.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Standings);
