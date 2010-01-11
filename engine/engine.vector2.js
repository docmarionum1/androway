/**
*
*Vector2
*
* 2D Vector.  A wrapper for x,y coordinates, magnitudes or any other set of two numbers
*
* @function     public      initialize      Create the vector
* @function     public      Add     add another vector to this one or a set of two numbers
* @function     public      Sub     subtract another vector from this one or a set of 2 numbers
* @function     public      Scale       scale x and y by a and b, respectively.  
*/

var Vector2 = new Class({
    x: 0,
    y: 0,
    initialize: function(a, b){
        this.x = a;
        this.y = b;
    },
    Add: function(){
        if (arguments[0] instanceof Vector2){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        } else {
            this.x += arguments[0];
            this.y += arguments[1];
        }        
    },
    Sub: function(){
        if (arguments[0] instanceof Vector2){
            this.x -= arguments[0].x;
            this.y -= arguments[0].y;
        } else {
            this.x -= arguments[0];
            this.y -= arguments[1];
        }        
    },
    Scale: function(a, b){
        this.x *= a;
        this.y *= b;
    }
});