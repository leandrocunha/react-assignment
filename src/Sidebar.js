import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from './actions/areas';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.onType = this.onType.bind(this);
    }

    onType(e) {
        const { dispatch } = this.props;
        dispatch(search(e.target.value));
    }

    render() {
        const { areas, searcheable } = this.props;
        const results = searcheable.length ? searcheable : areas;
        return (
            <div className="Sidebar">
                <input className="Sidebar__Search" onKeyUp={this.onType} placeholder="Searh an area..." type="text" />
                <ul className="Sidebar__AreasList">
                    {results.map(a => (
                        <li className="Sidebar__AreasList__Area" key={a.countryCode}>
                            <button className="Button" onClick={() => this.competitions(a.id)}>
                                {a.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Sidebar.defaultProps = {
    areas: [],
    searcheable: [],
};
Sidebar.propTypes = {
    areas: PropTypes.instanceOf(Array),
    dispatch: PropTypes.func.isRequired,
    searcheable: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
