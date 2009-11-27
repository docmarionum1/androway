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
function cTextureManager(){
    //Public functions and variables
    this.LoadTextureFromFile = pubLoadTextureFromFile;
    this.ReloadTextures = pubReloadTextures;
    this.CreateTextureSection = pubCreateTextureSection;
    this.RemoveTexture = pubRemoveTexture;
    this.RemoveTextureSection = pubRemoveTextureSection;
    this.DrawTextureSection = pubDrawTextureSection;
    this.DrawTexture = pubDrawTexture;
    this.GetTextureWidth = pubGetTextureWidth;
    this.GetTextureHeight = pubGetTextureHeight;
    this.RemoveAllTextures = pubRemoveAllTextures;
    this.RemoveAllTextureSections = pubRemoveAllTextureSections;
    
    //Private functions and variables
    var mTextures;
    var mTextureSections;
}
