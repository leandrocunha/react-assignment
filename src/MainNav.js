import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionAreas from './actions/areas';
import * as actionCompetitions from './actions/competitions';
import * as api from './connections';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { search: false };
        this.getCompetitions = this.getCompetitions.bind(this);
        this.onType = this.onType.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        api.areas().then(res => dispatch(actionAreas.get(res)));
    }

    onType(e) {
        const { dispatch } = this.props;
        dispatch(actionAreas.search(e.target.value));
    }

    getCompetitions(areaId) {
        const { dispatch } = this.props;
        api.competitions(areaId).then(res => dispatch(actionCompetitions.get(res)));
    }

    render() {
        const { area } = this.props;
        const { search } = this.state;
        const result = area.searcheable.length ? area.searcheable : area.list;

        return (
            <div className="MainNav">
                <div className="MainNav__Container">
                    <div className="MainNav__Container__Form">
                        <input
                            className="MainNav__Container__Form__Input"
                            onBlur={() => setTimeout(() => this.setState({ search: false }), 300)}
                            onFocus={() => this.setState({ search: true })}
                            onKeyUp={this.onType}
                            placeholder="Searh an area..."
                            type="text"
                        />
                        {search && (
                            <div className="MainNav__Container__Form__Results">
                                <ul className="MainNav__Container__Form__Results__List">
                                    {result.map(a => (
                                        <li
                                            className="MainNav__Container__Form__Results__List__Item"
                                            key={a.countryCode}
                                        >
                                            <button
                                                className="Button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    this.getCompetitions(a.id);
                                                }}
                                            >
                                                {a.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="MainNav__Container__QuickLinks">
                        <p className="MainNav__Container__QuickLinks__Title">Quick search:</p>
                        <ul className="MainNav__Container__QuickLinks__List">
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2000</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2001</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2002</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2003</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2013</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2014</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2015</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2016</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2017</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2017</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2017</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2018</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2019</button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button className="Button Button--link">2021</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

MainNav.propTypes = {
    area: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainNav);
