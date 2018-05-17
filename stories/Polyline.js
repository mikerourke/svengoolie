/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TableComponent, Wrapper } from './common';
import { Polyline, Point } from '../src';

storiesOf('Polyline', module)
  .add(
    'Default fill',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Polyline>
          <Point x={0} y={100} />
          <Point x={50} y={25} />
          <Point x={50} y={75} />
          <Point x={100} y={0} />
        </Polyline>
      </Wrapper>
    )),
  )
  .add(
    'Stroke and no fill',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Polyline stroke="black" fill="none">
          <Point x={100} y={100} />
          <Point x={150} y={25} />
          <Point x={150} y={75} />
          <Point x={200} y={0} />
        </Polyline>
      </Wrapper>
    )),
  );
