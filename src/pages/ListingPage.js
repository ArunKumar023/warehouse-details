import React from "react";
import { useSelector } from "react-redux";
import WarehouseList from "../components/WarehouseList";
// import "./ListingPage.css";
const ListingPage = () => {
  const warehouses = useSelector((state) => state.warehouses);

  return (
    <div>
      <h1>Warehouse Listing Page</h1>
      <WarehouseList warehouses={warehouses} />
    </div>
  );
};

export default ListingPage;
