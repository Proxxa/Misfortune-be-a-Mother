const require = function(path) {
    const element = document.createElement("script");
    element.src = path;
    document.head.append(element);
};

function preload() {
    require("util/drawing.js");
    require("ui/screen.js");
    require("ui/screen_object.js");
    require("ui/screen_classes.js");
    require("game/game.js");
    require("game/symbol.js");
    Assets.setup(loadImage);
    Assets.loadAll();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    aspect = windowWidth / windowHeight;
    background(0);
    new MainMenu();
    new GameMenu();
    Game.create();
    ScreenManager.set_screen("main_menu");
}


function draw() {
    background(0);
    current_screen.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    aspect = windowWidth / windowHeight;
    let values = Object.values(screens);
    for (const s of values) {
        new s.constructor();
    }
    ScreenManager.set_screen(current_screen.id);
}

function mouseClicked() {
    current_screen.attempt_click();
}