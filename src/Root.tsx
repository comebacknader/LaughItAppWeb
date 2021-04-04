import * as React from 'react'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import * as promiseMiddleware from 'redux-promise'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export default ({ children, initialState={} }) => {
    console.log("Initializing store")
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(promiseMiddleware["default"]))
    )

    return (
     <Provider store={store}>
         {children}
     </Provider>  
    )
};