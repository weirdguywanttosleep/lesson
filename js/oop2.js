// Абстрактный класс
class Transport {
    constructor(type, name, model){
        this.type = type;
        this.name = name;
        this.model = model;
    }

    brake(){
        console.log('brake ON ${this.name}')
    }
}

class Car extends Trancport {
    constructor(type, name, model, engine){
        super(type, name, model);

        this.engine = engine;
    }
}

const bmw = new Car("Car", "BMW", "e38", "v12 5.4");
console.log(bmw)
bmw.brake()
 