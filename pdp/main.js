window.onload = function () {

    $(function () {
        var tigerScore = 10;
        var peacockScore = 10;
        var koalaScore = 10;
        var owlScore = 10;
        var chameleonScore = 10;
        var currentQuiz=null;//當按鈕按下後，要做的事情
        //儲存目前作答到第幾題


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
            }else if(currentQuiz==30){
                //設定目前作答從第0題開始
                currentQuiz=0;//顯示題目
                $("#scores").empty();//將選項逐個加入
                $("#question").text(questions[0].question);//將選項區清空(可以試著先不寫)
                $("#options").empty();//將選項逐個加入
                $("#popup").empty();//將選項逐個加入
                questions[0].answers.forEach(function(element,index,array){
                    $("#options").append(`<input name='options'type='radio'value='${index}'>
                    <label>${element[0]}</label><br><br>`);
                });//將按鈕上的文字換成Next
                $("#startButton").attr("value","Next");
            }else{
                //已經開始作答從這邊繼續
                $.each($(":radio"),function(i,val){
                    if(val.checked){
                        if(currentQuiz==29){
                            $("#startButton").attr("value","重新開始");
                            currentQuiz+=1;
                            chameleonScore+=questions[currentQuiz-1].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1];
                            $("#ti").empty();
                            $("#options").empty();
                            $("#question").text("按圖片看更多");
                            const scoresDiv = document.getElementById("scores");
                            const tigerScoreStr = '<div><img src="./tiger.jpg" alt="Tiger"><span>老虎分數'+tigerScore+'</span></div>';
                            const peacockScoreStr = '<div><img src="./peacock.jpg" alt="Peacock"><span>孔雀分數'+peacockScore+'</span></div>';
                            const koalaScoreStr = '<div><img src="./koala.jpg" alt="Koala"><span>無尾熊分數'+koalaScore+'</span></div>';
                            const owlScoreStr = '<div><img src="./owl.jpg" alt="Owl"><span>貓頭鷹分數'+owlScore+'</span></div>';
                            const chameleonScoreStr = '<div><img src="./chameleon.jpg" alt="Chameleon"><span>變色龍分數'+chameleonScore+'</span></div>';
                            scoresDiv.innerHTML = tigerScoreStr + peacockScoreStr + koalaScoreStr + owlScoreStr + chameleonScoreStr;
                        }
                        else{
                            if(currentQuiz<6){
                                tigerScore+=questions[currentQuiz].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1]*3;
                            }
                            else if(currentQuiz<12 && currentQuiz>=6){
                                peacockScore+=questions[currentQuiz].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1]*3;
                            }
                            else if(currentQuiz<18 && currentQuiz>=12){
                                koalaScore+=questions[currentQuiz].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1]*3;
                            }
                            else if(currentQuiz<24 && currentQuiz>=18){
                                owlScore+=questions[currentQuiz].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1]*3;
                            }
                            else if(currentQuiz<30 && currentQuiz>=24){
                                chameleonScore+=questions[currentQuiz].answers[parseInt(document.querySelector('input[name="options"]:checked').value)][1]*3;
                            }
                            

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
            const images = document.querySelectorAll('img');
            images.forEach(image => {
                image.addEventListener('click', () => {
                    const text = image.getAttribute('alt');
                    const popup = document.getElementById('popup');
                    if(text=='Tiger'){
                        popup.innerHTML =  finalAnswers.tiger;
                    }
                    else if(text=='Peacock'){
                        popup.innerHTML =  finalAnswers.peacock;
                    }
                    else if(text=='Koala'){
                        popup.innerHTML =  finalAnswers.koala;
                    }
                    else if(text=='Owl'){
                        popup.innerHTML =  finalAnswers.owl;
                    }
                    else if(text=='Chameleon'){
                        popup.innerHTML =  finalAnswers.chameleon;
                    }
                    popup.style.display = 'block';
                });
            });
            const popup = document.getElementById('popup');
            popup.addEventListener('click', () => {
            popup.style.display = 'none';
            });
        });
    });
};