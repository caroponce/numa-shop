import { styles } from "./styles";
import { View, TouchableOpacity, Text, Alert, Button } from "react-native";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from 'expo-location'
import { useState } from "react";
import MapPreview from "../mapPreview";

const LocationSelector = ({onLocation}) => {
    
const [pickedLocation, setPickedLocation] = useState(null)
const verifyPermission = async () => {
    const {status} = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert(
            'No tiene permiso'
        )
        return false;
    }
    return true;
}
const getLocation = async () => {
  const hasPermision = await verifyPermission();
  if(!hasPermision) return;
  const location = await getCurrentPositionAsync({
    accuracy: 1,
    timeInterval: 5000,
});
   const {latitude, longitude} = location.coords
   setPickedLocation({lat: latitude, lng: longitude})
   onLocation({lat: latitude, lng: longitude})

}
    return(
    <View style={styles.container}>
       
        <MapPreview style={styles.preview} location={pickedLocation}>
          
              <Text> No location </Text>
               
        </MapPreview>
        <TouchableOpacity onPress={getLocation} style={styles.selectButton}>
            <Text> Seleccionar dirección </Text>
        </TouchableOpacity>
    </View>
)
}

export default LocationSelector;