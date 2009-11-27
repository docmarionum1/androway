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
