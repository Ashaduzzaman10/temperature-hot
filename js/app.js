const API_KEY = ''; // remove it for security purpose 

const loadTemperature = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayLoadedData(data);
  } catch (err) {
    console.log(err);
  }
};
const displayLoadedData = (data) => {
  setInnerText("temp", data.main.temp);
  setInnerText("condition", data.weather[0].main);
};

const setInnerText = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};
document.getElementById("btn-search").addEventListener("click", () => {
  const inputField = document.getElementById("input-field");
  const city = inputField.value;
  loadTemperature(city);
  document.getElementById("city").innerText = city;
});

loadTemperature("dhaka");
