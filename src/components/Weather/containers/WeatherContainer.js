import {useState, useEffect} from 'react';
import openWeatherService from './../../../services/api-openweather';

const WeatherContainer = ({children, locationCurrent}) =>{
    
  const [weatherUser, setWeatherUser] = useState({})

  const getLocationUser = async () =>{
    try {
      
      if(locationCurrent){
        const {data} = await openWeatherService(locationCurrent)
        const weather = {
          max: data.main.temp_max, 
          min: data.main.temp_max,
          temp: data.main.temp,
          name: data.name,
          country: data.sys.country,
          weather: data.weather
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
