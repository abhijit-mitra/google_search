import {CORS_URL, SEARCH_URL, YELP_API_KEY} from '../config';

const headers = new Headers({
  'Authorization': `Bearer ${YELP_API_KEY}`,
  'Content-Type': 'application/json'
});

class SearchAPI{
  static getSearchResult(query){
    return fetch(`${CORS_URL}${SEARCH_URL}${query}`, {
     method: 'get',
     headers
   });
  }
}

export default SearchAPI;
