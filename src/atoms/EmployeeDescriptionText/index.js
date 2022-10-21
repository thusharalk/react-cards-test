import React from 'react';
import PropTypes from 'prop-types';

const EmployeeDescriptionText = (props) => {
    const { descriptionText, style, className } = props;

    return (
        <div className={className} style={style}> {descriptionText}</div>
    );
};

// set props and their data types
EmployeeDescriptionText.propTypes = {
    descriptionText: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.any),
    className: PropTypes.string,
};
// set props default values
// required props not need default value
EmployeeDescriptionText.defaultProps = {
    style: {},
    className: "",
};

export default EmployeeDescriptionText;
