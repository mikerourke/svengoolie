import React from 'react';
import PropTypes from 'prop-types';
import { extrapolateDirections } from '../lib';

export default class Path extends React.Component {
  static propTypes = {
    /**
     * Indicates if a closing `z` should be appended automatically to the end
     * of the path. If false, a <Close /> child element must be present.
     */
    autoClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    autoClose: true,
  };

  render() {
    const { autoClose, children, ...rest } = this.props;
    const directions = extrapolateDirections(children);
    const fullDirections = autoClose === true ? `${directions} z` : directions;
    return <path d={fullDirections} {...rest} />;
  }
}
