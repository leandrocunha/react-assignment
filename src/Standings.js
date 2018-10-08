import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';
import Empty from './Empty';
import Table from './Table';

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
                    {competition.standings.list.length ? <Table data={competition.standings.list} /> : <Empty />}
                </div>
            )}
    </Fragment>
);

Standings.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Standings);
