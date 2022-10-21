import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import EmployeeCardBody from './index';
import { empDescriptionText } from '../../atoms/EmployeeDescriptionText/EmployeeDescriptionText.stories';


export default {
  title: 'Molecules/ Employee Card Body',
  component: EmployeeCardBody,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            Card body component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => (
  <EmployeeCardBody
    empNameText="empame text"
    empDescriptionText={empDescriptionText}

  />);