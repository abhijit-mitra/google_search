import React, { PureComponent } from 'react';

import {LeftPane, RightPane, SearchItem} from "../components/organisms";
import {SearchAPI} from '../apis';
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount = async ()=>{
    const res = await SearchAPI.getSearchResult('term=restaurants&location=NYC');
    const data = await res.json();
    this.setState({
      data: data.businesses
    })
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App p-30">
        <div className="row">
          <LeftPane>
            {Boolean(data.length) && data.map((elm)=>(<SearchItem data={elm} key={elm.id}/>))}
          </LeftPane>
          <RightPane>
            <h1>Hi2</h1>
          </RightPane>
        </div>
      </div>
    );
  }

}

export default App;
