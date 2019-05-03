import React from 'react';
import '../App.css';
import { DateRange } from '@appbaseio/reactivesearch';

class DateRangeSearch extends React.Component {
    render() {
        return(
            <DateRange
                componentId="date-filter"
                dataField="release_date"
                className="datePicker"
            />
        );
    }
}

export default DateRangeSearch;