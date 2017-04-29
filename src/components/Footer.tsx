import * as React from 'react';
import { FilterType } from '../actions/types';

interface FooterProps extends React.Props<Footer> {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}
export default class Footer extends React.Component<FooterProps, {}> {
    renderFilter(filter: FilterType, name: string) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href="#" onClick={
                e => {
                    e.preventDefault();
                    this.props.onFilterChange(filter);
                }
            } >
                {name}
            </a>
        );
    }

    render() {
        return (
            <p>
                Show:{' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
        </p>
        );
    }
}
