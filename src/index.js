import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {Router} from 'react-router-dom'
import history from './history.js'
import reducer from './reducer.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(loggerMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)