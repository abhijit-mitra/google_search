import React, { PureComponent } from 'react';
import {Loader} from '../../atoms';

class Img extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };
  }

  componentDidMount = ()=>{
    const self = this;
    const {src} = this.props;
    const img = new Image();
    img.src = src;
    img.onload = function(){
      self.setState({isLoading: false})
    }
  }

  render() {
    const {isLoading} = this.state;
    return (
      <React.Fragment>
        {
          isLoading?
          <Loader/>:
          <img alt='' {...this.props} />
        }
      </React.Fragment>
    );
  }

}

export default Img;
