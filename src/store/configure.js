// import thunk from 'redux-thunk'
import { rootReducer } from 'reducers/'
import { applyMiddleware, createStore, compose } from 'redux'

export const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            // applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            : undefined,
        )
    )
}