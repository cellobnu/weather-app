import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ContentWeather = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`
export const TempContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`
export const ImagemTemp = styled.Image`
  height: 200px;
  width: 200px;
`

export const Text = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const NameCountryText = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const TempText = styled.Text`
  font-size: 80px;
  color: #000;
`;

export const MaxMinText = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const TextDescription = styled.Text`
  font-size: 18px;
  color: #000;
  margin-top: 10px;
`;


export const ButtonUpdate = styled.TouchableOpacity`
  width: 200px;
  margin-top: 20px;
  background: #42d3f5;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const IconBackFontAwesome5 = styled(Icon)`
  padding: 15px;
  border-radius: 50px;
  font-size: 20px;
  color: #fff;
`;

