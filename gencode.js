
function jqgetFormvars(formid) {
    let data = {};
let value = $(formid).serializeArray();
$.each(value, function (index, item) {
  data[item.name] = item.value;
});
return data
}