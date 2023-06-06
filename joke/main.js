$(function () { $("button").on("click", loadServerData); });
function loadServerData() {
    $.getJSON("https://api.chucknorris.io/jokes/random").done(function (data) {
        console.log("Success"); 
        $("#showData").text(data.value);
    }).fail(function () {
        console.log("Error");
    }).always(function () {
        console.log("Always");
    });
}
$("#shareButton").on("click", function () {
    var joke = $("#showData").text();
    var shareUrl = "https://twitter.com/intent/tweet?url=127.0.0.1&text=" + encodeURIComponent(joke)+"";
    
    window.open(shareUrl, "_blank", "width=600,height=400");
  });