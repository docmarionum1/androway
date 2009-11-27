/**
 * Engine::Core::Graphics::TextureManager
 * 
 * LICENSE
 * 
 * This source file is subject to the GPL license that is bundled
 * with this package in the file LICENSE
 * 
 * @package     androway
 * @copyright   Copyright (c) 2009, DaveC
 * @license     http://www.gnu.org/licenses/gpl.txt GPL
 */

/**
 * A class that manages all textures, and provides an interface to them
 * 
 * @author      DaveC <admin@excurion.nl>
 * @version     0.1 2009-11-27
 */
var TextureManager = new function(){
    /**
     * All the current textures
     * @var array
     */
    this.Textures = new Array();
    /**
     * The canvas to draw on
     * @var object
     */
    this.ctx;
    
    /**
     * Adds a texture to the texture-array
     * 
     * @param string/object src - The source from where to get the image, can be a http(s)-url, a data-url or an existing image object
     * @return void
     */
    this.addTexture = function(src){
        var id = this.Textures.length;
        var newTexture = new Texture;
        
        newTexture.id = id;
        newTexture.src = src;
        newTexture.load();
        
        this.Textures[id] = newTexture;
    }
    
    /**
     * Deletes a texture from the texture-array
     * 
     * @param int id - The id of the texture that needs deletion
     * @return bool - Returns false when the image hadn't even been loaded yet
     */
    this.deleteTexture = function(id){
        if(this.Textures[id].imageLoaded === true){
            this.Textures[id].image = null;
            this.Textures[id].src = null;
            this.Textures[id].imageLoaded = false;
            this.Textures[id].drawReady = false;
            
            return true;
        }
        else{
            return false;
        }
    }
    
    /**
     * Deletes all textures from the texture-array
     * 
     * @return void
     */
    this.deleteAllTextures = function(){
        for(var i = 0; i < Textures.length; i++){
            this.deleteTexture(this.Textures[i].id)
        }
    }
    
    /**
     * Draws a texture for the first time
     * 
     * @param int id - the id of the texture that should be drawn
     * @param int x - the x-coordinate of the image
     * @param int y - the y-coordinate of the image
     * @return bool - Returns false when the image hasn't been loaded yet
     */
    this.drawTexture = function(id, x, y){
        if(this.Textures[id].imageLoaded === true){
            this.ctx.drawImage(this.Textures[id].image, x, y);
            
            this.Textures[id].x = x;
            this.Textures[id].y = y;
            this.Textures[id].drawReady = true;
            
            return true;
        }
        else{
            //Image hasn't been loaded yet, unable to draw texture
            return false;
        }
    }
    
    /**
     * Destroys a texture
     * 
     * @param int id - the id of the texture that should be destroyed
     * @return bool - Returns false when the image wasn't loaded or hasn't been drawn
     */
    this.destroyTexture = function(id){
        if(this.Textures[id].imageLoaded === true && this.Textures[id].drawReady === true){
            this.Textures[id].drawReady = false;
            
            this.drawAllTextures();
            
            return true;
        }
        else{
            return false;
        }
    }
    
    /**
     * Draws all textures, this function is called each frame to update the canvas and reflect the new gamestate
     * 
     * @return void
     */
    this.drawAllTextures = function(){
        for(var i = 0; i < this.Textures.length; i++){
            if(this.Textures[i].imageLoaded === true && this.Textures[i].drawReady === true){
                this.ctx.drawImage(this.Textures[i].image, this.Textures[i].x, this.Textures[i].y);
            }
        }
    }
    
    /**
     * Destroys all the textures
     * 
     * @return void
     */
    this.destroyAllTextures = function(){
        for(var i = 0; i < this.Textures.length; i++){
            if(this.Textures[i].imageLoaded === true && this.Textures[i].drawReady === true){
                this.Textures[i].drawReady = false;
            }
        }
        
        this.drawAllTextures();
    }
}
