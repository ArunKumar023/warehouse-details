import React from "react";
import { Link } from "react-router-dom";
// import "./WarehouseCard.css"; 
const WarehouseCard = ({ warehouse }) => {
  return (
    <div className="warehouse-card">
      <h3>{warehouse.name}</h3>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
      <p>Type: {warehouse.type}</p>
      <p>Registered: {warehouse.is_registered ? "Yes" : "No"}</p>
      <p>Live: {warehouse.is_live ? "Yes" : "No"}</p>
      <Link to={`/details/${warehouse.id}`}>View Details</Link>
    </div>
  );
};

export default WarehouseCard;
