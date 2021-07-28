import './index.css';
import React from 'react';

const Empty = ({ message = 'Realize a sua busca' }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Empty;
