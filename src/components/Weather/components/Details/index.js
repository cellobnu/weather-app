import React from 'react';
import WeatherContainer from '../../containers/WeatherContainer'
import {ContentView, Text} from './styles';

const WeatherScreen = () => {
  return (
    <WeatherContainer>
      {({getLocationUser}) => {
        const {data} = getLocationUser();
        if(data){
          const {latitude, longitude} = data?.coords
          return (
            <ContentView>
              <Text>{latitude},{longitude}</Text>
            </ContentView>
          )
        }
      }}
    </WeatherContainer>
  );
};

export default WeatherScreen;
