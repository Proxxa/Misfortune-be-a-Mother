class ScreenObject {
    #x;
    #y;
    #width;
    #height;
    constructor(x, y, width, height) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
    }

    collide_AABB(ptX, ptY) {
        return ptX > this.x && ptX < this.x+this.width && ptY > this.y && ptY < this.y+this.width;
    }

    on_click() {
        return;
    }

    draw() {
        return;
    }

    get x() {return this.#x;}
    set x(_x) {this.#x = x;}
    get y() {return this.#y;}
    set y(_y) {this.#y = _y;}
    get width() {return this.#width;}
    get height() {return this.#height;}
}

class Button extends ScreenObject {
    #callback;
    constructor(a,b,c,d, click_callback) {
        super(a,b,c,d);
        this.#callback = click_callback;
    }

    on_click() {
        this.#callback();
    }
}

class ImageObject extends ScreenObject {
    #image;
    constructor(a,b,image) {
        super(a,b,0,0);
        this.#image = image;
    }

    get image() {
        return this.#image;
    }

    draw() {
        Drawing.image(this.image, this.x, this.y);
    }
}

class AnchoredImage extends ImageObject {
    #uvx;
    #uvy;
    constructor(a,b,uvx,uvy,c) {
        super(a,b,c);
        this.#uvx = uvx;
        this.#uvy = uvy;
    }

    draw() {
        Drawing.image_anchored(this.image, this.x, this.y, this.#uvx, this.#uvy);
    }
}

class ImageButton extends Button {
    #image;
    constructor(a,b,image,callback) {
        super(a,b,0,0,callback);
        this.#image = image;
    }

    get image() {
        return this.#image;
    }

    get width() {
        return images[this.image].width;        
    }

    get height() {
        return images[this.image].height;        
    }

    collide_AABB(ptX, ptY) {
        return ptX > this.x && ptX < this.x+this.width && ptY > this.y && ptY < this.y+this.width;
    }

    draw() {
        Drawing.image(this.image, this.x, this.y);
    }
}

class AnchoredImageButton extends ImageButton {
    #anchorX;
    #anchorY;
    constructor(a,b,uvx,uvy,image,callback) {
        super(a,b,image,callback);
        this.#anchorX=uvx;
        this.#anchorY=uvy;
    }

    collide_AABB(ptX, ptY) {
        return ptX > this.x - (this.width * this.#anchorX * 1) && 
            ptX < this.x+this.width - (this.width * this.#anchorX * 1) && 
            ptY > this.y - (this.height * this.#anchorY * 1) &&
            ptY < this.y+this.height - (this.height * this.#anchorY * 1);
    }

    draw() {
        Drawing.image_anchored(this.image, this.x, this.y, this.#anchorX, this.#anchorY);
    }
}

class ScreenText extends ScreenObject {
    #text;
    #font;
    #fontsize;
    #color;
    #stroke;
    #strokewt;
    /**
     * 
     * @param {Number} x X position of text box
     * @param {Number} y Y position of text box
     * @param {Number} width Width of text box
     * @param {Number} height Height of text box
     * @param {String|Function} text The text to be displayed
     * @param {Number} fontsize The size of the text
     * @param {*} color The color of the text
     * @param {*} stroke The color of the text outline
     * @param {Number} strokewt The weight of the text outline
     */
    constructor(x,y,width,height,text,font,fontsize,color,stroke=0,strokewt=0) {
        super(x,y,width,height);
        this.#text=text;
        this.#font=font;
        this.#fontsize=fontsize;
        this.#color=color;
        this.#stroke=stroke;
        this.#strokewt=strokewt;
    }
    get text() {return this.#text;}
    get font() {return this.#font;}
    get fontsize() {return this.#fontsize;}
    get color() {return this.#color;}
    get stroke() {return this.#stroke;}
    get strokewt() {return this.#strokewt;}
    draw() {
        Drawing.text(typeof this.#text == "function" ? this.#text() : this.#text, this.#font, this.#fontsize, this.#color, this.#stroke, this.#strokewt, this.x, this.y, this.width, this.height);
    }
}