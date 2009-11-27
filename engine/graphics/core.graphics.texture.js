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
function sSection(){
    //u for width and v for heigth
    this.uMin = null;
    this.uMax = null;
    this.vMin = null;
    this.vMax = null;
}

function sTexture(){
    this.Texture = null;
    this.Filename = null;
    this.Width = null;
    this.Height = null;
}

function sTextureSection(){
    this.TextureId = null;
    this.Section = new sSection();
    this.Width = null;
    this.Height = null;
}
