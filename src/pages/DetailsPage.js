import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editWarehouse } from "../redux/actions";

const DetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const warehouse = useSelector((state) => state.warehouses.find((w) => w.id === Number(id)));

  const [editMode, setEditMode] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState({
    name: warehouse?.name || "",
    city: warehouse?.city || "",
    cluster: warehouse?.cluster || "",
    space_available: warehouse?.space_available || 0,
    is_live: warehouse?.is_live || false,
  });

  const [customFields, setCustomFields] = useState(warehouse?.customFields || {});
  const [newCustomFieldName, setNewCustomFieldName] = useState("");
  const [newCustomFieldValue, setNewCustomFieldValue] = useState("");


  const handleEdit = () => {
    setEditMode(true);
  };

  const handleAddCustomField = () => {
    setCustomFields((prevCustomFields) => ({
      ...prevCustomFields,
      [newCustomFieldName]: newCustomFieldValue,
    }));
    setNewCustomFieldName("");
    setNewCustomFieldValue("");
  };

  const handleRemoveCustomField = (fieldName) => {
    setCustomFields((prevCustomFields) => {
      const updatedCustomFields = { ...prevCustomFields };
      delete updatedCustomFields[fieldName];
      return updatedCustomFields;
    });
  };


  const handleSave = () => {
    const updatedWarehouse = { ...editedWarehouse, customFields };
    dispatch(editWarehouse(warehouse.id, updatedWarehouse));
    setEditMode(false);
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedWarehouse((prevWarehouse) => ({
      ...prevWarehouse,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!warehouse) {
    return <div>Warehouse not found</div>;
  }


  return (
    <div className="details-page">
      <h2>Warehouse Details</h2>
      {editMode ? (
        <>
          <label>
            Warehouse Name:
            <input type="text" name="name" value={editedWarehouse.name} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={editedWarehouse.city} onChange={handleChange} />
          </label>
          <label>
            Cluster:
            <input
              type="text"
              name="cluster"
              value={editedWarehouse.cluster}
              onChange={handleChange}
            />
          </label>
          <label>
            Space Available:
            <input
              type="number"
              name="space_available"
              value={editedWarehouse.space_available}
              onChange={handleChange}
            />
          </label>
          <label>
            Live Status:
            <input
              type="checkbox"
              name="is_live"
              checked={editedWarehouse.is_live}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          {/* Custom Fields */}
          <h3>Custom Fields</h3>
          {Object.entries(customFields).map(([fieldName, fieldValue]) => (
            <div key={fieldName}>
              <strong>{fieldName}:</strong> {fieldValue}
              <button onClick={() => handleRemoveCustomField(fieldName)}>Remove</button>
            </div>
          ))}
          <div>
            <input
              type="text"
              placeholder="Field Name"
              value={newCustomFieldName}
              onChange={(e) => setNewCustomFieldName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Field Value"
              value={newCustomFieldValue}
              onChange={(e) => setNewCustomFieldValue(e.target.value)}
            />
            <button onClick={handleAddCustomField}>Add Custom Field</button>
          </div>
        </>
      ) : (
        <>
          <p>Name: {warehouse.name}</p>
          <p>City: {warehouse.city}</p>
          <p>Cluster: {warehouse.cluster}</p>
          <p>Space Available: {warehouse.space_available}</p>
          <p>Live Status: {warehouse.is_live ? "Yes" : "No"}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default DetailsPage;
