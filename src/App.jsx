import { useEffect, useState } from "react";
import Header from "./components/Header";
import VehicleCard from "./components/VehicleCard";
import ContactModal from "./components/ContactModal";
import Filters from "./components/Filters";
import "./styles/App.css";

export default function App() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setFilteredVehicles(data);
      });
  }, []);

  useEffect(() => {
    const result = vehicles.filter((v) =>
      v.brand.toLowerCase().includes(search.toLowerCase()) ||
      v.model.toLowerCase().includes(search.toLowerCase()) ||
      v.version.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredVehicles(result);
  }, [search, vehicles]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Filters vehicles={vehicles} setFilteredVehicles={setFilteredVehicles} />
      <div className="vehicles-grid">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} onContact={setSelectedVehicle} />
        ))}
      </div>
      <ContactModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </div>
  );
}
