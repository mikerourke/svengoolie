import React from 'react';

/**
 * Validate the props to ensure either absolute or relative is set to true, but
 * neither is true and neither is false.
 * @param {Object} props Props of the corresponding React component.
 * @return {Error|null}
 */
export const mustContainValidPosition = props => {
  const { absolute, relative } = props;
  if (absolute === false && relative === false)
    return new Error(
      'You cannot specify false for both absolute and relative properties',
    );
  if (absolute === true && relative === true)
    return new Error(
      'You cannot specify true for both absolute and relative properties',
    );
  return null;
};

export const mustContainClose = props => {
  if (!props.autoClose) {
    // TODO: Add detailed error.
    if (!props.children) return new Error('You must specify children.');

    const closeCount = React.Children.toArray(props.children).reduce(
      (acc, child) => {
        if (child.type.name === 'Close') return acc + 1;
        return acc;
      },
      0,
    );
    if (closeCount === 0) {
      throw new Error(
        'You cannot specify false for the autoClose prop without a <Close /> element.',
      );
    }
  }

  return null;
};
