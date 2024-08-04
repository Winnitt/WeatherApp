const Url= "https://api.weatherapi.com/v1/current.json?key=26bab747206a47d28c6185618240308";



export const getWeatherDataforCity= async (city) =>{
        const response= await fetch(`${Url}&q=${city}&aqi=yes`)
        return await response.json();
};


export const getWeatherDataforLocation= async (lat,lon) =>{
    const response= await fetch(`${Url}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};
