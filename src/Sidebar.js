import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionAreas from './actions/areas';
import * as actionCompetitions from './actions/competitions';
import * as api from './connections';

class Sidebar extends Component {
    constructor(props) {
        super(props);
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
        const result = area.searcheable.length ? area.searcheable : area.list;
        return (
            <div className="Sidebar">
                <input className="Sidebar__Search" onKeyUp={this.onType} placeholder="Searh an area..." type="text" />
                <ul className="Sidebar__List">
                    {result.map(a => (
                        <li className="Sidebar__List__Item" key={a.countryCode}>
                            <button className="Button" onClick={() => this.getCompetitions(a.id)}>
                                {a.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Sidebar.propTypes = {
    area: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
