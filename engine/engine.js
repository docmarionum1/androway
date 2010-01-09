/**
 * Engine
 * 
 * The game-engine's core
 * 
 * @function	public		initialize		-	Initializes the engine
 * @
 */
var Engine = new Class({
  settings: {
    useGears: false,
    useWorkers: false
  },
  initialize: function(){
    if(!this.PickMultiThreadMethod()) return false;
    
    
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
  }
}