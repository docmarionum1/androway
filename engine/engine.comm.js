/**
 * CommunicationsHandler
 * 
 * Maintains connection with server, constantly updateing its gamestate
 * 
 * @function	public		initialize              -	Initializes the communications with APE-server
 * @function    public      HandleRaw               -   Handles the input from the server
 */
var CommunicationsHandler = new Class({
    settings: {
        name: ""
    },
    ape: {
        client: null,
        ready: false,
        pipe: null,
        options: null,
        connected: false
    },
    initialize: function(){
        this.ape.client = new APE.Client();
        
        this.ape.client.load();
        
        this.ape.client.addEvent('load', function(){
            this.ape.client.core.start({"name": this.settings.name});
        });
        
        this.ape.client.addEvent('ready', function(){
            this.ape.ready = true;
            
            this.ape.client.core.join('andro-engine');
            
            this.ape.client.addEvent('multiPipeCreate', function(pipe, options){
                this.ape.pipe = pipe;
                this.ape.options = options;
                
                this.ape.connected = true;
            });
        });
        
        this.ape.client.onRaw('data', HandleRaw(raw, pipe));
    },
    HandleRaw: function(raw, pipe){
        
    }
    Send: function(message){
        
    }
});
