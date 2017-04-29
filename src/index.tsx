import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import {todoApp} from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let store  = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
