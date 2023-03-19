const require = function(path) {
    const element = document.createElement("script");
    element.src = path;
    document.head.append(element);
}

function preload() {
    require("util/drawing.js")
    require("game/screen.js")
    require("game/screen_object.js")
    require("game/screen_classes.js")
    Assets.setup(loadImage);
    Assets.loadImage('assets/ui/logo.png', 'logo');
    Assets.loadImage('assets/ui/play_button.png', 'play_button');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    aspect = windowWidth / windowHeight;
    background(0);
    new MainMenu();
    ScreenManager.set_screen("main_menu")
}


function draw() {
    background(0);
    screen.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    aspect = windowWidth / windowHeight;
    let values = Object.values(screens);
    for (const s of values) {
        new s.constructor();
    }
    ScreenManager.set_screen(screen.id);
}

function mouseClicked() {
    screen.attempt_click();
}