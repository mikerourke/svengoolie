import React from 'react';
import PropTypes from 'prop-types';
import { mustContainValidPosition, getBezierMovement } from '../lib';

const QuadBezier = () => <React.Fragment />;

QuadBezier.getMovement = props => {
  const quadNodes = [{ length: 1, command: 't' }, { length: 2, command: 'q' }];
  return getBezierMovement(props, quadNodes);
};

QuadBezier.propTypes = {
  /**
   * Indicates if the element values refer to absolute positioning.
   */
  absolute: mustContainValidPosition,
  /**
   * Indicates if the element values refer to relative positioning.
   */
  relative: mustContainValidPosition,
  /**
   * Points within the curve (at x and y coordinates).
   */
  children: PropTypes.node.isRequired,
};

QuadBezier.defaultProps = {
  absolute: false,
  relative: false,
};

export default QuadBezier;
