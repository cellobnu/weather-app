import React from 'react';
import WeatherContainer from '../../containers/WeatherContainer'
import useLocation from './../../../../services/location';

import {ContentView, CountWeather, TempText, NameCountryText, MaxMinText, Text} from './styles';

const WeatherScreen = () => {
  const locationCurrent = useLocation()

  return (
    <WeatherContainer locationCurrent={locationCurrent}>
      {({weatherUser}) => {
        if(weatherUser?.data){
          const {max, min, temp, name, country, weather} = weatherUser?.data || ''
          console.log('weather', weather);
          const weatherDescription = weather[0].description
          return (
            <ContentView>
              
              <CountWeather>
                <NameCountryText>{name}-{country}</NameCountryText>
                <TempText>{temp} Cº</TempText>
                <MaxMinText>Máx.:{max} - Min.:{min}</MaxMinText>
                <Text>{weatherDescription}</Text>
              </CountWeather>
              
              
              
            </ContentView>
          )
        }else{
          return (
            <ContentView>
              <Text>Loading...</Text>
            </ContentView>
          )
        }
      }}
    </WeatherContainer>
  );
};

export default WeatherScreen;
