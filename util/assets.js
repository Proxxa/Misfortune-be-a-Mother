const images = {};

let _loadImage;

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
        images[id] = _loadImage(path);
    },

    /**
     * Loads a set of in-built images
     */
    loadAll: function() {
        for (const id of [
            "logo", "play_button", "spin_board", "spin_button"
        ]) {
            images[id] = _loadImage(`./assets/${id}.png`);
        }
    }
}

Object.freeze(Assets);
