import React from 'react';
import { MultiDataList } from '@appbaseio/reactivesearch';

class MultiData extends React.Component {
    render() {
        return(
            <MultiDataList
                componentId="language-list"
                dataField="original_language.raw"
                className="language-filter"
                title="language"
                size={100}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="All Languages"
                showCheckbox={true}
                showSearch={true}
                placeholder="Search for a language"
                react={{
                    and: [
                        "mainSearch",
                        "results",
                        "date-filter",
                        "RangeSlider",
                        "genres-list",
                        "revenue-list"
                    ]

                }}
                data={[
                    {
                      label: "English",
                      value: "English"
                    },
                    {
                      label: "Chinese",
                      value: "Chinese"
                    },
                    {
                      label: "Hindi",
                      value: "Hindi"
                    }
                  ]}
                  showFilter={true}
                  filterLabel="Language"
                  URLParams={false}
                  innerClass={{
                      label: "list-item",
                      input: "list-input"
                  }}
            />
        );
    }
}

export default MultiData;