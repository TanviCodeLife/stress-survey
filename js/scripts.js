// var sum = function (signs) {
//   return signs+=
// }



$(document).ready(function(){
  $("form#health_survey").submit(function(event){
    event.preventDefault();
    var result = 0;
    // $("#remedy-responses").show();
    $("input:checkbox[name=stressOne]:checked").each(function(){
      var stressSigns = parseInt($(this).val());
      result = result + stressSigns;

    });
      console.log(result);
  });
});
