const _image = image;

/**
 * A collection of drawing utilities.
 */
const Drawing = {
    /**
     * Draw an image to the screen.
     * @param {String} image The ID of the image 
     * @param {Number} x The X-position of the image
     * @param {Number} y The Y-position of the image
     * @param {Number} w The width of the image
     * @param {Number} h The height of the image
     */
    image: function(image, x, y, w, h) {
        let im = images[image];
        _image(im, x, y, w ?? im.width, h ?? im.height)
    },

    image_anchored: function(image, x, y, uvx, uvy, w, h) {
        let im = images[image]
        _image(im, x - (im.width * uvx * 1.05), y - (im.height * uvy * 1.05), w ?? im.width, h ?? im.height);
    }
};

Object.freeze(Drawing);