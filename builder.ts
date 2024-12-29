// Car class with optional features
class Car {
    seats: number | undefined;
    engine: string | undefined;
    tripComputer: boolean | undefined;
    gps: boolean | undefined;
}

// Manual class corresponding to the car's configuration
class Manual {
    seatsInfo: string | undefined;
    engineInfo: string | undefined;
    tripComputerInfo: string | undefined;
    gpsInfo: string | undefined;
}

// Builder interface specifying methods for creating parts of the product
interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: string): void;
    setTripComputer(tripComputer: boolean): void;
    setGPS(gps: boolean): void;
}

// Concrete builder class for Car
class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    reset(): void {
        this.car = new Car();
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    setEngine(engine: string): void {
        this.car.engine = engine;
    }

    setTripComputer(tripComputer: boolean): void {
        this.car.tripComputer = tripComputer;
    }

    setGPS(gps: boolean): void {
        this.car.gps = gps;
    }

    getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}

// Concrete builder class for Manual
class CarManualBuilder implements Builder {
    private manual: Manual;

    constructor() {
        this.manual = new Manual();
    }

    reset(): void {
        this.manual = new Manual();
    }

    setSeats(seats: number): void {
        this.manual.seatsInfo = `Car has ${seats} seats.`;
    }

    setEngine(engine: string): void {
        this.manual.engineInfo = `Car has an engine: ${engine}.`;
    }

    setTripComputer(tripComputer: boolean): void {
        this.manual.tripComputerInfo = `Trip computer is ${tripComputer ? "installed" : "not installed"}.`;
    }

    setGPS(gps: boolean): void {
        this.manual.gpsInfo = `GPS is ${gps ? "installed" : "not installed"}.`;
    }

    getProduct(): Manual {
        const product = this.manual;
        this.reset();
        return product;
    }
}

// Director class responsible for executing building steps in a specific sequence
class Director {
    constructSportsCar(builder: Builder): void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("SportEngine");
        builder.setTripComputer(true);
        builder.setGPS(true);
    }

    constructSUV(builder: Builder): void {
        builder.reset();
        builder.setSeats(5);
        builder.setEngine("SUVEngine");
        builder.setTripComputer(true);
        builder.setGPS(true);
    }
}

// Client code
class Application {
    makeCar(): void {
        const director = new Director();

        const carBuilder = new CarBuilder();
        director.constructSportsCar(carBuilder);
        const car = carBuilder.getProduct();
        console.log("Car built:", car);

        const manualBuilder = new CarManualBuilder();
        director.constructSportsCar(manualBuilder);
        const manual = manualBuilder.getProduct();
        console.log("Manual built:", manual);
    }
}

// Run the application
const app = new Application();
app.makeCar();
