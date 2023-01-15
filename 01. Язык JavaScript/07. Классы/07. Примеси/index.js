console.log('Примеси');

const sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

const sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Привет, ${this.name}`)
    },
    sayBye() {
        super.say(`Пока, ${this.name}`)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin)

new User('Bob').sayHi()

console.log('');
console.log('EventMixin');

const eveentMixin = {
    on(name, handler) {
        if(!this._eventHandlers) this._eventHandlers = {};
        if(!this._eventHandlers[name]) this._eventHandlers[name] = [];
        this._eventHandlers[name].push(handler);
    },

    off(name, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[name];
        if(!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if(handlers[i] == handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(name, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[name]) return
        this._eventHandlers[name].forEach(handler => handler.apply(this, args))
    },
}

class Menu {
    choose(value) {
        this.trigger('select', value)
    }
}

let menu = new Menu();

Object.assign(Menu.prototype, eveentMixin);

menu.on('select', value => console.log(`Выбранное значение: ${value}`));

menu.choose(214)