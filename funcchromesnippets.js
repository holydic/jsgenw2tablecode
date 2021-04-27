var script = document.createElement('script');
script.src = "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

$('body').html('')

crEle(eles, 'body')
function crEle(str, eleTo) {
    //jQuery(`<${str}/>`,str.attrs).html('hello12').appendTo('body');
    $.each(str, (i,n)=>{
        //document.write(i,'  ',n.attrs.id,'  ',eleTo,'<br/>')
        jQuery(`<${i}/>`, n.attrs).html(`hello`).appendTo(eleTo);
        if (n.objs) {
            $.each(n.objs, (p,m)=>crEle(m, '#' + n.attrs.id))
        }
    }
    )
}