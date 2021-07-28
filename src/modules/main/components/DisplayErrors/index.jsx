import React from 'react';

const DisplayErrors = ({ errors }) => {
  if (!errors) return null;
  return <p>{errors}</p>;
};

export default DisplayErrors;
