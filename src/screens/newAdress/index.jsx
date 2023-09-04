import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LocationSelector } from "../../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateAddressMutation } from "../../store/profile/api";
import { useLazyGetGeocodingQuery } from "../../store/maps/api";
import { insertPlace } from "../../db/index";

const NewAdress = ({navigation}) => {
    const localId = useSelector((state) => state.auth.user.localId);
    const mapImageUrl = useSelector((state) => state.address.mapImageUrl);
    const [location, setLocation] = useState(null);
    const [updateAddress, {isLoading}] = useUpdateAddressMutation();
    const [getGeolocation] = useLazyGetGeocodingQuery();
    const onLocation = async ({ lat, lng }) => {
      setLocation({ lat, lng });
    };


    const onHandlerUpdateLocation = async () => {
      const { lat, lng } = location;
      const addressName = await getGeolocation({ lat, lng });
      const result = await insertPlace({
        address: addressName.data,
        coords: location,
        image: mapImageUrl,
        localId: localId
      });
      updateAddress({ localId, address: addressName.data });
      navigation.goBack();
    };
  
  
    return (
        <View style={styles.container}>
            <LocationSelector  onLocation={onLocation}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={onHandlerUpdateLocation}>
                <Text> Confirmar </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewAdress;