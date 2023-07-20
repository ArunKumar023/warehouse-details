import React, { useState } from "react";
import { useSelector } from "react-redux";
import WarehouseCard from "./WarehouseCard";

const WarehouseList = () => {
  const warehouses = useSelector((state) => state.warehouses);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterCluster, setFilterCluster] = useState("");
  const [filterSpaceLimit, setFilterSpaceLimit] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterCity = (e) => {
    setFilterCity(e.target.value);
  };

  const handleFilterCluster = (e) => {
    setFilterCluster(e.target.value);
  };

  const handleFilterSpaceLimit = (e) => {
    setFilterSpaceLimit(e.target.value);
  };

  // Extract unique cities and clusters from the warehouses data
  const uniqueCities = [...new Set(warehouses.map((warehouse) => warehouse.city))];
  const uniqueClusters = [...new Set(warehouses.map((warehouse) => warehouse.cluster))];

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <label htmlFor="cityFilter">Filter by City:</label>
      <select id="cityFilter" value={filterCity} onChange={handleFilterCity}>
        <option value="">All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label htmlFor="clusterFilter">Filter by Cluster:</label>
      <select id="clusterFilter" value={filterCluster} onChange={handleFilterCluster}>
        <option value="">All Clusters</option>
        {uniqueClusters.map((cluster) => (
          <option key={cluster} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Minimum space available"
        value={filterSpaceLimit}
        onChange={handleFilterSpaceLimit}
      />

      <div className="warehouse-list">
        {/* Filter and map the warehouses based on the selected filters */}
        {warehouses
          .filter((warehouse) => {
            return (
              warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
              (filterCity === "" || warehouse.city === filterCity) &&
              (filterCluster === "" || warehouse.cluster === filterCluster) &&
              (filterSpaceLimit === "" || warehouse.space_available >= Number(filterSpaceLimit))
            );
          })
          .map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
      </div>
    </div>
  );
};

export default WarehouseList;
