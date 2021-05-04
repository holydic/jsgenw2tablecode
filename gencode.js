function jqgetFormvars(e) {
    let data = {};
    let value = $(e).serializeArray();
    let b = '', bn = 1
    $.each(value, function (index, item) {
        b = item.name == b && bn++ ? item.name + bn : item.name
        data[b] = item.value;
        b = item.name
    });
    return data
}

jQuery('#gendiv > button:nth-child(3)').click(function () {
    $trLast = $("#gendiv").find("form:last")
    $trNew = $trLast.clone();
    $trNew.val("")
    $trLast.after($trNew);
    $('html,body').animate({ scrollTop: $trNew.offset().top }, 'slow');
    // 输出：name=asd&type=1
    return false;
});

$('option').mousedown(function (e) {
    e.preventDefault();
    $(this).prop('selected', !$(this).prop('selected'));
    return false;
});

jQuery('#gendiv > button:nth-child(5)').click(function () {
    let table=[]
    let main

    $('form').each(function (i, e) {
        let v = jqgetFormvars(e)
        let vHow=[] 
        // let vFilter=Object.keys(v).filter(i=>!i.indexOf('how'))
        // let vHow=vFilter.map(i=>v[i])
        $.each(v,function(i,a){!i.indexOf('how')&&vHow.push(a)})
        
        let s=[],s2=''
        s.push(`\n\tField("${v.fieldname}","${v.what == "reference" ? "reference db." + v.linkdb : v.what}"`)


        v.default!='default'&&(s2=`\n\tdefault=${v.default}`)&&s.push(s2)

        let s3=`${!!v.unique ? "\n\t\n\tunique=True" : ""}`
        s3&&s.push(s3)

        genHow={
            IS_IN_SET:()=>"("+JSON.stringify(v.isinset.split(","))+")",
            IS_NOT_EMPTY:()=>"()",
            IS_NOT_IN_DB:()=>`(db.${v.isnotindb})`,
            IS_IN_DB:()=>`(db.${v.isindb})`,
            IS_INT_IN_RANGE:()=>`(${v.isinrange})`
        }
        $(vHow).each(
            (i,im)=>  genHow[im]&&(  vHow[i]=im+genHow[im]()  )   
            )

        let s4=`${vHow.length?"\n\trequires="+"["+vHow.toString()+"]":""}`
        s4&&s.push(s4)

        v.main&&(main=v.fieldname)

        table.push(s.toString()+")")
    })
    $('[name="sig"]').serialize()&&table.push('\n\tauth.signature')
    $('[name="migrate"]').serialize()&&table.push('migrate=False')
    main&&table.push(`\n\tformat = '%(${main})s'`)

    table.unshift(`db.define_table("${$('[name="biao"]').val()}"`)
    $('textarea').val(table.toString()+")").select()
    document.execCommand('copy')
    return false;
});

$("textarea").blur(function(){
  $("textarea").select();
  document.execCommand('copy')

});