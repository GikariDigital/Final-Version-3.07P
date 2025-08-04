import React, { useState, useEffect } from "react";
import vehicleData from "./vehicle_dropdown_data_v2.json";

const VehicleSelector = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [fuels, setFuels] = useState([]);
  const [crsps, setCrsps] = useState([]);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedCRSP, setSelectedCRSP] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    setMakes(Object.keys(vehicleData));
  }, []);

  useEffect(() => {
    if (selectedMake) {
      setModels(Object.keys(vehicleData[selectedMake]));
      setSelectedModel("");
    }
  }, [selectedMake]);

  useEffect(() => {
    if (selectedMake && selectedModel) {
      setFuels(Object.keys(vehicleData[selectedMake][selectedModel]));
      setSelectedFuel("");
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedMake && selectedModel && selectedFuel) {
      setCrsps(vehicleData[selectedMake][selectedModel][selectedFuel]);
      setSelectedCRSP("");
    }
  }, [selectedFuel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Selected:
Make: ${selectedMake}
Model: ${selectedModel}
Fuel: ${selectedFuel}
CRSP: ${selectedCRSP}
Year: ${selectedYear}
Month: ${selectedMonth}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Make:
        <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
          <option value="">-- Select Make --</option>
          {makes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
      </label>

      <label>
        Model:
        <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedMake}>
          <option value="">-- Select Model --</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </label>

      <label>
        Fuel:
        <select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} disabled={!selectedModel}>
          <option value="">-- Select Fuel --</option>
          {fuels.map((fuel) => (
            <option key={fuel} value={fuel}>{fuel}</option>
          ))}
        </select>
      </label>

      <label>
        CRSP:
        <select value={selectedCRSP} onChange={(e) => setSelectedCRSP(e.target.value)} disabled={!selectedFuel}>
          <option value="">-- Select CRSP --</option>
          {crsps.map((crsp, index) => (
            <option key={index} value={crsp}>{crsp}</option>
          ))}
        </select>
      </label>

      <label>
        Year:
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">-- Select Year --</option>
          {Array.from({ length: 21 }, (_, i) => 2005 + i).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </label>

      <label>
        Month:
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">-- Select Month --</option>
          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </label>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default VehicleSelector;