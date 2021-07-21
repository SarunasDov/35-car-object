class Car {
    constructor(data) {
        this.data = data;

    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount(index) {
        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`);
    }

    doorsWorking() {
        let workingDoorsCount = 0;
        for (let i = 0; i < this.data.doors.length; i++) {
            const doors = this.data.doors[i];
            if (doors.working === true) {
                ++workingDoorsCount;
            }
        }

        if (this.data.doors.length === workingDoorsCount) {
            console.log(`${this.data.brand} has ${this.data.doors.length}, and all works!`);
        } else {
            console.log(`${this.data.brand} has ${this.data.doors.length}, but only ${workingDoorsCount} is working.`);
        }
    }

    maxDistance() {

        let distance = Math.floor(this.data.tank.maxSize / this.data.fuelConsumption * 100);

        console.log(`${this.data.brand} can travel maximum ${distance} km`);
    }


    canTravel(km) {
        let distance = Math.floor(this.data.tank.currentSize / this.data.fuelConsumption * 100);
        if (km > distance) {
            console.log(`${this.data.brand} can't travel ${km} km, it has fuel only for ${distance} km.`);
        }
        else {
            console.log(`${this.data.brand} can travel ${km} km.`);
        }

    }

    continueTravel(km) {
        let distance = Math.floor(this.data.tank.currentSize / this.data.fuelConsumption * 100);
        let price = ((km - distance) / 100 * this.data.fuelCostPerLitre * this.data.fuelConsumption).toFixed(2);
        if (km < distance) {
            console.log(`${this.data.brand} can travel ${km} km, no extra fuel is needed.`);
        }

        else {
            console.log(`${this.data.brand} can't travel ${km} km, you need ${price} Euros for extra fuel.`);
        }
    }
}

module.exports = Car;