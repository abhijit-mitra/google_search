import React from 'react';
import './style.css';

const Star = ({checked}) =>(
  <span className={`fa fa-star ${checked && 'checked'}`}></span>
)

Star.defaultProps={
  checked:false
}

export default Star
