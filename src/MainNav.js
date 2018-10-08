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
        this.input = React.createRef();
        this.blur = this.blur.bind(this);
        this.getCompetitions = this.getCompetitions.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onType = this.onType.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        api.areas().then(res => dispatch(actionAreas.get(res)));
    }

    onFocus() {
        this.setState({ search: true, selectedArea: 'Type an area...' });
    }

    onType(e) {
        const { dispatch } = this.props;
        dispatch(actionAreas.search(e.target.value));
    }

    getCompetitions(areaId, areaName, e) {
        e.stopPropagation();

        const { dispatch } = this.props;

        this.input.current.value = null;
        this.setState({ selectedArea: areaName });
        api.competitions(areaId).then(res => dispatch(actionCompetitions.get(res)));
    }

    blur() {
        setTimeout(() => this.setState({ search: false }), 150);
    }

    render() {
        const { area } = this.props;
        const { search, selectedArea } = this.state;
        const result = area.searcheable.length ? area.searcheable : area.list;

        return (
            <div className="MainNav">
                <div className="MainNav__Container">
                    <div className="MainNav__Container__Form">
                        <input
                            className="MainNav__Container__Form__Input"
                            onBlur={this.blur}
                            onFocus={this.onFocus}
                            onKeyUp={this.onType}
                            placeholder={selectedArea || 'Type an area...'}
                            ref={this.input}
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
                                                onClick={e => this.getCompetitions(a.id, a.name, e)}
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
