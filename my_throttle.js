Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    
    return() => {
        if (tooSoon === false) { 
            tooSoon = true;

            setTimeout(() => {
                tooSoon = false;
            }, interval);

            this();
        }
    }
}

// class Neuron {
//     fire() {
//         console.log("Firing!");
//     }
// }

// const neuron = new Neuron();

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// clearInterval(interval);

// neuron.fire = neuron.fire.myThrottle(500);

class Neuron {
    constructor() {
        this.fire = this.fire.myThrottle(500);
    }
    
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();

const interval = setInterval(() => {
    neuron.fire();
}, 10);