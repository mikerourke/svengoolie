/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TableComponent, Wrapper } from './common';
import { Polygon, Point } from '../src';

storiesOf('Polygon', module)
  .add(
    'Simple line shape',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Polygon stroke="black" fill="none">
          <Point x={100} y={100} />
          <Point x={150} y={25} />
          <Point x={150} y={75} />
          <Point x={200} y={0} />
        </Polygon>
      </Wrapper>
    )),
  )
  .add(
    'Hexagon',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper height={400}>
        <Polygon stroke="black" strokeWidth={3} fill="rgb(250,121,0)">
          <Point x={150} y={75} />
          <Point x={258} y={137.5} />
          <Point x={258} y={262.5} />
          <Point x={150} y={325} />
          <Point x={42} y={262.6} />
          <Point x={42} y={137.5} />
        </Polygon>
      </Wrapper>
    )),
  );
