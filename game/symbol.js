"use strict";

class UnimplementedError extends Error {
    constructor(methodName, clz) {
        super(`method '${methodName}' is not implemented on class '${clz.name}' yet`);
    }

    get name() {
        return "UnimplementedError";
    }
}
class GameSymbol {
    #image;
    constructor(img, id) {
        this.#image = img;
    }

    get image() {
        return this.#image;
    }

    static get id() {
        throw new UnimplementedError("id", this);
    }

    on_activate(position) { return; }
    coin_return() { return; }
    draw(x, y) { return; }
}

class None extends GameSymbol {
    #coinCount;
    constructor() {
        super("");
    }

    on_activate(position) {
        this.#coinCount = Game.get_item_count("corrective_fluid");
    }

    coin_return() {
        return this.#coinCount;
    }

    static get id() {
        return "None";
    }
}

class Cat extends GameSymbol {
    constructor() {
        super("symbol/cat");
    }

    on_activate(position) {
        let coinCount = 1;
        if (Game.has_item("catnip")) ++coinCount;
        Game.give_coins(coinCount);
    }

    static get id() {
        return "Cat";
    }

    draw(x, y) {
        Drawing.image_anchored();
    }
}
