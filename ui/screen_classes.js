class MainMenu extends GameScreen {
    constructor() {
        super("main_menu");
        this.create_object(AnchoredImage, windowWidth, 0, 1, 0, "logo");
        this.create_object(AnchoredImageButton, windowWidth, images["logo"].height, 1, -0.1, "play_button", () => {
            ScreenManager.set_screen("game_menu");
        });
    }
}


class GameMenu extends GameScreen {
    constructor() {
        super("game_menu");
        this.create_object(AnchoredImageButton, windowWidth * 0.5, windowHeight, 0.5, 1, "spin_button", () => {
            alert("Spinner!");
        });
        this.create_object(AnchoredImage, windowWidth * 0.5, windowHeight * 0.01, 0.5, 0, "spin_board");
        this.create_object(ScreenText, windowWidth * 0.001, windowHeight * 0.99, 30, 75, () => 
            String(Game.money >= 1e5 
                ? (()=>{let a = Game.money.toExponential().match(/(^\d(\.\d{0,3})?)+\d*e\+(\d+)/); return String(a[1]) + "e" + String(a[3]);})()
                : Game.money)
            
        , "bit", 60, "yellow");
    }
}
