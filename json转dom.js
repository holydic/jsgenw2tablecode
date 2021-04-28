
eles = {"form":{"attrs":{"id":"genform","name":"genform"},"args\r\n":["a","b"],"objs":[{"table":{"objs":[{"tr":{"objs":[{"input":{"attrs":{"name":"itemname","id":"geniput0"},"args\r\n":["a","b"]}},{"input":{"attrs":{"name":"itemhow","id":"geninput1"},"args\r\n":["a","b"]}}],"attrs":{"id":"gentr0"}}},{"tr":{"objs":[{"input":{"attrs":{"type":"submit","id":"gensubmit"}}}],"attrs":{"id":"gentr1"}}}],"attrs":{"id":"gentable"}}}]}}

function crEle(ele, eleTo) {
    //jQuery(`<${ele}/>`,ele.attrs).html('hello12').appendTo('body');
    $.each(ele, (i,n)=>{
        //document.write(i,'  ',n.attrs.id,'  ',eleTo,'<br/>')
        jQuery(`<${i}/>`, n.attrs).appendTo(eleTo);
        if (n.objs) {
            $.each(n.objs, (p,m)=>crEle(m, '#' + n.attrs.id))
        }
    }
    )
}

$('body').html('')
crEle(eles, 'body')