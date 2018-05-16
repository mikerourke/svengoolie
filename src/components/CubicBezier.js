import React from 'react';
import PropTypes from 'prop-types';
import { getBezierMovement, mustContainValidPosition } from '../lib';

/**
 * Represents the `curveto` instruction for a Cubic Bezier curve. The
 * syntax for a Cubic Bezier curve is C c1x,c1y c2x,c2y x,y or c dc1x,dc1y
 * dc2x,dc2y dx,dy, where c1x,c1y, and c2x,c2y are the absolute coordinates
 * of the control points for the initial point and end point, respectively.
 * dc1x,dc1y, dc2x,dc2y are all relative to the initial point, not the end
 * point. dx and dy are the distance to the right and down, respectively.
 */
const CubicBezier = () => <React.Fragment />;

CubicBezier.getMovement = props => {
  const cubicNodes = [{ length: 2, command: 's' }, { length: 3, command: 'c' }];
  return getBezierMovement(props, cubicNodes);
};

CubicBezier.propTypes = {
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

CubicBezier.defaultProps = {
  absolute: false,
  relative: false,
};

export default CubicBezier;
