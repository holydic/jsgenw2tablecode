
function test(){
    $(':root').html('')
   
    //document.write('<div id="ok">zh</div>')

}


function  loadScript(url, callback) {
    let script = document.createElement('script');
    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        } 
    } else { // 其他浏览器
        script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
//window.location.href="file:///C:/Users/wanji/Desktop/chrome/testsnippets.html"
loadScript("file:///C:/Users/wanji/Desktop/chrome/jquery.min.js",test)