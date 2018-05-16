import React from 'react';
import PropTypes from 'prop-types';

const Point = () => <React.Fragment />;

Point.getMovement = props => `${props.x},${props.y}`;

Point.propTypes = {
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

export default Point;
