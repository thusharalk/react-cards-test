import React from 'react';
import PropTypes from 'prop-types';
import { titleCase } from "title-case";

const CardHeaderText = (props) => {
    const { text, style, className } = props;

    return (
        <div className={className} style={{fontWeight: 300,color: 'white', ...style}}>{titleCase(text)}</div>
    );
};

// set props and their data types
CardHeaderText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string,
};
// set props default values
// required props not need default value
CardHeaderText.defaultProps = {
    style: {},
    className: "",
};

export default CardHeaderText;
