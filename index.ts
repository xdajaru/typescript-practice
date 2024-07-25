/// <reference types="@types/google.maps" />
class Vehicle {
    
    constructor(public color: string = 'foo') { }
    protected honk(): void {
        console.log('tin tinnn')
    }
}

class Car extends Vehicle {

    constructor(public year: number, color: string = 'red') {
        super();
    }

    private drive(): void {
        console.log('Ngeeng')
    }

    public drivingProcess(): void {
        this.drive();
        this.honk();
        console.log(this.year);
        console.log(this.color);
    }


}

const car = new Car(1946);

car.drivingProcess();