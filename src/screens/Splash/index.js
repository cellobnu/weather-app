import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import MaskedView from '@react-native-community/masked-view';

const SplashScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  const colorLayer = animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: '#0996fa'}]} />
  );
  const whiteLayer = animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, {backgroundColor: '#fff'}]} />
  );

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 900,
    }).start(() => {
      setAnimationDone(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 100],
          outputRange: [0.5, 50],
        }),
      },
    ],
  };

  return (
    <View style={{flex: 1}}>
      {colorLayer}

      <MaskedView
        style={{flex: 1}}
        maskElement={
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Animated.Image
              source={require('../../assets/weather.png')}
              style={[{width: 300}, imageScale]}
              resizeMode="contain"
            />
          </View>
        }>
        {whiteLayer}
      </MaskedView>
    </View>
  );
};

export default SplashScreen;
