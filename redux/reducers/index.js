import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import authReducer from "./authReducer";
// import avatarReducer from "./avatarReducer";
// import cityPicReducer from "./cityPicReducer";
// import userReducer from "./userReducer";
// import travelsReducer from "./travelsReducer";
// import favoritesReducer from "./favoritesReducer";
// import myTravelsReducer from "./myTravelsReducer";
//import loginReducer from "./logInReducer"

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['favoritesState']
// }

const rootReducers = combineReducers({
  // auth: authReducer,
  // avatarState: avatarReducer,
  // cityPicState: cityPicReducer,
  // userState: userReducer,
  // travelsState: travelsReducer,
  // favoritesState: favoritesReducer,
  // myTravelsState: myTravelsReducer,
  //login: loginReducer,
});

//export default persistReducer(persistConfig, rootReducers);
export default rootReducers;

