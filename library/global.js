/**
 * Library::Global
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
 * Dynamic Javascript file include function
 * 
 * @param string file - the relative to viewed page location of the javascript file
 * @return void
 */
function includeJS(file){
    if($("script[src='"+file+"']").size() == 0){
        $("head").createAppend(
            'script', {
                type: 'text/javascript',
                src: file
            }
        );
    }
}
