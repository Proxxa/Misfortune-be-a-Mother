const images = {};
const fonts = {};
// let _loadImage;

/**
 * A collection of asset loaders.
 */
const Assets = {
    /**
     * Sets up the asset loaders.
     * @param {Function} loadImageFunction The `loadimage` function 
     */
    setup: function(loadImageFunction) {
        _loadImage = loadImageFunction;
    },

    /**
     * Loads an image into a specified ID
     * @param {String} path The path to the image 
     * @param {String} id The id to store the image with
     */
    loadImage: function(path, id) {
        images[id] = loadImage(path);
    },

    /**
     * Loads a font file
     * @param {String} path The path to the font
     * @param {String} id The id to store the font with
     */
    loadFont: function(path, id) {
        fonts[id] = loadFont(path);
    },

    /**
     * Loads all assets
     */
    loadAll: function() {
        for (const id of [
            "logo", "play_button", "spin_board", "spin_button"
        ]) {
            images[id] = loadImage(`./assets/${id}.png`);
        }
        this.loadFont("./assets/04b03.ttf", "bit");
    },

    getImage: function(id) {
        return images[id];
    }
};

Object.freeze(Assets);
