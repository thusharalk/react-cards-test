
import React from 'react';
import PropTypes from 'prop-types';
import EmployeeNameText from '../../atoms/EmployeeNameText';
import { titleCase } from "title-case";
import EmployeeDescriptionText from '../../atoms/EmployeeDescriptionText';
import Button from 'react-bootstrap/Button';

const EmployeeCardBody = (props) => {
    const { empNameText, empDescriptionText, style, className } = props;

    return (
        <div className={className} style={{ padding: '30px', ...style }}>
            <EmployeeNameText text={titleCase(empNameText)} />
            <EmployeeDescriptionText style={{ marginTop: '30px' }} descriptionText={empDescriptionText} />

            <div style={{ display: 'flex', marginTop: '35px', justifyContent: 'flex-end' }} >
                <Button
                    style={{ border: '2px solid #000000DE', fontWeight: 'bold', color: '#000000DE' }}
                    variant="outline-secondary" >
                    Details
                </Button>
            </div>
        </div>
    );
};

// set props and their data types
EmployeeCardBody.propTypes = {
    empNameText: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
    className: PropTypes.string,
    empDescriptionText: PropTypes.string,
};
// set props default values
// required props not need default value
EmployeeCardBody.defaultProps = {
    style: {},
    className: "",
    empDescriptionText: ""
};

export default EmployeeCardBody;
