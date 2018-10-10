import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionAreas from './../actions/areas';
import * as actionCompetitions from './../actions/competitions';
import * as api from './../connections';

class MainNav extends Component {
    constructor(props) {
        super(props);

        /** Set state with default values.
         * @param {bool} search
         * @example
         * { search: false }
         */
        this.state = { search: false };

        /** Create ref at input search. */
        this.input = React.createRef();

        /** Bind blur function hide popover resutls. */
        this.blur = this.blur.bind(this);

        /** Bind getCompetitions function to fetch competitions from api. */
        this.getCompetitions = this.getCompetitions.bind(this);

        /** Bind onFocus function to show search results. */
        this.onFocus = this.onFocus.bind(this);

        /** Bind onType function to search areas. */
        this.onType = this.onType.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        /**
         * @function api.areas Call API on init to fetch available areas
         * and then dispatch a action to save at app state.
         */
        api.areas().then(res => dispatch(actionAreas.get(res)));
    }

    /**
     * @function onFocus Set local state and show dropdown with available areas.
     */
    onFocus() {
        this.setState({ search: true, selectedArea: 'Type an area...' });
    }

    /**
     * @function onType Type string and dispatch a action to search
     * the correspondence in available areas list.
     * @param {HTMLelement} e
     * @example onType(e){
     *      //do something
     *  }
     */
    onType(e) {
        const { dispatch } = this.props;
        dispatch(actionAreas.search(e.target.value));
    }

    /**
     * @function getCompetitions Fetch API to get competitions of the selected area,
     * save the name of selected area in local state, start competition loader
     * and then save results and app state.
     * @param {number} areaId The id of selected area.
     * @param {string} areaName The name fo selected area.
     * @param {HTMLelement} e The HTML element of input search.
     * @returns getCompetitions(2063, 'Netherlands', element) {
     *      //do somenthing
     *  }
     */
    getCompetitions(areaId, areaName, e) {
        e.stopPropagation();

        const { dispatch } = this.props;

        this.input.current.value = null;
        this.setState({ selectedArea: areaName });

        dispatch(actionCompetitions.get());
        api.competitions(areaId).then(res => dispatch(actionCompetitions.competitions(res)));
    }

    /**
     * @function blur Hide dropdown results when input search is blur
     * setting search variable on local state.
     */
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
                                <button
                                    className="Button Button--link"
                                    onClick={e => this.getCompetitions(2163, 'Netherlands', e)}
                                >
                                    Netherlands
                                </button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button
                                    className="Button Button--link"
                                    onClick={e => this.getCompetitions(2032, 'Brazil', e)}
                                >
                                    Brazil
                                </button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button
                                    className="Button Button--link"
                                    onClick={e => this.getCompetitions(2114, 'Italy', e)}
                                >
                                    Italy
                                </button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button
                                    className="Button Button--link"
                                    onClick={e => this.getCompetitions(2088, 'Germany', e)}
                                >
                                    Germany
                                </button>
                            </li>
                            <li className="MainNav__Container__QuickLinks__List__Item">
                                <button
                                    className="Button Button--link"
                                    onClick={e => this.getCompetitions(2224, 'Spain', e)}
                                >
                                    Spain
                                </button>
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
