import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import CardHeaderText from './index';

export default {
  title: 'Atoms/ Card Header Text',
  component: CardHeaderText,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The card top header text.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <CardHeaderText text="Header 1" />;