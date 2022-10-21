import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import EmployeeViewCard from './index';
import { empDescriptionText } from '../../atoms/EmployeeDescriptionText/EmployeeDescriptionText.stories';

export default {
  title: 'organism/ Employee View Card',
  component: EmployeeViewCard,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The card organism component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => (
<EmployeeViewCard 
    headerText="Employee 1"
    empNameText="ireshan pathirana"
    empDescriptionText={empDescriptionText}
/>
);