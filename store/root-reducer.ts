import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {TestAReducer} from "./test-a/test-a.reducer";
import {TestBReducer} from "./test-b/test-b.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {useMemo} from "react";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const initStore = () => {
    return createStore(TestAReducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)

const reducers = {
    TestAReducer,
    TestBReducer,
}
// function initStore(initialState) {
//     return createStore(
//         combineReducers(reducers),
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

let store
export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
