class MainMenu extends Screen {
    constructor() {
        console.log("ok");
        super("main_menu");
        this.create_object(MainMenuLogo);
        this.create_object(AnchoredImageButton, windowWidth, images['logo'].height, 1, -0.1, 'play_button', () => {
            ScreenManager.set_screen("game_menu");
        })
    }
}


class GameMenu extends Screen {
    constructor() {
        super("game_menu");
        this.create_object(AnchoredImageButton, windowWidth * 0.5, windowHeight, 0.5, 1, 'spin_button', () => {
            alert("Spinner!");
        })
        this.create_object(AnchoredImage, windowWidth * 0.5, windowHeight * 0.01, 0.5, 0, 'spin_board');
    }
}
