import { useState, useEffect } from "react";
import "../styles/Filters.css";

export default function Filters({ vehicles, setFilteredVehicles }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedKm, setSelectedKm] = useState("");

  const brands = [...new Set(vehicles.map((v) => v.brand))];
  const years = [...new Set(vehicles.map((v) => v.anoModelo))];

  useEffect(() => {
    handleFilterChange();
  }, [selectedBrand, selectedYear, selectedPriceRange, selectedKm]);

  const handleFilterChange = () => {
    if (!setFilteredVehicles) return;

    let filtered = vehicles;

    if (selectedBrand) {
      filtered = filtered.filter((v) => v.brand === selectedBrand);
    }

    if (selectedYear) {
      filtered = filtered.filter((v) => v.anoModelo === selectedYear);
    }

    if (selectedPriceRange) {
      filtered = filtered.filter((v) => {
        const price = parseInt(v.price2.replace(/\D/g, ""));
        if (selectedPriceRange === "10000-50000") return price >= 10000 && price <= 50000;
        if (selectedPriceRange === "50000-150000") return price > 50000 && price <= 150000;
        if (selectedPriceRange === "150000-500000") return price > 150000 && price <= 500000;
        return true;
      });
    }

    if (selectedKm) {
      filtered = filtered.filter((v) => {
        const km = parseInt(v.kmtragem.replace(/\D/g, ""));
        if (selectedKm === "10000") return km <= 10000;
        if (selectedKm === "30000") return km <= 30000;
        if (selectedKm === "50000") return km > 50000;
        return true;
      });
    }

    setFilteredVehicles(filtered);
  };

  const handleClearFilters = () => {
    setSelectedBrand("");
    setSelectedYear("");
    setSelectedPriceRange("");
    setSelectedKm("");
    setFilteredVehicles(vehicles);
  };

  return (
    <div className="filter-container">
      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">Marca</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>

      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Ano</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>

      <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
        <option value="">Faixa de Valor</option>
        <option value="10000-50000">R$ 10.000 - R$ 50.000</option>
        <option value="50000-150000">R$ 50.000 - R$ 150.000</option>
        <option value="150000-500000">R$ 150.000 - R$ 500.000</option>
      </select>

      <select value={selectedKm} onChange={(e) => setSelectedKm(e.target.value)}>
        <option value="">Quilometragem</option>
        <option value="10000">Até 10.000 Km</option>
        <option value="30000">Até 30.000 Km</option>
        <option value="50000">Mais de 50.000 Km</option>
      </select>

      <button className="clear-filters" onClick={handleClearFilters}>
        Limpar Filtros
      </button>
    </div>
  );
}
