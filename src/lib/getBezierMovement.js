import React from 'react';
import getCommand from './getCommand';

/**
 * Returns the bezier movement based on the specified props and nodes for the
 * bezier type.
 * @param {Object} props Props from the React component being evaluated.
 * @param {Object} nodes Group of objects with the command letter and
 *    corresponding points length based on the bezier curve.
 * @return {string}
 */
export default function getBezierMovement(props, nodes) {
  const pointElements = React.Children.toArray(props.children);
  const bezierPoints = pointElements.reduce(
    (acc, pointElement) => [...acc, pointElement.props.x, pointElement.props.y],
    [],
  );

  // Loop through nodes to determine the command based on the number of
  // Point children in the parent component.
  const casedCommand = nodes.reduce((acc, node) => {
    if (pointElements.length !== node.length) return acc;
    return getCommand(node.command, props);
  }, '');

  if (casedCommand === '')
    throw new Error('Cased command could not be found for bezier.');

  return [casedCommand, ...bezierPoints].join(' ');
}
