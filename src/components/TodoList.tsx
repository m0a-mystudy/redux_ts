import * as React from 'react';
import { Component, Props } from 'react';
import Todo from './Todo';

interface TodoListProps extends Props<TodoList> {
    onTodoClick: (index: number) => void;
    todos: { text: string, completed: boolean }[];
}
export default class TodoList extends Component<TodoListProps, void> {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) => (
                        <Todo {...todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(index)} 
                        />)
                    )
                }
            </ul>
        );
    }
}

