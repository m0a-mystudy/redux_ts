

export type FilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type TodoType = {
    text: string;
    completed: boolean
};


export type Action =
    {
        type: 'ADD_TODO',
        text: string
    } |
    {
        type: 'TOGGLE_COMPLETE_TODO',
        index: number
    } |
    {
        type: 'SET_VISIBILITY_FILTER',
        filter: FilterType
    };



export function addTodo(text: string): Action {
    return {
        type: 'ADD_TODO',
        text
    };
}

export function completeTodo(index: number): Action {
    return {
        type: 'TOGGLE_COMPLETE_TODO',
        index
    };
}

export function setVisibilityFilter(filter: FilterType): Action {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
}
