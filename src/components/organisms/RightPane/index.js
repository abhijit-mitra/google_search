import React from 'react';

const RightPane = ({children}) => (
  <div className='col-md-8 vh-100 overflow-auto'>
    {children}
  </div>
);

export default RightPane;
