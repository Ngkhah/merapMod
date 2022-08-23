import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
// export const history = createBrowserHistory({basename: 'mod'});
export const history = createBrowserHistory();
const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
}) : compose; // môi trường developer sẽ sử dụng REDUX_DEVTOOLS, môi trườn production sẽ không sử dụng

const resetEnhanser = rootReducer => (state, action)=>{
    if(action.type !== "RESET") return rootReducer(state, action)
    const newState = rootReducer(undefined, {});
    newState.router = state.router;
    return newState
}
let store;

export const configureStore = (preloadState) => {
    const middleWare = [thunk,routerMiddleware(history)]; // danh sách các middleware
    const enhancers = [applyMiddleware(...middleWare)];
    store = createStore(
        resetEnhanser(createRootReducer(history)),
        preloadState,
        composeEnhancers(...enhancers)
    ); // ... es6 create new array
    return store;
};

export function getHistory() {
    return history;
}

export default function getStore() {
    return store;
}
