import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard2590243Reducer from '../features/Dashboard2590243/redux/reducers'
import Dashboard1490240Reducer from '../features/Dashboard1490240/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard2590243: Dashboard2590243Reducer,
Dashboard1490240: Dashboard1490240Reducer,

});