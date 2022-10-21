import React from 'react';
import PropTypes from 'prop-types';

const HeaderText = (props) => {
    const { children, style, className } = props;

    return (
        <div
            className={className}
            style={{
                fontSize: '24pt',
                textAlign: 'center',
                fontWeight: 700,
                margin: '34px 0px',
                ...style
            }}>
            {children}
        </div>
    );
};

// set props and their data types
HeaderText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string,
};
// set props default values
// required props not need default value
HeaderText.defaultProps = {
    style: {},
    className: "",
};

export default HeaderText;
