import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {createWrapper} from "next-redux-wrapper";
import {TestAReducer} from "./test-a/test-a.reducer";
import {TestBReducer} from "./test-b/test-b.reducer";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const initStore = () => {
    return createStore((TestAReducer), bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
