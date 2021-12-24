class Transport {
    constructor(name, color, model, engline, number) {
        this.name = name;
        this.color = color;
        this.model =  model;
        this.engline = engline;
        this.number = number;
    }

    startEngine(){
        console.log('Engine on ${this.name} STARTED')
    }

    lightOn(){
        console.log('Light ON ${this.name}')
    }

    LightOff(){
        console.log('Light OFF ${this.name}')
    }
}
const bmw = new Transport("BMW", "black", "ë38", "v12 5.4", "555 BMW")
console.log(bmw);
bmw.startEngline();
bmw.lightOn();

const toyota = new Transport ("TOYOTA", "whate", "camry 75", "v6 3.5", "777 TOP")
console.log(toyota); 
toyota.startEngine()
toyota.lightOn()
