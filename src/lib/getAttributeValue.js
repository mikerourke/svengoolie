import React from 'react';

export default function getAttributeValue(children) {
  const directions = React.Children.map(children, child => {
    const getMovement = child.type ? child.type.getMovement : null;
    // TODO: Add detailed error.
    if (getMovement === null) throw new Error('Invalid child.');
    return getMovement(child.props);
  });
  return directions.join(' ');
}
