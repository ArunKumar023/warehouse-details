import React, { useState } from "react";
// import "./WarehouseForm.css";
const WarehouseForm = ({ warehouse, onSubmit }) => {
  // Implement form fields and form submission logic here
  const [name, setName] = useState(warehouse.name);
  const [city, setCity] = useState(warehouse.city);
  const [cluster, setCluster] = useState(warehouse.cluster);
  const [spaceAvailable, setSpaceAvailable] = useState(warehouse.space_available);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWarehouse = {
      ...warehouse,
      name,
      city,
      cluster,
      space_available: spaceAvailable,
    };
    onSubmit(updatedWarehouse);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Warehouse Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        Cluster:
        <input type="text" value={cluster} onChange={(e) => setCluster(e.target.value)} />
      </label>
      <label>
        Space Available:
        <input type="number" value={spaceAvailable} onChange={(e) => setSpaceAvailable(Number(e.target.value))} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default WarehouseForm;
