
import { Action, FilterType, TodoType } from './actions/types';
export interface TodoAppState {
    visibilityFilter: FilterType;
    todos: TodoType[];
}

const initState: TodoAppState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
};

export function todoApp(state: TodoAppState = initState, action: Action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: <TodoType[]> [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case 'TOGGLE_COMPLETE_TODO':
            return Object.assign({}, state, {
                todos: <TodoType[]> [
                    ...state.todos.slice(0, action.index),
                    {
                        text: state.todos[action.index].text,
                        completed: !state.todos[action.index].completed
                    },
                    ... state.todos.slice(action.index + 1)
                ]
            });

        default:
            return state;
    }
}

