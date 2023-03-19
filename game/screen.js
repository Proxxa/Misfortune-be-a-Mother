let screens = {};
let screen;

class Screen {
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
            if (this.debug_mode) o.debug_rect();
        }
    }

    attempt_click() {
        for (const o of this.#screenObjects) {
            if (o.collide_AABB(mouseX, mouseY)) o.on_click()
        }
    }

    create_object(clz, ...params) {
        this.#screenObjects.push(new clz(...params));
    }
}

class ScreenManager {
    static set_screen(s) {
        screen=screens[s];
    }
}