
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
loadScript("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js",test)

// $.getScript("test.js", function(){
//     alert("Script loaded and executed.");
//   });
//   动态加载js文件以及判断js加载完成 - e起飞young: https://www.eqifei.net/post-49.html
//   js文件加载优化 - SegmentFault 思否: https://segmentfault.com/a/1190000004448625
//  JS脚本加载后执行相应回调函数: https://juejin.cn/post/6844903567929638920
  