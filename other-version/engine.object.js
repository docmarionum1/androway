/**
*
* Object
*
* In game objects.  Anything that has a location in the enviorment.
*
* @function     public      initialize      Creates an object with location and size
* @function     public      UpdateBoundingBox       Updates the locations of the bounding box sides
* @function     public      MovePos     Moves the object from the current position to a new one by the given distances
* @function     public      SetPos      Sets the object's position to the given coordinates
* @function     public      Collide     Checks whether a given object is colliding with this object
* @function     public      Rotate      Rotates the object around it's center
*/

var GObject = new Class({
    corners: null,
    center: null,
    size: {
        width: 0,
        height: 0
    },
    speed: null,
    boundingBox: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    rotation: 0,
    initialize: function(x, y, w, h, sx, sy, r){
        this.size.width = w;
        this.size.height = h;
        this.center = new Vector2((x + (w/2)), (y + (h/2)));
        this.corners = new Array(new Vector2(x,y), new Vector2(x + w, y), new Vector2(x + w, y + h), new Vector2(x, y + h));
        this.speed = new Vector2(sx, sy);
        this.boundingBox.top = y;
        this.boundingBox.left = x;
        this.boundingBox.right = x + w;
        this.boundingBox.bottom = y + h;
        this.rotation = r;
    },
    UpdateBoundingBox: function(){
        if ((this.rotation % 360) != 0){
            var tempTop = this.center.y;
            var tempBottom = this.center.y;
            var tempRight = this.center.x;
            var tempLeft = this.center.x;
            
            for (var i = 0; i < 4; i++){
                if (this.corners[i].y < tempTop)
                    tempTop = this.corners[i].y;
                else if (this.corners[i].y > tempBottom)
                    tempBottom = this.corners[i].y;
                if (this.corners[i].x < tempLeft)
                    tempLeft = this.corners[i].x;
                else if (this.corners[i].x > tempRight)
                    tempRight = this.corners[i].x;
            }

            this.boundingBox.top = tempTop;
            this.boundingBox.bottom = tempBottom;
            this.boundingBox.right = tempRight;
            this.boundingBox.left = tempLeft;
        }
        
        this.boundingBox.top = this.corners[0].y;
        this.boundingBox.bottom = this.corners[0].y + this.size.height;
        this.boundingBox.left = this.corners[0].x;
        this.boundingBox.right = this.corners[0].x + this.size.width;
    },
    MovePos: function(x, y){
        for (var i = 0; i < 4; i++){
            this.corners[i].x += x;
            this.corners[i].y += y;
        }
        
        this.center.x += x;
        this.center.y += y;
        
        this.UpdateBoundingBox();
    },
    SetPos: function(x, y){
        this.movePos(x - this.corners[0].x, y - this.corners[0].y);
    },
    Collide: function(o){
        if (o.boundingBox.bottom < this.boundingBox.top || o.boundingBox.top > this.boundingBox.bottom || o.boundingBox.right < this.boundingBox.left || o.boundingBox.left > this.boundingBox.right)
            return false;
        return true;
        
        //Only primiary rectangular collision is checked there, secondary detection with bubbles or pixels can also be implemented.
    },
    Rotate: function(r){
        this.rotation += r;
        var temp = new Vector2(0,0);
        for (var i = 0; i < 4; i++){
            temp.x = corners[i].x;
            temp.y = corners[i].y;
            this.corners[i].x = this.center.x + ((Math.cos(r * Math.PI/180) * (temp.x - this.center.x)) - (Math.sin(r * Math.PI/180) * (temp.y - this.center.y)));
            this.corners[i].y = this.center.y + ((Math.cos(r * Math.PI/180) * (temp.y - this.center.y)) + (Math.sin(r * Math.PI/180) * (temp.x - this.center.x)));
        }

        this.UpdateBoundingBox();
    }
});

/**
*
* Visible Object
*
* @function     public      initialize      Create a visible object
* @function     public      Draw        Draw the object to the canvas
*/

var VisibleObject = new Class({
    Extends: GObject,
    context: null,
    sprites: null,
    currentSprite: 0,
    initialize: function(x, y, w, h, sx, sy, r, a, c){
        this.parent(x, y, w, h, sx, sy, r);
        this.context = c;
        this.sprites = new Array(a.length);
        a.each(function(item, index){ this.sprites[index] = new Element('img', { 'src' : item }); }, this);
    },
    Draw: function(){
        this.context.save();
        this.context.translate(this.center.x, this.center.y);
        this.context.rotate((this.rotation * Math.PI/180));
        this.context.drawImage(this.sprites[this.currentSprite], -this.size.width/2, -this.size.height/2);
        this.context.restore();
    }
});

/*
*To Do: Extend Object to a visible object which holds an array of images.
*/