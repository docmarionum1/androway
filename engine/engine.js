/**
 * Engine
 * 
 * The game-engine's core
 * 
 * @function	public		initialize              -	Initializes the engine
 * @function	public		PickMultiThreadMethod	-	Picks wether Google Gears needs to be used, or Workers
 * @function	public		CreateThreads   		-	Creates the threads, and sets up communications
 * @function	public		InitCanvas		        -	Grabs the canvas element from the page and creates a 2d context.
 */
var Engine = new Class({
    settings: {
        useGears: false,
        useWorkers: false
    },
    threads: {
        comm: {
            thread: null,
            id: 0
        },
        AI: {
            thread: null,
            id: 0
        },
        graphics: {
            thread: null,
            id: 0
        },
        sound: {
            thread: null,
            id: 0
        },
        input: {
            thread: null,
            id: 0
        }
    },
    canvas: {
        canvasElement: null,
        context: null
    },
    initialize: function(){
        if(!this.PickMultiThreadMethod()) return false;
        
        this.CreateThreads();
	    
        if (!this.initCanvas()) return false;
    },
    PickMultiThreadMethod: function(){
        if(Worker){
            this.settings.useWorkers = true;
            this.settings.useGears = false;
            
            return true;
        }
        else{
            if(!window.google || !google.gears){
                this.settings.useWorkers = false;
                this.settings.useGears = false;
                
                return false;
            }
            else{
                this.settings.useGears = true;
                this.settings.useWorkers = false;
                
                return true;
            }
        }
    },
    CreateThreads: function(){
        if(this.settings.useWorkers){
            //Create communications thread
            this.threads.comm.thread = new Worker("engine/engine.comm.js");
            
            this.threads.comm.thread.onmessage = function(message){
                
            }
            
            //Create Artificial Intelligence thread
            this.threads.AI.thread = new Worker("engine/engine.AI.js");
            
            this.threads.AI.thread.onmessage = function(message){
                
            }
            
            //Create Graphics thread
            this.threads.graphics.thread = new Worker("engine/engine.graphics.js");
            
            this.threads.graphics.thread.onmessage = function(message){
                
            }
            
            //Create Sound thread
            this.threads.sound.thread = new Worker("engine/engine.sound.js");
            
            this.threads.sound.thread.onmessage = function(message){
                
            }
            
            //Create Input thread
            this.threads.input.thread = new InputHandler();
            
            this.threads.input.thread.onmessage = function(message){
                
            }
            
            return true;
        }
        if(this.settings.useGears){
            //Create communications worker
            this.threads.comm.thread = google.gears.factory.create('beta.workerpool');
            
            this.threads.comm.thread.onmessage = function(message){
                
            }
            
            this.threads.comm.id = this.threads.comm.thread.createWorkerFromUrl("engine/engine.comm.js");
            
            //Create Artificial Intelligence thread
            this.threads.AI.thread = google.gears.factory.create('beta.workerpool');
            
            this.threads.AI.thread.onmessage = function(message){
                
            }
            
            this.threads.AI.id = this.threads.AI.thread.createWorkerFromUrl("engine/engine.AI.js"); 
            
            //Create Graphics thread
            this.threads.graphics.thread = google.gears.factory.create('beta.workerpool');
            
            this.threads.graphics.thread.onmessage = function(message){
                
            }
            
            this.threads.graphics.id = this.threads.graphics.thread.createWorkerFromUrl("engine/engine.graphics.js");
            
            //Create Sound thread
            this.threads.sound.thread = google.gears.factory.create('beta.workerpool');
            
            this.threads.sound.thread.onmessage = function(message){
                
            }
            
            this.threads.sound.id = this.threads.sound.thread.createWorkerFromUrl("engine/engine.sound.js");
            
            //Create Input thread
            this.threads.input.thread = new InputHandler();
            
            this.threads.input.thread.onmessage = function(message){
                
            }
            
            return true;
        }
    },
    InitCanvas: function(){
        this.canvas.canvasElement = $('canvas');
        
        if(this.canvas.canvasElement && this.canvas.canvasElement.getContext){
            this.canvas.context = this.canvas.canvasElement.getContext('2d');
            if(this.canvas.context) return true;
        }
        return false;
    }
});
