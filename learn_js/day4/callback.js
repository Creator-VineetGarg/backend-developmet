/**
 * Callbacks
 */

function loadScript(src, Callback){
    var Script = document.createElement("script")
    Script.src = src
    document.body.appendChild(Script);
}

