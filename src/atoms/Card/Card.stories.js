import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import Card from './index';

export default {
  title: 'Atoms/ Card',
  component: Card,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            Reusable card component
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => (<Card > <div>Card content</div> </Card>);