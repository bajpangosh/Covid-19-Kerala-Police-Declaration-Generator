$(function () {
  $("#datepicker").datepicker({
        autoclose: false,
        todayHighlight: true
  }).datepicker('update', new Date());
});
$(function () {
  $("#datepicker1").datepicker({
        autoclose: true,
        todayHighlight: true
  }).datepicker('update', new Date());
});
