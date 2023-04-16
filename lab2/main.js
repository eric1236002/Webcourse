window.onload = function () {

    let millesecond=24*60*60*1000
    $(function () {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        var topicCount = topic.length; 
        for (var x = 0; x < topicCount; x++) {
            $("#courseTable").append(
                "<tr>" +
                `<td>${x + 1}</td>` +
                `<td>${(new Date(startDate.getDay()+7*x*millesecond)).toLocaleDateString('zh-TW', { year: undefined, month: 'numeric', day: 'numeric' })}</td>` +
                `<td>${topic[x]}</td>` +
                "</tr>"
            );
        }
    });
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
    
        const rowCount = $('#courseTable tr').length;
        $("#courseTable").append(
          "<tr>" +
          `<td>${rowCount}</td>` +
          `<td>${new Date(eventDate).toLocaleDateString('zh-TW', { year: undefined, month: 'numeric', day: 'numeric' })}</td>` +
          `<td>${eventName}</td>` +
          "</tr>"
        );
    
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
    });

};
