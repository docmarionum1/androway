/**
 * Engine::Core
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
 
includeJS("engine/graphics/core.graphics.texture.js");
includeJS("engine/graphics/core.graphics.texturemanager.js");

TextureManager.ctx = document.getElementById("canvas").getContext("2d");

TextureManager.addTexture("media/images/textures/link.gif");
TextureManager.drawTexture(0, 10, 10);
