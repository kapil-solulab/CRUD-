import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from "redux"
// import rootReducer from "./rootReducer"
import storage from 'redux-persist/lib/storage';
// import {blacklist} from 'redux-persist';
import {combineReducers} from "redux";
import userReducer from "./reducer"

import {
  persistReducer,
  persistStore
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ["user"]
  
};
const userPersistConfig = {
  key: 'user',
  storage,
  blacklist : ["isFilter"]
}
const rootReducer = combineReducers({
  // data:  userReducer,
  data: persistReducer(userPersistConfig, userReducer)
})
 

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,composeWithDevTools( ));
const persistor =persistStore(store)
 
export default store
export {persistor}