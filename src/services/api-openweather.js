import axios from 'axios';
import env from '../configs/env';

const openWeatherService = async (data) => {
  const {latitude, longitude} = data?.coords || ''
  const resp = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.apiWeather}`)
    .then(
      (response) => {
        return {
          hasError: false,
          message: 'Success!',
          error: null,
          data: response.data,
        };
      },
      (error) => {
        console.log(error);
        return {
          hasError: true,
          message:
            "We couldn't connect to the server. Please, try again later.",
          error: error,
          data: [],
        };
      },
    );
  return resp;
};

export default openWeatherService;
