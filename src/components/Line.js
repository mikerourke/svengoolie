import React from 'react';
import PropTypes from 'prop-types';
import { getCommand, mustContainValidPosition } from '../lib';

/**
 * Represents the lineto instruction, Unlike moveto instructions, lineto
 * instructions will draw a straight line. This line moves from the current
 * position, to the specified location. The syntax for a generic lineto
 * command is L x,y or l dx, dy, where x and y are absolute coordinates,
 * and dx and dy are distances, to the right and down respectively.
 *
 * There are also the instructions H and V, which specify Horizontal and
 * Vertical movements. Their syntax is the same as L, and their lower-case
 * versions h and v specify relative coordinates (juas as they do with l),
 * but they only take a single argument.
 */
const Line = ({ x, y, ...rest }) => {
  let command = 'l';
  if (y === null) command = 'h';
  if (x === null) command = 'v';
  const validValues = [x, y].filter(value => value !== null);
  const movement = [getCommand(command, rest), ...validValues].join(' ');
  return <g data-movement={movement} />;
};

Line.propTypes = {
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
   * left or right of the current position (for relative) to draw the line.
   */
  x: PropTypes.number,
  /**
   * Coordinate along the y-axis (for absolute) or distance relative up or down
   * from the current position (for relative) to draw the line.
   */
  y: PropTypes.number,
};

Line.defaultProps = {
  absolute: false,
  relative: false,
  x: null,
  y: null,
};

export default Line;
