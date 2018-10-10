import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as api from './../connections';
import * as actionModal from './../actions/modal';
import Loader from './Loader';
import ModalContent from './ModalContent';

class Modal extends Component {
    constructor(props) {
        super(props);

        /** Set state with default values.
         * @param {bool} loading
         * @example
         * { loading: false }
         */
        this.state = { loading: true };

        /** Bind close() function to close Modal */
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        const { dispatch, modal } = this.props;

        /**
         * @function api.team Fetch selected team from API,
         * dispatch a action to save results on app state
         * and set local state to hide loader.
         */
        api.team(modal.teamId).then((res) => {
            dispatch(actionModal.success(res));
            this.setState({ loading: false });
        });
    }

    /**
     * @function close This function ave a responsability to dispacth action
     * and set in Redux the Modal's close state.
     */
    close() {
        const { dispatch } = this.props;
        dispatch(actionModal.close());
    }

    render() {
        const { loading } = this.state;
        return (
            <section className="Modal">
                <div className="Modal__Content">
                    {loading ? <Loader /> : <ModalContent />}
                    <button className="Modal__Content__Close" onClick={this.close} type="button">
                        x
                    </button>
                </div>
            </section>
        );
    }
}

Modal.propTypes = {
    dispatch: PropTypes.func.isRequired,
    modal: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Modal);
