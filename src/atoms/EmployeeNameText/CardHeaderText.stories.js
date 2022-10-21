import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import EmployeeNameText from './index';

export default {
  title: 'Atoms/ Employee Name Text',
  component: EmployeeNameText,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            Emp /Intern name component
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <EmployeeNameText text="Header 1" />;