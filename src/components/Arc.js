import React from 'react';
import PropTypes from 'prop-types';
import { getCommand, mustContainValidPosition } from '../lib';

/**
 * Represents `arcto` movement. Sometimes it is easier to describe a path as an
 * elliptical curve, rather than a Bezier curve. To this end, arcto commands
 * are supported in paths.
 */
const Arc = () => <React.Fragment />;

Arc.getMovement = ({ rx, ry, rotation, large, sweep, x, y, ...rest }) => {
  const command = getCommand('a', rest);
  return [
    command,
    rx,
    ry,
    rotation,
    large ? 1 : 0,
    sweep === 'positive' ? 1 : 0,
    x,
    y,
  ].join(' ');
};

Arc.propTypes = {
  /**
   * Indicates if the element values refer to absolute positioning.
   */
  absolute: mustContainValidPosition,
  /**
   * Indicates if the element values refer to relative positioning.
   */
  relative: mustContainValidPosition,
  /**
   * Radius in the x direction.
   */
  rx: PropTypes.number.isRequired,
  /**
   * Radius in the y direction.
   */
  ry: PropTypes.number.isRequired,
  /**
   * Degrees to change the x-axis relative to the current reference frame.
   */
  rotation: PropTypes.number,
  /**
   * Indicate whether the smallest (false) or largest (true) arc possible is
   * drawn.
   */
  large: PropTypes.bool,
  /**
   * Indicate if the arc should be swept in a clockwise (positive), or
   * anti-clockwise (negative) direction.
   */
  sweep: PropTypes.oneOf(['positive', 'negative']),
  /**
   * Destination coordinate on the x-axis.
   */
  x: PropTypes.number.isRequired,
  /**
   * Destination coordinate on the y-axis.
   */
  y: PropTypes.number.isRequired,
};

Arc.defaultProps = {
  absolute: false,
  relative: false,
  rotation: 0,
  large: false,
  sweep: 'positive',
};

export default Arc;
