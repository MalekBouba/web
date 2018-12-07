var appid = 'e75a11aa3911612d4dbdc711771487a5';

getApi = (id, lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?appid=${id}&lat=${lat}&lon=${lon}&units=metric`
};

getBackground = (data) => {
  if (data.weather[0].main === 'Clear') {
    return 'agileinfo_main_grid_sunny'
  } else if (data.weather[0].main === 'Cloudy') {
    return 'agileinfo_main_grid_cloudy'
  } else {
    return 'agileinfo_main_grid_rainy'
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(returnPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function getDataFromAPI(position) {
  $.ajax({
    url: getApi(appid, position.latitude, position.longitude),
    success: (data) => {
      $('#position').text('Now, ' + data.name);
      $('#wind-speed').text(data.wind.speed + ' Km/h - ' + data.wind.deg + '°');
      $('#temp-deg').text(Math.round(data.main.temp) + '°');
      $('#weather-main').text(data.weather[0].main);
      $('.bg-weather').addClass(getBackground(data))
    },
  });
}

function returnPosition(position) {
  var position = {
    latitude: position.coords.latitude, longitude: position.coords.longitude
  };
  getDataFromAPI(position);
}

module.exports = getApi;
module.exports = getDataFromAPI;
module.exports = getBackground;
module.exports = getLocation;
module.exports = returnPosition;
