import React, {Component} from 'react';
import './App.css';
import { ReactiveBase, SelectedFilters } from '@appbaseio/reactivesearch';
import MultipleList from './Components/MultiList';
import Search from './Components/DataSearch';
import SingularRange from './Components/SingleRange';
import Slider from './Components/RangeSlider';
import MultiData from './Components/MultiDataList';
import DateRangeSearch from './Components/DateRange';
import ResultsCard from './Components/ResultCard'
// import ResultsContainer from './Components/ReactiveList'

// const { ResultCardWrapper } = ReactiveList;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      message: "Show Filters"
    };
  }

  

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "Show Filter" : "Show Movies"
    });
  }

  render() {
    return (
      <div className="main-container">
        <ReactiveBase 
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
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
          }}
        >

          <div className="navbar">
            <div className="logo-container">
            <p>Movie Search</p>
            </div>
            <div className="search-container">
              <Search />
            </div>
          </div>
          <div className="sub-container">
            <div
              className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-pied-piper-alt" /> Genres{" "}
                </b>
              </div>
            <MultipleList /> 
            <hr className="blue" />
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-dollar" /> Revenue{" "}
              </b>
            </div>
            <SingularRange />
            <div className="filter-heading center">
              <b>
                <i className="fa fa-star" /> Ratings
              </b>
            </div>
            <Slider />
            <hr className="blue" />
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-language" /> Languages{" "}
              </b>
            </div>
            <MultiData />
            <hr className="blue" />
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-calendar" /> Release Date{" "}
              </b>
            </div>
            <DateRangeSearch />

            
          </div>
          <div
            className={
              this.state.isClicked
                ? "result-container-optional"
                : "result-container"
            }
          >
            <SelectedFilters
              showClearAll={true}
              clearAllLabel="Clear filters"
            />

{/*  */}
          <ResultsCard />
            
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>

        </ReactiveBase>
      </div>

    ); 
  }
}

export default App;