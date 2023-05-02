import { useState } from "react";

const API_KEY = "d9ec581c28b5a31faa465dcf1763faf7";

function Search() {
  const [city, setCity] = useState("");
  const [isSent, setIsSent] = useState(<div></div>);
  const GetWeather = async (city) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?appid=" +
      API_KEY +
      "&units=metric&q=" +
      city;
    const response = await fetch(url);
    const data = await response.json();
    const unixSunrise = data.sys.sunrise;
    const unixSunset = data.sys.sunset;
    const millisecondsSunrise = unixSunrise * 1000;
    const millisecondsSunset = unixSunset * 1000;
    const sunriseDate = new Date(millisecondsSunrise);
    const sunsetDate = new Date(millisecondsSunset);
    const localSunriseTime = sunriseDate.toLocaleTimeString().slice(0, 4);
    const localSunsetTime = sunsetDate.toLocaleTimeString().slice(0, 4);
    setCity("");
    setIsSent(
      <div className="bg-gray-400 text-white mt-4 ml-20 border rounded-2xl p-2 w-[60%] h-[70%]  md:w-[23%] md:p-1 md:ml-[39%] md:mt-2 lg:mt-8">
        <h2 className="font-semibold text-xl mt-2 md:text-2xl">{city}</h2>
        <h1 className="text-4xl font-bold md:text-6xl">{data.main.temp}°C</h1>
        <p className="text-base md:text-lg">feel {data.main.feels_like}°C</p>
        <p className="">{data.weather[0].description}</p>

        <p>Wind {Math.floor(data.wind.speed * 3.6)}km/h</p>
        <p>Humidity {data.main.humidity}%</p>
        <p>Pressure {data.main.pressure} hPa</p>
        <p>Sunrise: {localSunriseTime}</p>
        <p>Sunset : {localSunsetTime}</p>
        <img
          className="ml-12 md:ml-24"
          src={
            "https://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png"
          }
          alt="weather-icon"
        />
      </div>
    );
  };
  function handleSubmit(e) {
    //alert("You clicked Go");
    e.preventDefault();
    setCity(city);
    GetWeather(city);
  }
  function handleSearch(e) {
    setCity(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-400 rounded-lg m-2 pl-4 w-[50%] md:w-56 md:h-8 md:mt-2"
          id="search"
          name="search"
          type="search"
          onChange={handleSearch}
          value={city}
          placeholder="Search your city"
        />
        <br />
        <button
          className="bg-gray-400 text-white  border rounded-lg pl-4 pr-4 pt-1 pb-1 font-medium md:text-2xl md:pt-2 md:pb-2 md:mt-1 md:rounded-2xl"
          type="submit"
        >
          submit
        </button>
      </form>
      {isSent}
    </div>
  );
}
export default Search;
