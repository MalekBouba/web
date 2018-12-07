window.$ = require('../js/jquery-2.2.3.min');

getApi = (id, lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?appid=${id}&lat=${lat}&lon=${lon}&units=metric`
};


function getDataFromAPI() {
  return $.ajax({
    url: getApi('e75a11aa3911612d4dbdc711771487a5', 35.8580457, 10.598997),
  });
}

test('construct a valid API path', () => {
  expect(getApi('A', 5, 6)).toBe("https://api.openweathermap.org/data/2.5/weather?appid=A&lat=5&lon=6&units=metric");
});

test('get data from API', () => {
  function callback(data) {
    console.log(data);
    expect(data).toBe({});
  }
  getDataFromAPI(callback);
});
