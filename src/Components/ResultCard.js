import React from 'react';
import { ResultCard, ReactiveList } from '@appbaseio/reactivesearch';
import '../App.css';

// const { ResultCardWrapper } = ReactiveList;
class Resultscard extends React.Component {
 
  render() {
    return (
      <ReactiveList
        componentId="results"
        dataField="name"
        pagination={true}
        react={{
          and: ["mainSearch",
          "RangeSlider",
          "language-list",
          "date-filter",
          "genres-list",
          "revenue-list"]
        }}
        paginationAt="bottom"
        pages={5}
        size={12}
        Loader="Loading..."
        noResults="No results were found..."
        sortOptions={[
          {
            dataField: "revenue",
            sortBy: "desc",
            label: "Sort by Revenue(High to Low) \u00A0"
          },
          {
            dataField: "popularity",
            sortBy: "desc",
            label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
          },
          {
            dataField: "vote_average",
            sortBy: "desc",
            label: "Sort by Ratings(High to Low) \u00A0"
          },
          {
            dataField: "original_title.raw",
            sortBy: "asc",
            label: "Sort by Title(A-Z) \u00A0"
          }
        ]}
        innerClass={{
          title: "result-title",
          listItem: "result-item",
          list: "list-container",
          sortOptions: "sort-options",
          resultStats: "result-stats",
          resultsInfo: "result-list-info",
          poweredBy: "powered-by"
        }}
        
        onData={({ data }) => (
          <ReactiveList.ResultCardWrapper>
                  {
                      data.map(item => (
                          <ResultCard 
                            key={item._id}
                            componentId="results"
                            dataField="original_title"

                          >
                          {/* <ResultCard.Image 
                            src='http://www.asfera.info/files/images/
                            1_aprela/4/deloreyn.jpg'
                          />
                              <ResultCard.Title 
                                  dangerouslySetInnerHTML={{ 
                                      __html: item.name 
                                  }} 
                              />
                              <ResultCard.Description>
                                {item.brand + " " + "*".repeat(item.rating)}
                              </ResultCard.Description> */}
                              
                            <div className="main-description">
                              <div className="ih-item square effect6 top_to_bottom">
                                <a
                                  target="#"
                                  href={"http://www.imdb.com/title/" + item.imdb_id}
                                >
                                  <div className="img">
                                    <img
                                      src={
                                        "https://image.tmdb.org/t/p/w500" +
                                        item.poster_path
                                      }
                                      alt={item.original_title}
                                      className="result-image"
                                    />
                                  </div>
                                  <div className="info colored">
                                    <h3 className="overlay-title">
                                      {item.original_title}
                                    </h3>

                                    <div className="overlay-description">
                                      {item.tagline}
                                    </div>

                                    <div className="overlay-info">
                                      <div className="rating-time-score-container">
                                        <div className="sub-title Rating-data">
                                          <b>
                                            Imdb
                                            <span className="details">
                                              {" "}
                                              {item.vote_average}/10{" "}
                                            </span>
                                          </b>
                                        </div>
                                        <div className="time-data">
                                          <b>
                                            <span className="time">
                                              <i className="fa fa-clock-o" />{" "}
                                            </span>{" "}
                                            <span className="details">
                                              {item.time_str}
                                            </span>
                                          </b>
                                        </div>
                                        <div className="sub-title Score-data">
                                          <b>
                                            Score:
                                            <span className="details">
                                              {" "}
                                              {item.score}
                                            </span>
                                          </b>
                                        </div>
                                      </div>
                                      <div className="revenue-lang-container">
                                        <div className="revenue-data">
                                          <b>
                                            <span>Revenue:</span>{" "}
                                            <span className="details">
                                              {" "}
                                              ${item.or_revenue}
                                            </span>{" "}
                                          </b>
                                        </div>

                                        <div className="sub-title language-data">
                                          <b>
                                            Language:
                                            <span className="details">
                                              {" "}
                                              {item.original_language}
                                            </span>
                                          </b>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </ResultCard>
                      ))
                  }
              </ReactiveList.ResultCardWrapper>
        )}
      />
  )}
}


export default Resultscard;