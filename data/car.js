class Car {
    constructor (cars) {
        this.model = cars.model;
        this.brand = cars.brand;
        this.speed = 0;
        this.isTrunkOpen = false;
    }

    displayInfo () {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.brand}: ${this.model}: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    };

    go () {
        if(!this.isTrunkOpen){
            this.speed += 5;
        }

        if(this.speed > 200){
            this.speed = 200;
        }
    };

    brake() {
        this.speed -= 5;
        if(this.speed < 0){
            this.speed = 0;
        }
    };

    openTrunk() {
        if(this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }

}

class RaceCar extends Car{
    constructor(details) {
        super(details);
        this.accelaration = details.accelaration;
    }

    displayInfo () {

        console.log(`${this.brand}: ${this.model}: ${this.speed} km/h`);
    };


    go() {
        this.speed += this.accelaration;

        if(this.speed > 300){
            this.speed = 300;
        }
    }

    openTrunk(){
        console.log('Race cars dont have trunk')
    }

    closeTrunk() {
        console.log('Race cars dont have trunk')
    }
}

export const cars  = [
    {
        brand: 'Toyota',
        model: 'Corolla',
    },

    {
        brand: 'Tesla',
        model: 'Model3',
    },

    {
        brand: 'Tata',
        model: 'Punch',
    }
].map(details => new Car(details));

export const raceCars  = [
    {
        brand: 'Maclaren',
        model: 'F1',
        accelaration: 15,
    },

    {
        brand: 'Lambo',
        model: 'I4',
        accelaration: 25,
    }
].map(details => new RaceCar(details));


console.log(cars);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
cars.forEach(car => car.displayInfo());

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

cars[0].go();
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].displayInfo();

cars[0].brake();
cars[0].displayInfo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

cars[2].brake();
cars[2].displayInfo();

cars[2].go();
cars[2].go();
cars[2].go();
cars[2].go();
cars[2].displayInfo();
cars[2].brake();
cars[2].brake();
cars[2].brake();
cars[2].brake();
cars[2].displayInfo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


cars[0].openTrunk(); //yaha pe speed !=== 0, isiliye trunck closed  
cars[0].displayInfo();

cars[2].openTrunk(); //yaha pe speed === 0, isiliye trunck open  
cars[2].displayInfo();

cars[1].openTrunk();
cars[1].displayInfo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

cars[1].openTrunk();
cars[1].go();  //car ka trunk khula hua hai isiliye ye nahi move karega i.e. speed = 0.
cars[1].displayInfo();

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++');

console.log(raceCars);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
raceCars.forEach(car => car.displayInfo());

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

raceCars[0].go();
raceCars[0].go();
raceCars[0].go();
raceCars[0].go();
raceCars[0].displayInfo();

raceCars[0].brake();
raceCars[0].displayInfo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


raceCars[0].openTrunk();
raceCars[0].displayInfo();

raceCars[1].openTrunk();
raceCars[1].displayInfo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

raceCars[1].openTrunk();
raceCars[1].go();
raceCars[1].displayInfo();

// cars[0].model = 'hds';
// cars[0].displayInfo();
