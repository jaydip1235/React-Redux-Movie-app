import React from 'react';
import {createStore} from 'redux'


import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import movies from './reducers';



//creating store
const store = createStore(movies);
console.log('store',store)

// console.log('BEFORE_STATE',store.getState())

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies : [{name:'Superman'}]
// });

// console.log('AFTER_STATE',store.getState())

ReactDOM.render(<App store={store} />,document.getElementById('root'));

