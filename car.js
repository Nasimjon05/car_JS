class Car {
  constructor(brand, model, fuel = 100) {
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
    this.engineOn = false;
  }

  startEngine() {
    if (this.fuel > 0) {
      this.engineOn = true;
      console.log(`${this.brand} ${this.model}'s engine is now ON.`);
    } else {
      console.log("Not enough fuel to start the engine.");
    }
  }

  drive(km) {
    if (!this.engineOn) {
      console.log("Start the engine first!");
      return;
    }

    const fuelNeeded = km * 0.2; // 0.2 liters per km
    if (fuelNeeded <= this.fuel) {
      this.fuel -= fuelNeeded;
      console.log(`You drove ${km} km. Fuel left: ${this.fuel.toFixed(1)} liters.`);
    } else {
      console.log("Not enough fuel to drive that far.");
    }
  }

  refuel(liters) {
    this.fuel += liters;
    console.log(`Added ${liters} liters of fuel. Total: ${this.fuel} liters.`);
  }

  showStatus() {
    console.log(`🚗 ${this.brand} ${this.model} | Fuel: ${this.fuel}L | Engine: ${this.engineOn ? "ON" : "OFF"}`);
  }
}

// 🔧 Example Usage
const myCar = new Car("Toyota", "Corolla");

myCar.showStatus();       // Check status
myCar.startEngine();      // Start the car
myCar.drive(50);          // Drive 50 km
myCar.refuel(20);         // Add 20L fuel
myCar.drive(200);         // Try to drive again
myCar.showStatus();       // Final status
