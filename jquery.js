$(document).ready(function() {

  $("#link").click(function() {
    $("#link").remove();
    $("br").remove();
    $("#main").remove();
    $("#main2").remove();
    $("p").append(" buy more Appel products.");
    alert("Your old model product will be purposefully slowed down by our company once the most recent product is released! But Appel tech support is here to help, as long as you pay the required fees!");
  });

});
