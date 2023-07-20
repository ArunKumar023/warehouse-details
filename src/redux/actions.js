// actions.js
export const ActionTypes = {
  EDIT_WAREHOUSE: "EDIT_WAREHOUSE",
};

export const editWarehouse = (id, updatedWarehouse) => ({
  type: ActionTypes.EDIT_WAREHOUSE,
  payload: { id, updatedWarehouse },
});
