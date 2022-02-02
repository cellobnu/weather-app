import {useEffect, useState} from 'react';
import {Alert, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {

  const [myLocationCurrent, setMyLocationCurrent] = useState({});

  async function locationPermission() {
    if (Platform.OS === 'ios') {
      const grantedIOS = await Geolocation.requestAuthorization(
        'whenInUse' || 'always',
      );
      return grantedIOS === 'granted';
    } else {
      const grantedAndroid = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Allow "Whosup" to use your location?',
          message: 'For filtering activities or groups.',
          //buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return grantedAndroid === PermissionsAndroid.RESULTS.GRANTED;
    }
  }

  async function getLocation() {
    try {
      const hasLocationPermission = await locationPermission();

      if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
          (position) => {
            setMyLocationCurrent(position) 
          },
          (error) => {
            // See error code charts below.
            console.tron.log('Erro', error.message);
            console.log('Erro', error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        Alert.alert('Notice', 'User denied access to location services.');
      }
    } catch (error) {
      consoleBugger(`${error.code}, ${error.message}`);
    }
  }

  useEffect(() => {
    const getData = async () => {
      await getLocation();
    };
    getData();
  }, []);

  return myLocationCurrent
}

export default useLocation
