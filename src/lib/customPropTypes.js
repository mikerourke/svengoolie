/* eslint-disable import/prefer-default-export */

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
