import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { DataSearch } from '@appbaseio/reactivesearch';

class Search extends React.Component {
    render() {
        return(
            <DataSearch
                componentId="mainSearch"
                dataField={["original_title.search"]}
                className="search-bar"
                queryFormat="and"
                placeholder="Search for movies..."
            />
        );
    }
}

export default Search;