$(document).ready(function(){
  $(".card-body").hide();
})
$(document).ready(function(){
  $(".card").mouseover(function(){
    $('.card').css({"font-size": "160%","opacity": "30%"});
    $(".card-body").show();
  })
})
$(document).ready(function(){
  $(".card").mouseout(function(){

    $(".card-body").hide();
  })
})