/**
*
*Vector2
*
* 2D Vector.  A wrapper for x,y coordinates, magnitudes or any other set of two numbers
*
* @function     public      initialize      Create the vector
* @function     public      Add     add another vector to this one
* @function     public      Add     add raw numbers to x and y
* @function     public      Sub     subtract another vector from this one
* @function     public      Sub     subtract raw numbers from x and y
* @function     public      Scale       scale x and y by a and b, respectively.  
*/

var Vector = new Class({
    x: 0,
    y: 0,
    initialize: function(a, b){
        x = a;
        y = b;
    },
    Add: function(v){
        x += v.x;
        y += v.y;
    },
    Add: function(a, b){
        x += a;
        y += b;
    },
    Sub: function(v){
        x -= v.x;
        y -= v.y;
    },
    Sub: function(a, b){
        x -= a;
        y -= b;
    },
    Scale: function(a, b){
        x *= a;
        y *= b;
    }
});