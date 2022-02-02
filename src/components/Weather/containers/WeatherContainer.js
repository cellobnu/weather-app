import {useState, useEffect} from 'react';
import openWeatherService from './../../../services/api-openweather';

const WeatherContainer = ({children, locationCurrent}) =>{
    
  const [weatherUser, setWeatherUser] = useState({})

  const convertTemp = {
    kelvinToCelsius: function kToC(k) {
      return Math.round(k - 273.15);
    },
  };

  const getLocationUser = async (locationCurrent) =>{
    try {
      
      if(locationCurrent){
        const {data} = await openWeatherService(locationCurrent)
        const weather = {
          max: convertTemp.kelvinToCelsius(data.main.temp_max), 
          min: convertTemp.kelvinToCelsius(data.main.temp_max),
          temp: convertTemp.kelvinToCelsius(data.main.temp),
          name: data.name,
          country: data.sys.country,
          weather: data.weather[0]
        }

        return {
          message: 'Success!',
          hasError: false,
          data: weather,
        };
      }
      
    } catch (error) {
      return {
        message: error,
        hasError: true,
        data: [],
      };
    }
  }

  const callInit = async () => {
    const result = await getLocationUser(locationCurrent);
    setWeatherUser(result);
  };

  
  useEffect(() => {
    callInit()
  }, [locationCurrent]);


  return children({
    weatherUser,
    getLocationUser
  });
}
export default WeatherContainer
