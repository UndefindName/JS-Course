console.log('Приватные и защищённые методы и св-ва');
console.log('Внутренний и внешний интерфейсы');

class CoffeMachine {
    #waterLimit = 200;
    _waterAmount = 0;

    #checkWater(val) {
        if (val < 0) throw new Error('Отрицательный уровень воды');
        if (val > this.#waterLimit) throw new Error('Слишком много воды');
    }

    getWaterAmount() {
        return this._waterAmount
    }

    setWaterAmount(num) {
        this.#checkWater(num)
        this._waterAmount = num;
    }

    constructor(power) {
        this._power = power;
        console.log(`Создана кофеварка, мощностью: ${power}`)
    }

    getPower() {
        return this._power;
    }
}

let coffeMachine = new CoffeMachine(100);

coffeMachine.setWaterAmount(100);
console.log(coffeMachine.getWaterAmount());