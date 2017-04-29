import * as React from 'react';
import * as ReactRedux from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import { TodoAppState } from '../reducer';
import { addTodo, completeTodo, setVisibilityFilter, FilterType, TodoType, Action } from '../actions/types';

interface AppProps extends React.Props<{}> {
    dispatch: (action: Action) => void;
    visibleTodos: TodoType[];
    visivilityFilter: FilterType;
}

function selectTodos(todos: TodoType[], filter: FilterType): TodoType[] {
    switch (filter) {
        case 'SHOW_ACTIVE':
            return todos.filter(todo => (todo.completed === false));
        case 'SHOW_COMPLETED':
            return todos.filter(todo => (todo.completed === true));
        case 'SHOW_ALL':
        default:
            return todos;
    }
}
function select(state: TodoAppState) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visivilityFilter: state.visibilityFilter
    };
}


class App extends React.Component<AppProps, {}> {
    render() {
        const { dispatch, visibleTodos, visivilityFilter } = this.props;
        return (
            <div>
                <AddTodo
                    onAddClick={text => { dispatch(addTodo(text)); }} />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter={visivilityFilter}
                    onFilterChange={filter =>
                        dispatch(setVisibilityFilter(filter))
                    } />
            </div>
        );
    };
};



export default ReactRedux.connect(select)(App);