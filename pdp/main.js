window.onload = function () {
    var tigerScore = 0;
    var peacockScore = 0;
    var koalaScore = 0;
    var owlScore = 0;
    var chameleonScore = 0;
    $(function () {
        //儲存目前作答到第幾題
        var currentQuiz=null;//當按鈕按下後，要做的事情
        $("#startButton").on("click",function(){
            //如果還沒開始作答就從這裡開始
            if(currentQuiz==null){
                //設定目前作答從第0題開始
                currentQuiz=0;//顯示題目
                $("#question").text(questions[0].question);//將選項區清空(可以試著先不寫)
                $("#options").empty();//將選項逐個加入
                questions[0].answers.forEach(function(element,index,array){
                    $("#options").append(`<input name='options'type='radio'value='${index}'>
                    <label>${element[0]}</label><br><br>`);
                });//將按鈕上的文字換成Next
                $("#startButton").attr("value","Next");
            }else{
                //已經開始作答從這邊繼續
                $.each($(":radio"),function(i,val){
                    if(val.checked){
                        //是否已走到最後要產生結果(A~D)
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            for (var i = 0; i < questions.length; i++) {
                                var answer = questions[i].answers.filter(function (a) {
                                    return a[1] !== undefined && a[1] !== null;
                                }).find(function (a) {
                                    return a[1] === total;
                                });
                                if (answer) {
                                    var scoreArr = scores["老虎"];
                                    if (scoreArr.includes(i + 1)) {
                                        tigerScore += answer[1];
                                    }
                                    scoreArr = scores["孔雀"];
                                    if (scoreArr.includes(i + 1)) {
                                        peacockScore += answer[1];
                                    }
                                    scoreArr = scores["考拉"];
                                    if (scoreArr.includes(i + 1)) {
                                        koalaScore += answer[1];
                                    }
                                    scoreArr = scores["貓頭鷹"];
                                    if (scoreArr.includes(i + 1)) {
                                        owlScore += answer[1];
                                    }
                                    scoreArr = scores["變色龍"];
                                    if (scoreArr.includes(i + 1)) {
                                        chameleonScore += answer[1];
                                    }
                                }
                            }
                            console.log("老虎分數：" + tigerScore);
                            console.log("孔雀分數：" + peacockScore);
                            console.log("考拉分數：" + koalaScore);
                            console.log("貓頭鷹分數：" + owlScore);
                            console.log("變色龍分數：" + chameleonScore);
                        }
                        else{
                            //指定下一題，原始資料從1開始，所以要-1
                            if (currentQuiz  [5, 10, 14, 18, 24, 30]) {
                                tigerScore++;
                            }
                            total[i]+=questions[currentQuiz].answers[i][1];
                            currentQuiz+=1;
                            //顯示新的題目
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            questions[currentQuiz].answers.forEach(function(element,index,array){
                                $("#options").append(`<input name='options'type='radio'value='${index}'><label>${element[0]}</label><br><br>`);
                            });
                        }return false;//跳離迴圈的方式
                    }
                });
            }
        });
    });
};