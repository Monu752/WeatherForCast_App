import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function SearchBox({updateInfo}) {
    let [city, setcity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "e7bf0d791c197b9b710e6b1f48dac8c6";

    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
        let jsonResponse = await response.json();
       // console.log(jsonResponse);
        let result = {
          city:city,
          temp : jsonResponse.main.temp,
          tempMin : jsonResponse.main.temp_min,
          tempMax : jsonResponse.main.temp_max,
          humidity : jsonResponse.main.humidity,
          sea_lavel : jsonResponse.main.sea_level,
          feellike : jsonResponse.main.feels_like,
          weather : jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async(event) =>{
    event.preventDefault();
    setcity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  } 

  return (
    <>
      <h2>Search City Name</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">Check</Button>
      </form>
    </>
  );
}

export default SearchBox;
