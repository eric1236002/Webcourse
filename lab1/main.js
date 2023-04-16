window.onload = function () {
    let imagarray=[
        "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
        "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
        "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
        "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
    ];   
    // let music = document.getElementById("music");

    $(function () {
        $("input").on("click", function () {
            let music = document.getElementById("music");
            var numberOfListItem = $("li").length; 
            var randomChildNumber = Math.floor(Math.random() * numberOfListItem); 
            music.play(); 
            var intervalId = setInterval(function() {
                randomChildNumber = Math.floor(Math.random() * numberOfListItem); 
                $("h1").text("抽獎中...");
                // $("h1").text($("li").eq(randomChildNumber).text());
                $("img").attr("src", imagarray[randomChildNumber]);
            }, 100);
            setTimeout(function() {
                clearInterval(intervalId);
                $("h1").text("你選中的是:"+$("li").eq(randomChildNumber).text());
            }, 1300);
        });
    });
};
