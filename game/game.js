class PrivateConstructorError extends Error {
    constructor(clz) {
        super(`Constructor of ${clz.constructor.name} is private`);
        this.name = "PrivateConstructorError";
    }
}

class Game {
    static #constructorKey = Math.random();
    static #instance;
    #symbols = new Array(20).fill(new None(), 5);
    #board = new Array(20);
    #items = {};
    #coins = 1;
    constructor(key) {
        if (key != this.constructor.#constructorKey) throw new PrivateConstructorError(Game);
        this.#symbols[0] = new Cat();
    }

    static get money() {
        return this.#instance.#coins;
    } 

    static draw() {
        let board_image = Assets.getImage("spin_board");
        for (item in this.#instance.#board) {
            this.#instance.#board[item].draw((item%5) * board_image.width + ((0.5 * windowWidth) - (0.5 * board_image.width)), Math.floor(item/5) * board_image.height);
        }
    }

    static create() {
        return (this.#instance = new Game(this.#constructorKey));
    }

    static has_item(id) {
        return id in this.#instance.#items;
    }

    static get_item_count(id) {
        return this.#instance.#items[id] ?? 0;
    }
}