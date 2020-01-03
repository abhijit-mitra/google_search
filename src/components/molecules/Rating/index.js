import React from 'react';
import {Star} from '../../atoms';

const StarList = ({max, value}) =>{
  const arr = [];
  for(let i=0;i<max;i++){
    arr.push(
      (<Star checked={i<Math.floor(value)} key={i}/>)
    )
  }
  return arr;
}

const Rating = ({max, value, review_count}) => (
  <div className='Rating'>
    <StarList max={max} value={value}/>
    <span>{`(${review_count})`}</span>
  </div>
);

Rating.defaultProps={
  max:5,
  value:0,
  review_count:0
}

export default Rating;
