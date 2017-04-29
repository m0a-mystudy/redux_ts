import { Component, Props } from 'react';
import * as React from 'react';

interface TodoProps extends Props<Todo> {
    onClick: () => void;
    completed: boolean;
    text: string;
}
export default class Todo extends Component<TodoProps, void> {
    render() {
        return (
            <li onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        );
    }
}