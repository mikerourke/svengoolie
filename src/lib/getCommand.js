/**
 * Returns the cased letter command based on whether the component is using
 * absolute or relative positioning.
 * @param {string} letter Letter instruction that will either be upper or lower-
 *    cased.
 * @param {Object} props Props from the React component being evaluated.
 * @return {string}
 */
export default function getCommand(letter, props) {
  if (props.absolute === true) return letter.toUpperCase();
  return letter.toLowerCase();
}
