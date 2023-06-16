$(function(){
    $("button").on("click", loadServerData);
});

function loadServerData() {
    let rss2json ="https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json + "https://www.reddit.com/.rss")
        .done(function (data) {
            for(let x = 0; x < data.items.length; x++) {
                let content = data.items[x].content;
                let imageUrl ="";
                if (content.includes("https://www.reddit.com/r/AskReddit/comments/14a0yaw/what_screams_im_insecure/")){
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
                }
                else{
                    imageUrl = $(data.items[x].content).find("img").attr("src");
                }
                let title = data.items[x].title;
                let link = data.items[x].link;

                let row = $("<tr></tr>");
                let imageCell = $("<td></td>").append(`<img src="${imageUrl}" alt="${title}" title="${title}" />`);
                let titleCell = $("<td></td>").append(`<a href="${link}" target="_blank">${title}</a>`);

                row.append(imageCell);
                row.append(titleCell);
                $("#dataTable").append(row);
            }
            console.log("Success");
        })
        .fail(function () {
            console.log("Error");
        })
        .always(function () {
            console.log("Always");
        });
}
