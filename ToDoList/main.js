$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});

function updateProgress()
{
    let hasChecked=0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if ($("[type='checkbox']")[x].checked){
                hasChecked+=1;
                $(this).siblings("span").css("text-decoration", "line-through");
                $(this).siblings("span").css("color", "gray");
            }else{
                $(this).siblings("span").css("text-decoration", "none");
                $(this).siblings("span").css("color", "black");
            }
    }
        $("meter").attr("max", $("[type='checkbox']").length);
        $("meter").attr("value", hasChecked);
}
