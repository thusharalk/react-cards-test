import React from 'react';
import PropTypes from 'prop-types';

const EmployeeNameText = (props) => {
    const { text, style, className } = props;

    return (
        <div className={className} style={{fontWeight: 'bold', ...style}}>Name: {text}</div>
    );
};

// set props and their data types
EmployeeNameText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string,
};
// set props default values
// required props not need default value
EmployeeNameText.defaultProps = {
    style: {},
    className: "",
};

export default EmployeeNameText;
