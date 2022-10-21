import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import EmployeeDescriptionText from './index';

export const empDescriptionText = `
Lorem Ipsum is simply 
dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typ
e and scrambled it to make a type specimen book.`

export default {
  title: 'Atoms/ Employee Description Text',
  component: EmployeeDescriptionText,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The employee/ intern description text component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => (
  <EmployeeDescriptionText descriptionText={empDescriptionText} />
);