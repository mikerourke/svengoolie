/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TableComponent, Wrapper } from './common';
import { Arc, CubicBezier, Line, Move, Path, Point } from '../src';

storiesOf('Path', module)
  .add(
    'Horizontal Line',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Path stroke="black" strokeWidth={4}>
          <Move absolute x={0} y={0} />
          <Line relative x={100} />
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Vertical Line',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Path stroke="black" strokeWidth={4}>
          <Move absolute x={0} y={0} />
          <Line relative y={100} />
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Diagonal Line',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Path stroke="black" strokeWidth={4}>
          <Move absolute x={0} y={0} />
          <Line relative x={100} y={100} />
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Rectangle',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Path stroke="black" fill="none" strokeWidth={4}>
          <Move absolute x={0} y={0} />
          <Line relative y={100} />
          <Line relative x={400} />
          <Line relative y={-100} />
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Complex Rectangle',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper height={250}>
        <Path fill="mintcream" stroke="#808080" strokeWidth={4}>
          <Move absolute x={480} y={200} />
          <Line absolute x={10.8} y={200} />
          <CubicBezier absolute>
            <Point x={4.8} y={200} />
            <Point x={0} y={195.3} />
            <Point x={0} y={189.6} />
          </CubicBezier>
          <Line absolute x={0} y={0} />
          <Line absolute x={490} y={0} />
          <Line absolute x={490} y={189.6} />
          <CubicBezier absolute>
            <Point x={490} y={195.3} />
            <Point x={485.1} y={200} />
            <Point x={479.1} y={200} />
          </CubicBezier>
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Arc',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper height={330}>
        <Path fill="green" stroke="black" strokeWidth={2} fillOpacity={0.5}>
          <Move absolute x={10} y={315} />
          <Line absolute x={110} y={215} />
          <Arc
            absolute
            rx={30}
            ry={50}
            rotation={0}
            large={false}
            sweep="positive"
            x={162.55}
            y={162.45}
          />
          <Line absolute x={172.55} y={152.45} />
          <Arc
            absolute
            rx={30}
            ry={50}
            rotation={-45}
            large={false}
            sweep="positive"
            x={215.1}
            y={109.9}
          />
        </Path>
      </Wrapper>
    )),
  )

  .add(
    'Animation',
    withInfo({
      propTablesExclude: [Wrapper],
      TableComponent,
    })(() => (
      <Wrapper>
        <Path stroke="lightgrey" strokeWidth={2} fill="none" id="motionPath">
          <Move absolute x={10} y={110} />
          <Arc
            absolute
            rx={120}
            ry={120}
            rotation={-45}
            large={false}
            sweep="positive"
            x={110}
            y={10}
          />
          <Arc
            absolute
            rx={120}
            ry={120}
            rotation={-45}
            large={false}
            sweep="positive"
            x={10}
            y={110}
          />
        </Path>
        <circle cx="10" cy="110" r="3" fill="lightgrey" />
        <circle cx="110" cy="10" r="3" fill="lightgrey" />
        <circle r="5" fill="red">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#motionPath" />
          </animateMotion>
        </circle>
      </Wrapper>
    )),
  );
