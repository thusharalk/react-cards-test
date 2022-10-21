import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card';
import CardHeaderContent from '../../molecules/CardHeaderContent';
import EmployeeCardBody from '../../molecules/EmployeeCardBody';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const EmployeeViewCard = (props) => {
    const {
        headerText,
        empNameText,
        empDescriptionText,
        tag
    } = props;


    const renderCardHeaderIcon = (tag) => {
        switch (tag) {
            case 'intern':
                return <FontAwesomeIcon color='white' icon={faLightbulb} />

            default:
                return <FontAwesomeIcon color='white' icon={faUsers} />
        }
    };

    const getHeaderBackgroundColor = () => {
        switch (tag) {
            case 'intern':
                return '#49a997'

            default:
                return '#28abe2'
        }
    }
    return (
        <Card>
            <CardHeaderContent
                style={{ backgroundColor: getHeaderBackgroundColor() }}
                renderCardHeaderIcon={() => renderCardHeaderIcon(tag)}
                headerText={headerText}
            />
            <EmployeeCardBody empNameText={empNameText} empDescriptionText={empDescriptionText} />
        </Card>
    );
};

// set props and their data types
EmployeeViewCard.propTypes = {
    headerText: PropTypes.string,
    empDescriptionText: PropTypes.string,
    empNameText: PropTypes.string,
    tag: PropTypes.string,
};
// set props default values
// required props not need default value
EmployeeViewCard.defaultProps = {
    headerText: '',
    empDescriptionText: '',
    empNameText: '',
    tag: ''
};

export default EmployeeViewCard;
