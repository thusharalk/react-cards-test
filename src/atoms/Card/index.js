import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { style, className, children } = props;

    return (
        <div
            className={className}
            style={{ 
                borderRadius: '4px', 
                boxShadow: '#88888836 0px 4px 7px 0px', 
                backgroundColor: 'white',
                overflow:'hidden',
                ...style }}>
            {children}
        </div>
    );
};

// set props and their data types
Card.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string,
};
// set props default values
// required props not need default value
Card.defaultProps = {
    style: {},
    className: "",
};

export default Card;
