/**
*
* Object
*
* In game objects.  Anything that has a location in the enviorment.
*
* @function     public      initialize      Creates an object with location and size
* @function     public      UpdateBoundingBox       Updates the locations of the bounding box sides
* @function     public      SetPos      Sets the object's position to the given coordinates
* @function     public      MovePos     Moves the object from the current position to a new one by the given distances
* @function     public      Collide     Checks whether a given object is colliding with this object
*/

var Object = new Class({
    location: {
        x: 0,
        y: 0
    },
    size: {
        width: 0,
        height: 0
    },
    speed: {
        x: 0,
        y: 0
    },
    boundingBox: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
    initialize: function(x, y, w, h, sx, sy){
        this.location.x = x;
        this.location.y = y;
        this.size.width = w;
        this.size.height = h;
        this.speed.x = sx;
        this.speed.y = sy;
        this.boundingBox.top = y;
        this.boundingBox.left = x;
        this.boundingBox.right = x + w;
        this.boundingBox.bottom = y + h;
    },
    UpdateBoundingBox: function(){
        this.boundingBox.top = location.y;
        this.boundingBox.bottom = location.y + size.height;
        this.boundingBox.left = location.x;
        this.boundingBox.right = location.x + size.width;
    }
    SetPos: function(x, y){
        this.location.x = x;
        this.location.y = y;
        
        this.UpdateBoundingBox();
    },
    MovePos: function(x, y){
        this.location.x += x;
        this.location.y += y;
        
        this.UpdateBoundingBox();
    },
    Collide: function(o){
        if (o.boundingBox.bottom < this.boundingBox.top || o.boundingBox.top > this.boundingBox.bottom || o.boundingBox.right < this.boundingBox.left || o.boundingBox.left > this.boundingBox.right)
            return false;
        return true;
        
        //Only primiary rectangular collision is checked there, secondary detection with bubbles or pixels can also be implemented.
    }
});

/*
*To Do: Extend Object to a visible object which holds an array of images.
*/