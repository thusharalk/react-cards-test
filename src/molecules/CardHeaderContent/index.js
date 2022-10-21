import React from 'react';
import PropTypes from 'prop-types';
import CardHeaderText from '../../atoms/CardHeaderText';

const CardHeaderContent = (props) => {
    const { headerText, style, className, renderCardHeaderIcon } = props;

    return (
        <div className={className} style={{display: 'flex', gap: '8px', padding: '10px 30px', alignItems: 'center', ...style}}>
            {renderCardHeaderIcon()}
            <CardHeaderText text={headerText}  />
        </div>
    );
};

// set props and their data types
CardHeaderContent.propTypes = {
    headerText: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.any),
    className: PropTypes.string,
    renderCardHeaderIcon: PropTypes.func,
};
// set props default values
// required props not need default value
CardHeaderContent.defaultProps = {
    style: {},
    className: "",
    renderCardHeaderIcon: () => {}
};

export default CardHeaderContent;
