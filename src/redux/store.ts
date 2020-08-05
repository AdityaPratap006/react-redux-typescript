import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer } from './reducers/root.reducer';

const createStoreWithMiddlewares = applyMiddleware(thunk, logger)(createStore);
export const store = createStoreWithMiddlewares(rootReducer);

