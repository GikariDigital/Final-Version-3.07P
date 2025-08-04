import React from "react";
import VehicleSelector from "./VehicleSelector";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Kenya Import Duty Tax Calculator</h1>
      <p>Select vehicle details to calculate taxes.</p>
      <VehicleSelector />
    </div>
  );
}

export default App;