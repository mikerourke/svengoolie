import React from 'react';
import PropTypes from 'prop-types';
import { extrapolateDirections } from '../lib';

export default class Polyline extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    const points = extrapolateDirections(children);
    return <polyline points={points} {...rest} />;
  }
}
