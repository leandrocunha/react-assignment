import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Loader from './Loader';

const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Matches = props => (
    <Fragment>
        {props.competition.matches.loading ? (
            <div className="Matches">
                <Loader />
            </div>
        ) : (
            <div className="Matches">
                <p className="Matches__Title">Matches</p>
                <Slider {...settings}>
                    {props.competition.matches.list.map((round, index) => (
                        <div className="Matches__Round" key={round[0].id}>
                            <p className="Matches__Round__Title">{`Round ${index + 1}`}</p>
                            <ul className="Matches__Round__List">
                                {round.map(match => (
                                    <li className="Matches__Round__List__Item" key={match.id}>
                                        <p className="Matches__Round__List__Item__Date">
                                            {moment(match.utcDate).format('MM-DD-YYYY')}
                                        </p>
                                        <div className="Matches__Round__List__Item__Match">
                                            <p className="Matches__Round__List__Item__Match__Home">
                                                <span className="Matches__Round__List__Item__Match__Home__Score">
                                                    {match.score.fullTime.homeTeam}
                                                </span>
                                                {match.homeTeam.name}
                                            </p>
                                            <p className="Matches__Round__List__Item__Match__Versus">x</p>
                                            <p className="Matches__Round__List__Item__Match__Away">
                                                <span className="Matches__Round__List__Item__Match__Away__Score">
                                                    {match.score.fullTime.awayTeam}
                                                </span>
                                                {match.awayTeam.name}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Slider>
            </div>
        )}
    </Fragment>
);

const mapStateToProps = state => state;

Matches.propTypes = {
    competition: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Matches);
