$(document).ready(function(){
  $("h1").click(function(){
    $("p").toggle();
  });

  $("p").click(function(event){

    var selectOthers = "p[id!='"+event.target.id+"']";

    $(selectOthers).toggle();
  })

  $("p[id='p1']").click(function() {
    $("img").toggle();
  });
});
