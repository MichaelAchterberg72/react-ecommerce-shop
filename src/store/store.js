import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMidddleware from 'redux-saga';

import { rootSaga } from './root-saga';
import { loggerMiddleware } from './middleware/logger';

import { rootReducer } from './root-reducer';




const persistConfig = {
    key: 'root,',
    storage,
    whiteList: ['cart'],
};

const sagaMiddleware = createSagaMidddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddleware, sagaMiddleware].filter(
    Boolean
);

const composeEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);