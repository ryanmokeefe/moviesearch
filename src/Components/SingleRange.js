import React from 'react';
import { SingleRange } from '@appbaseio/reactivesearch';
import '../App.css';

class SingularRange extends React.Component {
    render() {
        return(
            <SingleRange
                componentId="revenue-list"
                dataField="ran-revenue"
                className="revenue-filter"
                data={[
                    { start: 0, end: 1000, label: "< 1M" },
                    { start: 1000, end: 10000, label: "1M-10M" },
                    { start: 10000, end: 500000, label: "10M-500M" },
                    { start: 500000, end: 1000000, label: "500M-1B" },
                    { start: 1000000, end: 10000000, label: "> 1B" }
                ]}
                showRadio={true}
                showFilter={true}
                filterLabel="Revenue"
                URLParams={false}
                innerClass={{
                    label: "revenue-label",
                    radio: "revenue-radio"
                }}
            />
        );
    }
}

export default SingularRange;