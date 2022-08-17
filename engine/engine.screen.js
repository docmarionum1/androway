/**
*
* Screen
*
* @function     public      initialize      Create a screen
* @function     public      MovePos     Moves the screen by distances x and y
*
*/

var Screen = new Class({
    pos: null,
    size: {
        width: 0,
        height: 0
    },
    initialize: function(p, w, h){
        this.pos = p;
        this.size.width = w;
        this.size.height = h;
    },
    MovePos: function(x, y){
        this.pos.x += x;
        this.pos.y += y;
    }
});