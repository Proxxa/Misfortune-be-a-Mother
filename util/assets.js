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
    }
}

Object.freeze(Assets);
