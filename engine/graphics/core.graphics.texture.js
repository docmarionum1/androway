/**
 * Engine::Core::Graphics::Texture
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
 * A struct to store the textures in, and load them
 * 
 * @author      DaveC <admin@excurion.nl>
 * @version     0.1 2009-11-27
 */
function Texture(id, src){
    /**
     * The identifier, unique for each texture
     * @var int
     */
    this.id = id;
    /**
     * The source of the image, can be an http(s) url,
     * a data url, or a document-object
     * @var string/object
     */
    this.src = src;
    /**
     * The image object
     * @var object
     */
    this.image;
    /**
     * A flag that checks if the image has been loaded yet
     * @var bool
     */
    this.imageLoaded = false;
    /**
     * The x-coordinate of the texture
     * @var int
     */
    this.x = 0;
    /**
     * The y-coordinate of the texture
     * @var int
     */
    this.y = 0;
    
    /**
     * The width of the texture
     * @var int
     */
    this.width = 0;
    
    /**
     * The height of the texture
     * @var int
     */
    this.height = 0;
    
    /**
     * A flag that tells if the texture is draw-ready
     * @var bool
     */
    this.drawReady = false;
    
    /**
     * Load the image from its source into the image object
     * 
     * @return void
     */
    this.load = function(){
        if(typeof(this.src) == 'object' && this.src !== null){
            //This is already an object, don't need to load anything
            this.image = this.src;
            
            this.image.onload = function(){
                this.imageLoaded = true;
                
                this.width = this.image.width;
                this.height = this.image.height;
            }
        }
        else{
            this.image = new Image();
            
            this.image.onload = function(){
                this.imageLoaded = true;
                
                this.width = this.image.width;
                this.height = this.image.height;
            }
            
            this.image.src = this.src;
        }
    }
}
