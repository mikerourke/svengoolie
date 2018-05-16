import React from 'react';
import PropTypes from 'prop-types';
import { getAttributeValue } from '../lib/index';

export default class Polygon extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    const points = getAttributeValue(children);
    return <polygon points={points} {...rest} />;
  }
}
