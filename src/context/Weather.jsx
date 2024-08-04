import { createContext, useContext, useState } from "react";
import { getWeatherDataforCity, getWeatherDataforLocation } from "../api";


const WeatherContext = createContext(null);

export const useWeather= () =>{
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity,setSearchCity]= useState(null);

const fetchData =async() =>{
    const response =await getWeatherDataforCity(searchCity);
    setData(response);
}


    const fetchCurrentUserLocationData = () =>{
        navigator.geolocation.getCurrentPosition( (position) => {
           getWeatherDataforLocation(position.coords.latitude, position.coords.longitude ).then((data) => setData(data));
        });
    };

    return(
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData, fetchCurrentUserLocationData}}>{props.children}</WeatherContext.Provider>
    );
};
