import React from 'react';

const LeftPane = ({children}) => (
  <div className='col-md-4 vh-100 overflow-auto'>
    {children}
  </div>
);

export default LeftPane;
