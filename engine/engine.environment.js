/**
*
* Environment
*
* @function     public      initialize    create an environment
* @function     public      Draw        Draws all objects in the environment
*
*/

var Environment = new Class({
    size: {
        width: 0,
        height: 0
    },
    objects: null,
    background: null,
    initialize: function(w, h, b){
        this.size.width = w;
        this.size.height = h;
        this.objects = new Array();
        this.background =  b;
    },
    Draw: function(){
        this.objects.each(function(item){ if (item.visible){ item.Draw(); }});
    },
    DrawScreen: function(s){
        if (this.background){
            this.background.Draw(-s.pos.x, -s.pos.y);
        }
        this.objects.each(function(item){ if (item.visible){ item.Draw(-s.pos.x, -s.pos.y); }});
    }
});