import React from 'react';
import WeatherContainer from '../../containers/WeatherContainer'
import {ContentView, Text} from './styles';

const WeatherScreen = () => {
  return (
    <WeatherContainer>
      {({getLocationUser}) => {
        const {message} = getLocationUser();
        return (
          <ContentView>
            <Text>{message}</Text>
          </ContentView>
        )
      }}
    </WeatherContainer>
  );
};

export default WeatherScreen;
