import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import MultipleList from './MultiList';
import Search from './DataSearch';
import SingularRange from './SingleRange';
import Slider from './RangeSlider';
import MultiData from './MultiDataList';

class Main extends React.Component {
  props(){
  this.theme={
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',fontSize: "16px"

    },
    colors: {
      textColor: "#fff",
      backgroundColor: "#212121",
      primaryTextColor: "#fff",
      primaryColor: "#2196F3",
      titleColor: "#fff",
      alertColor: "#d9534f",
      borderColor: "#666"
    }
  }
}
  render() {
    return (
      <div className="main-container">
        <ReactiveBase 
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
        >
        Hello world
      
          <Search />
          <MultipleList />
          <SingularRange />
          <MultiData />
          <Slider />
        </ReactiveBase>
      </div>

    ); 
  }
}

export default Main;