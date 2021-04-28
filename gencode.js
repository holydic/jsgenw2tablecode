function jqgetFormvars(e) {
    let data = {};
    let value = $(e).serializeArray();
    $.each(value, function(index, item) {
        data[item.name] = item.value;
    });


    return data
}
jQuery('#gendiv > button:nth-child(3)').click(function() {


    
    $trLast = $("#gendiv").find("form:last")
    $trNew = $trLast.clone();
    $trNew.val("")
    $trLast.after($trNew);
   $('html,body').animate({scrollTop: $trNew.offset().top},'slow');
    // 输出：name=asd&type=1

    return false;
});

$('option').mousedown(function(e) {
  e.preventDefault();
  $(this).prop('selected', !$(this).prop('selected'));
  return false;
});

jQuery('#gendiv > button:nth-child(4)').click(function() {



    $('form').each(function(i,e){
      console.log(this)
      let v=jqgetFormvars(e)
      let s=`Field(v.fieldname,v.what,${!!v.main?"dao":"hao"}`+
      'hao'

      console.log(s)
      console.log(v)
  })
    return false;
});

