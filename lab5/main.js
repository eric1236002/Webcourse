let player;
//YouTube Player
let currentPlay = 0;//記錄目前撥到第幾首歌
var isPlaying = false;

//YouTube API Ready
function onYouTubeIframeAPIReady() {
    player=new YT.Player("player",{
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            autoplay: 1,//是否自動撥放
            controls: 0,//是否顯示控制項
            start: playTime[currentPlay][0],//開始秒數
            end: playTime[currentPlay][1],//結束秒數
            iv_load_policy: 3
        },
        events: {
            onReady: onPlayerReady, 
            onStateChange: onPlayerStateChange
        }
    });
}//YouTube Player Ready
function onPlayerReady(event) {
     
    
    $("#playButton").on("click", function () {
        $("h2").text(player.getVideoData().title);
        if (!isPlaying) {
            player.playVideo();
            $("#playButton img").attr("src", "./img/play.png"); 
            $(this).val("暫停");
        } else {
            player.pauseVideo();
            $("#playButton img").attr("src", "./img/pause.png"); 
            $(this).val("撥放");
        }
        isPlaying = !isPlaying;
        });
    $("#nextButton").on("click", function () {
        if (currentPlay < playList.length - 1) {
            currentPlay++;
            player.loadVideoById({
                videoId: playList[currentPlay], 
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1], 
                suggestedQuality: "large"
            });
            $("h2").text(player.getVideoData().title);
        }
    });
    // 前進10秒
    $('#stopButton').on('click', function() {
        player.pauseVideo();
    });
    // 前進10秒
    $('#forwardButton').on('click', function() {
        var currentTime = player.getCurrentTime();
        var newTime = currentTime + 10;
        player.seekTo(newTime, true);
    });

    // 後退10秒
    $('#backwardButton').on('click', function() {
        var currentTime = player.getCurrentTime();
        var newTime = currentTime - 10;
        player.seekTo(newTime, true);
    });
    $("#prevButton").on("click", function () {
        if (currentPlay > 0) {
            currentPlay--;
            player.loadVideoById({
                videoId: playList[currentPlay], 
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1], 
                suggestedQuality: "large"
            });
            $("h2").text(player.getVideoData().title);
        }
    });
    
}//Player State Change
function onPlayerStateChange(event) {
    if (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]) {
        if (currentPlay < playList.length - 1) {
            currentPlay++; player.loadVideoById({
                videoId: playList[currentPlay], 
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1], 
                suggestedQuality: "large"
            });
        } else {
            currentPlay = 0; 
            player.cueVideoById({
                videoId: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
            $("h2").text("")
        }
    } 
    if (event.data == 1) { $("h2").text(player.getVideoData().title); }
}
