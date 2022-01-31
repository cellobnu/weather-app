import {useEffect, useState} from 'react';

export default function WeatherContainer({children}) {
  const [userData, setUserData] = useState({});

  useEffect(getUserData, []);

  function typeError(error) {
    const {message} = error;
    if (message) {
      return 'User not found, please check if the email is correct.';
    }
    consoleBugger(error);
    return 'Try later.';
  }

  function getUserData() {
    setUserData(user);
  }

  async function nomeDaFuncao(data) {
    console.log('data', data);
  }

  async function nomeDaFuncao(data) {
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
    userData,
    nomeDaFuncao,
  });
}
