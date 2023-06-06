let cityData = [
    { name: "", lat: "", lon: ""},
    { name: "台北", lat: 25.0856513, lon: 121.421409 },
    { name: "台中", lat: 24.1852333, lon: 120.4946381 },
    { name: "高雄", lat: 22.7000444, lon: 120.0508691 }, 
    { name: "元智", lat: 24.9703173, lon: 121.2608673 }
];

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect").append(
            `<option value='${x}'>${cityData[x].name}</option>`
        );
    }
    $("#citySelect").on("change", loadServerData);
});
let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
let weatherMapAPIKey = "f19a57ddfa179229c950202018c6cded";
function loadServerData(){
    console.log("[loadServerData] in");
    // debugger;
    $("#result").empty();
    if(this.value == 0) return;
    // Request Weather Data
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data){
        console.log(data);
        $("#result").append(
            `<p>氣溫：${data.main.temp_min} ~ ${data.main.temp_max}</p>`
        );
        $("#result").append(
            `<p>氣壓：${data.main.pressure} hPa</p>`
          );
          $("#result").append(
            `<p>相對濕度：${data.main.humidity}%</p>`
          );
        $("#result").append(
            `<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`
        );
    })
    .fail(function(){console.log("Error")})
    .always(function(){console.log("Always")});

}


$("#locationBtn").on("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            $.getJSON(weatherAPI_URL,{
                lat: lat,
                lon: lon,
                appid: weatherMapAPIKey,
                units:'metric',
                lang:'zh_tw'
            })
            .done(function(data){
                console.log(data);
                $("#result").empty();
                $("#result").append(
                    `<p>地點: ${data.name}</p>`
                );
                $("#result").append(
                    `<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`
                );
                $("#result").append(
                    `<p>氣壓：${data.main.pressure} hPa</p>`
                  );
                  $("#result").append(
                    `<p>相對濕度：${data.main.humidity}%</p>`
                  );
                $("#result").append(
                    `<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`
                );
            })
            .fail(function(){console.log("Error")})
            .always(function(){console.log("Always")});
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});
