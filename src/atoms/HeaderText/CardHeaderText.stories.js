import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import HeaderText from './index';

export default {
  title: 'Atoms/ Header Text',
  component: HeaderText,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            Top web site header.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <HeaderText text="Header 1" />;