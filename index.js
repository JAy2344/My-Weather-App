function searchCity(city) {
  let API_key = "ad28f3a0557d8t5f574o89b184356e5a";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_key}`;
  axios.get(apiURL).then(updateWeather);
}

function updateWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML= `${temperature}°C`;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value); // ✅ fetch weather for typed city
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

// ✅ Run once when page loads
let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

// ✅ Add event listener
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// ✅ Default city on load
searchCity("Sydney");
