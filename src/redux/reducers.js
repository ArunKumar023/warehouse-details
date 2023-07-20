// reducers.js
import { combineReducers } from "redux";
import { ActionTypes } from "./actions";
import warehousesData from "../data/warehouses.json";

const initialState = {
  warehouses: warehousesData,
};

const warehouseReducer = (state = initialState.warehouses, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_WAREHOUSE:
      const { id, updatedWarehouse } = action.payload;
      return state.map((warehouse) =>
        warehouse.id === id ? { ...warehouse, ...updatedWarehouse } : warehouse
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  warehouses: warehouseReducer,
});

export default rootReducer;
