var Sound = new Class({
    src: null,
    element: null,
    label: null,
    initialize: function(src, label){
        this.src = src;
        this.label = label;
        
        this.element = new Element('audio', {
            'src': this.src,
            'id': label});
        
        document.getElementsByTagName('body')[0].appendChild(this.element);
        
        this.element.load();
    },
    Play: function(){
        this.element.play();
    },
    Stop: function(){
        this.element.pause();
    }
});
