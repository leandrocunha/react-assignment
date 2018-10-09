import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loader = ({ theme }) => <div className={classnames('Loader', theme && `Loader--${theme}`)} />;

Loader.defaultProps = {
    theme: null,
};

Loader.propTypes = {
    theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Loader;
