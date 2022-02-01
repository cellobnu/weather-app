import useLocation from '../hooks/location';
import env from '../../../configs/env';

export default function WeatherContainer({children}) {
  

  function typeError(error) {
    const {message} = error;
    if (message) {
      return 'Location not found.';
    }
    return 'Try later.';
  }

  function getLocationUser() {
    try {
      const myLocation = useLocation();

      return {
        message: 'Success!',
        hasError: false,
        data: myLocation,
      };
    } catch (error) {
      return {
        message: typeError(error),
        hasError: true,
        data: [],
      };
    }
  }

  

  return children({
    getLocationUser,
  });
}
