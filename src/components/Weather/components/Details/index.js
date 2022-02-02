import React from 'react';
import WeatherContainer from '../../containers/WeatherContainer'
import useLocation from './../../../../services/location';
import imageDictionary from './../../../../configs/imageDictionary';


import {
  ContentView, 
  ContentWeather, 
  TempContent,
  TempText, 
  ImagemTemp,
  NameCountryText, 
  MaxMinText, 
  Text,
  TextMain,
  TextDescription,
  ButtonUpdate,
  IconBackFontAwesome5
} from './styles';

const WeatherScreen = () => {
  const locationCurrent = useLocation()

  const handleUpdate = async (getLocationUser) => {
    const {message, hasError} = await getLocationUser(locationCurrent);
    hasError ? alert(message) : alert(message);
  };

  return (
    <WeatherContainer locationCurrent={locationCurrent}>
      {({weatherUser, getLocationUser}) => {
        if(weatherUser?.data){
          const {max, min, temp, name, country, weather} = weatherUser?.data || ''
          const {description, icon} = weather || ''

          return (
            <ContentView>
              <ContentWeather>
                <TempContent>
                  <ImagemTemp source={imageDictionary[icon]} />  
                </TempContent>
                <NameCountryText>{name} - {country}</NameCountryText>
                <TempText>{temp}°</TempText>
                <MaxMinText>Máx.:{max}° - Mín.:{min}°</MaxMinText>
                <TextDescription>{description}</TextDescription>
                <ButtonUpdate onPress={() => handleUpdate(getLocationUser)}>
                  <IconBackFontAwesome5 name="sync-alt" />
                </ButtonUpdate>
              </ContentWeather>
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
