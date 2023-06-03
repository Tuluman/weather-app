//Choose your city...
function getWeatherInCity(city) {
  let apiKey = "0a56bba0eb1575d9be6fc10eef092e7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  console.log(apiUrl);
  console.log(city);
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function submitForm(event) {
  event.preventDefault();
  let city = document.querySelector("#formGroupExampleInput").value;
  if (city === "") {
    alert("Please, enter tour city.");
  } else {
    getWeatherInCity(city);
  }
  let currentTime = document.querySelector("#time");
  currentTime.innerHTML = formatDate(new Date());
}
let currentCity = document.querySelector("#city");
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", submitForm);
//============

//show Temperarure realtime
// let apiKeyTemp = "0a56bba0eb1575d9be6fc10eef092e7e";

// let apiTempUrlMetric = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.innerText}&appid=${apiKeyTemp}&units=metric`;

// let apiTempUrlImperial = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.innerText}&appid=${apiKeyTemp}&units=imperial`;

// function showTempC(temp) {
//   let tempMetric = Math.round(temp.data.main.temp); //round
//   let changeTemp = document.querySelector("#temperature");
//   changeTemp.innerHTML = tempMetric;
//   console.log(currentCity.innerText);
//   console.log(tempMetric);
// }
// let metricTemp = axios.get(apiTempUrlMetric);
// axios.get(apiTempUrlMetric).then(showTempC);

// function showTempF(temp) {
//   let changeTemp = document.querySelector("#temperature");
//   let tempImperial = Math.round(temp.data.main.temp); //round
//   changeTemp.innerHTML = tempImperial;
// }
// let imperialTemp = axios.get(apiTempUrlImperial);
// axios.get(apiTempUrlImperial).then(showTempF);

//===============================================================

//Click on celsius-link...
function changeToCelsius(event) {
  event.preventDefault();
  let tempC = document.querySelector("#temperature");
  tempC.innerHTML = 19;
}
let celsiusUnit = document.querySelector("#celsius-link");
celsiusUnit.addEventListener("click", changeToCelsius);

//============

//Click on fahrenheit-link...
function changeToFahrenheit(event) {
  event.preventDefault();
  let tempF = document.querySelector("#temperature");
  tempF.innerHTML = 61;
}
let fahrenheitUnit = document.querySelector("#fahrenheit-link");
fahrenheitUnit.addEventListener("click", changeToFahrenheit);
//============

//convert and display current date
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatDate = "";
  let currentHour = date.getHours();
  let currentDay = days[date.getDay()];
  let currentMin = date.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  formatDate = `${currentDay} ${currentHour}:${currentMin}`;
  return formatDate;
}
let currentTime = document.querySelector("#time");
currentTime.innerHTML = formatDate(new Date());
//===============

let locationBtn = document.querySelector("#posicion");
locationBtn.addEventListener("click", CurrentLocation);

function CurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}
function getLocation(position) {
  let apiKey = "0a56bba0eb1575d9be6fc10eef092e7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  console.log(apiUrl);
  console.log(position);
}
