import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import CardHeaderContent from './index';

export default {
  title: 'Molecules/ Card Header Content',
  component: CardHeaderContent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The card top header content.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <CardHeaderContent headerText="Employee 1" />;