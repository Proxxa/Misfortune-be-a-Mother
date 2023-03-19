class MainMenu extends Screen {
    constructor() {
        super("main_menu");
        this.create_object(MainMenuLogo);
        this.create_object(AnchoredImageButton, windowWidth, images['logo'].height, 1, -0.1, 'play_button', () => {
            alert("You think I've made this yet? lmao");
        })
    }
}

