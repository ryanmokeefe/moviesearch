import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { MultiList } from '@appbaseio/reactivesearch';

class MultipleList extends React.Component {
    render() {
        return(
            <MultiList
            
                componentId="genres-list"
                dataField="genres_data.raw"
                className="genres-filter"
                size={20}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="All Genres"
                showCheckbox={true}
                showCount={true}
                showSearch={true}
                placeholder="Search for a Genre"
                react={{
                    and: [
                        "mainSearch",
                        "results",
                        "date-filter",
                        "RangeSlider",
                        "language-list",
                        "revenue-list"
                    ]
                }}
                showFilter={true}
                filterLabel="Genre"
                URLParams={false}
                innerClass={{
                    label: "list-item",
                    input: "list input"
                }}
            />
        )}
}

export default MultipleList;