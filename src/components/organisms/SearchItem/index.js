import React from 'react';
import {Rating, Img} from '../../molecules';
import './style.css';

const getAddress = (location) =>{
  const allEntries = Object.entries(location);
  let res = '';
  for(const [key, value] of allEntries){
    res += value || '';
    res += ' ';
  }
  return res;
}

const SearchItem = ({data:{name, rating, location, is_closed, image_url, review_count}}) => (
  <div className='search-item row border'>
    <div className="col-md-8">
      <h4>{name}</h4>
      <Rating max={5} value={rating} review_count={review_count}/>
      <div>{getAddress(location)}</div>
      <div>{is_closed?'Closed':'Open'}</div>
    </div>
    <div className="col-md-4">
      <Img src={image_url}/>
    </div>
  </div>
);

export default SearchItem;
