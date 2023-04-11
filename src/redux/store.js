// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});

export default store;

// import thunk from 'redux-thunk';
// import { AsyncStorage } from 'react-native';
// import { createLogger } from 'redux-logger';
// import promise from 'redux-promise-middleware';
// import { persistReducer } from 'redux-persist';
// import { applyMiddleware, createStore, compose } from 'redux';

// import RootReducer from './RootReducer'

// const middlewares = [
// 	promise,
// 	thunk,

// ];

// if (__DEV__) {
// 	middlewares.push(createLogger())
// };

// const persistConfig = {
// 	key: 'root',
// 	storage: AsyncStorage
// };

// const pReducer = persistReducer(persistConfig, RootReducer);

// const Store = createStore(
// 	pReducer,
// 	undefined,
// 	compose(applyMiddleware(...middlewares))
// );

// export default Store;