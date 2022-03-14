import { combineReducers } from "redux";
import itemlistReducer from './itemlistReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({

    itemlistReducer: itemlistReducer,
    cartReducer: cartReducer
})
export default rootReducer
