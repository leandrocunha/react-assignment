import React, { Fragment } from 'react';
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
        {props.competition.matches &&
            props.competition.matches.loading && (
                <div className="Matches">
                    <Loader />
                </div>
            )}

        {props.competition.matches &&
            !props.competition.matches.loading && (
                <div className="Matches">
                    <Slider {...settings}>
                        {props.competition.matches.list.map((round, index) => (
                            <div className="Matches__Round" key={round[0].id}>
                                <p className="Matches__Round__Title">{`Round ${index + 1}`}</p>
                                <ul>
                                    {round.map(match => (
                                        <li key={match.id}>
                                            {match.homeTeam.name} x {match.awayTeam.name}
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
