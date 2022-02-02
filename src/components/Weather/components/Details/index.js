import React from 'react';
import WeatherContainer from '../../containers/WeatherContainer'
import useLocation from './../../../../services/location';

import {ContentView, Text, Button} from './styles';

const WeatherScreen = () => {
  const locationCurrent = useLocation()

  return (
    <WeatherContainer locationCurrent={locationCurrent}>
      {({weatherUser}) => {
        console.log('weatherUser', weatherUser);
        if(weatherUser?.data){
          const {max, min, temp, name, country, weather} = weatherUser?.data || ''
          //const weatherDescription = weather[0]?.description || ''
          return (
            <ContentView>
              <Text>{name}-{country}</Text>
              <Text>{temp}</Text>
              <Text>{max}-{min}</Text>
              {/* <Text>{weatherDescription}</Text> */}
              
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
