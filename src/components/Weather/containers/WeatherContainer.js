import {useEffect} from 'react';
//import useLocation from '../hooks/location';

export default function WeatherContainer({children}) {

  //useEffect(getLocationUser(), []);

  function typeError(error) {
    const {message} = error;
    if (message) {
      return 'User not found, please check if the email is correct.';
    }
    return 'Try later.';
  }

  function getLocationUser(data) {
    try {
      console.log('data', data);
      return {
        message: 'Success!',
        hasError: false,
      };
    } catch (error) {
      return {
        message: typeError(error),
        hasError: true,
      };
    }
  }

  return children({
    getLocationUser,
  });
}
