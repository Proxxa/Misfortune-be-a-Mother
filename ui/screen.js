let screens = {};
let current_screen;

class GameScreen {
    #screenObjects = [];
    debug_mode = false;
    #id;
    constructor(id) {
        screens[id] = this;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    draw() {
        for (const o of this.#screenObjects) {
            o.draw();
        }
    }

    attempt_click() {
        for (const o of this.#screenObjects) {
            if (o.collide_AABB(mouseX, mouseY)) o.on_click();
        }
    }

    create_object(clz, ...params) {
        this.#screenObjects.push(new clz(...params));
    }
}

class ScreenManager {
    static set_screen(s) {
        current_screen=screens[s];
    }
}