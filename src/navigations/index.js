import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './../screens/Splash';
import WeatherScreen from './../screens/Weather';
import WeatherStack from './../navigations/';

const Navigator = () => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <NavigationContainer>
      {/* {isLoading ? <SplashScreen /> : <WeatherStack />} */}
      <WeatherScreen/>
    </NavigationContainer>
  );
};

export default Navigator;
