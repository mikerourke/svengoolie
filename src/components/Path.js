import React from 'react';
import PropTypes from 'prop-types';

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

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const pathElements = this.ref.querySelectorAll('[data-movement]');
    if (pathElements.length === 0) {
      throw new Error('You must specify elements within the path.');
    }

    const pathValues = [];
    pathElements.forEach(pathElement => {
      pathValues.push(pathElement.dataset.movement);
      pathElement.remove();
    });

    if (this.props.autoClose) pathValues.push('z');
    this.ref.setAttribute('d', pathValues.join(' '));
  }

  handleRef = element => (this.ref = element);

  render() {
    // TODO: Add checker for <Close />.
    const { autoClose, ...rest } = this.props;
    return <path ref={this.handleRef} {...rest} />;
  }
}
