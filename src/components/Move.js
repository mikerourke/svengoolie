import React from 'react';
import PropTypes from 'prop-types';
import { getCommand, mustContainValidPosition } from '../lib';

/**
 * Represents the `moveto` instruction, which can be thought of as picking up
 * the drawing instrument, and setting it down somewhere else. There is no line
 * drawn between the previous point and the specified point. It is good
 * practice to open all paths with a moveto command, because without an
 * initial moveto, commands will be executed with the starting point,
 * wherever this was previously, possibly resulting in undefined behaviour.
 */
const Move = () => <React.Fragment />;

Move.getMovement = ({ x, y, ...rest }) =>
  [getCommand('m', rest), x, y].join(' ');

Move.propTypes = {
  /**
   * Indicates if the element values refer to absolute positioning.
   */
  absolute: mustContainValidPosition,
  /**
   * Indicates if the element values refer to relative positioning.
   */
  relative: mustContainValidPosition,
  /**
   * Coordinate along the x-axis (for absolute) or distance relative to the
   * left or right of the current position (for relative).
   */
  x: PropTypes.number.isRequired,
  /**
   * Coordinate along the y-axis (for absolute) or distance relative up or down
   * from the current position (for relative).
   */
  y: PropTypes.number.isRequired,
};

Move.defaultProps = {
  absolute: false,
  relative: false,
};

export default Move;
