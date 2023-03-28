window.onload = function () {

    let millesecond=24*60*60*1000
    $(function () {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        var topicCount = topic.length; 
        for (var x = 0; x < topicCount; x++) {
            $("#courseTable").append(
                "<tr>" +
                `<td>${x + 1}</td>` +
                `<td>${(new Date(startDate.getDay()+7*x*millesecond)).toLocaleDateString()}</td>` +
                `<td>${topic[x]}</td>` +
                "</tr>"
            );
        }
    });
};