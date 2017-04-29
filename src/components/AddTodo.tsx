import * as React from 'react';
// import * as ReactDOM from 'react-dom';

interface AddTodoProps extends React.Props<AddTodo> {
    onAddClick: (text: string) => void;
}

interface AddTodoStatus {
    text: string;
}
export default class AddTodo extends React.Component<AddTodoProps, AddTodoStatus> {
    // ref保持しとくフィールド
    private x: HTMLInputElement;
    render() {
        return (
            <div>
                <input type="text" ref={e => (this.x = e)} onChange={e => {

                    this.setState({ text: e.target.value });

                }
                }
                />
                <button onClick={e => this.handleClick.call(this)}>
                    Add
                </button>
            </div>);
    }

    handleClick() {
        this.props.onAddClick(this.state.text);
        this.setState({ text: '' });
        // (<any>this.refs).foo = '';
        // ReactDOM.findDOMNode<HTMLInputElement>(this.refs['name']).value = '';
        this.x.value = '';
    }
};