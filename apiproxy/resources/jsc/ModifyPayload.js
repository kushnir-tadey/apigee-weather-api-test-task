// var resp = JSON.parse(context.getVariable("response.content"));
// var newResp = []; 
// for (var i=0;i<resp.main.length;i++){ 
//     newResp.push(resp.main[i]); 
// } 
// context.setVariable("newResp", JSON.stringify(newResp));

const kelvinToCelsius = kelvin => parseFloat((kelvin - 273.15).toFixed(2));

var res = JSON.parse(response.content);

var minimizedResponse = {
    weather: res.weather,
    main: res.main,
    wind: res.wind
};

minimizedResponse['main']['temp'] = kelvinToCelsius(minimizedResponse['main']['temp']);
minimizedResponse['main']['feels_like'] = kelvinToCelsius(minimizedResponse['main']['feels_like']);
minimizedResponse['main']['temp_min'] = kelvinToCelsius(minimizedResponse['main']['temp_min']);
minimizedResponse['main']['temp_max'] = kelvinToCelsius(minimizedResponse['main']['temp_max']);

response.content = JSON.stringify(minimizedResponse);