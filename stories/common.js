/* eslint-disable react/prop-types */
import React from 'react';

export const TableComponent = ({ propDefinitions }) => {
  const borderStyle = {
    border: '1px solid gray',
    fontSize: 14,
  };

  const cellStyle = {
    ...borderStyle,
    padding: 4,
  };

  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td style={{ ...cellStyle, fontFamily: 'monospace' }}>{property}</td>
          <td style={cellStyle}>
            {propType.name === 'custom' ? 'bool' : propType.name}
          </td>
          <td style={cellStyle}>{required ? 'Yes' : 'No'}</td>
          <td style={cellStyle}>{defaultValue || '-'}</td>
          <td style={cellStyle}>{description}</td>
        </tr>
      );
    },
  );

  const headingStyle = {
    ...cellStyle,
    textAlign: 'left',
  };

  return (
    <table style={{ ...borderStyle, borderCollapse: 'collapse' }}>
      <thead style={borderStyle}>
        <tr style={borderStyle}>
          <th style={headingStyle}>Name</th>
          <th style={headingStyle}>Type</th>
          <th style={headingStyle}>Required</th>
          <th style={headingStyle}>Default</th>
          <th style={headingStyle}>Description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export const Wrapper = ({ children, ...rest }) => (
  <svg width={500} height={125} {...rest}>
    <g transform="translate(4, 4)">{children}</g>
  </svg>
);
