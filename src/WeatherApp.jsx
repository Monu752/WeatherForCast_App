import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {

    const [weatherInfo , setweatherInfo] = useState(
        {
            city: "Delhi",
            feelslike: 24.84,
            temp: 25.08,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze"
          }
    )

    let updateInfo = (newInfo) =>{
        setweatherInfo(newInfo);
    };


    return ( 
        <>
        <h1>Weather App by Jitendra Gupta</h1>
        <SearchBox updateInfo = {updateInfo} />
        <InfoBox info = {weatherInfo} />
        </>
     );
}

export default WeatherApp;