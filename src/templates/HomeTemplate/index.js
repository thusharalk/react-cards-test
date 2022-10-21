import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import EmployeeViewCard from '../../organisams/EmployeeViewCard';

const HomeTemplate = (props) => {
    const { data = [] } = props;

    return (
        <Row className='gy-3 my-3'>
            {data.map((emp,index) => {
                return (
                    <Col key={`${emp.name}${index}`} lg={3} md={4} sm={6} >
                        <EmployeeViewCard
                            headerText={emp.title}
                            empNameText={emp.name}
                            empDescriptionText={emp.description}
                            tag={emp.tag}
                        />
                    </Col>
                )
            })}
        </Row>
    );
};

export default HomeTemplate;
