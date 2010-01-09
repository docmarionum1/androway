/**
 * Engine
 * 
 * The game-engine's core
 * 
 * @function	public		initialize		-	Initializes the engine
 * @function	public		PickMultiThreadMethod	-	Picks wether Google Gears needs to be used, or Workers
 * @function	public		CreateThreads		-	Creates the threads, and sets up communications
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
    }
  },
  initialize: function(){
    if(!this.PickMultiThreadMethod()) return false;
    
    this.CreateThreads();
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
      //Create communications worker
      this.threads.comm.thread = new Worker("engine/engine.comm.js");
      
      this.threads.comm.thread.onmessage = function(message){
        
      }
      
      //Create Artificial Intelligence thread
      this.threads.AI.thread = new Worker("engine/engine.AI.js");
      
      this.threads.AI.thread.onmessage = function(message){
        
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
      
      return true;
    }
  }
}