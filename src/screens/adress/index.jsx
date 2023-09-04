import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { selectPlaces } from "../../db/index";
import { useCallback } from "react";
import { useSelector } from "react-redux";
const Adress = ({navigation}) => {
  const localId = useSelector((state) => state.auth.user.localId);

  const [places, setPlaces] = useState([]);

const goToNewAdress = () => {
  navigation.navigate('NewAdress')
}
useFocusEffect(
  useCallback(() => {
    const getPlaces = async () => {
      const places = await selectPlaces(localId); 
      setPlaces(places);
    };
    getPlaces();

    return () => {
      setPlaces([]);
    };
  }, [localId]) 
);
    return(
       <View style={styles.container}>   
       <FlatList
        data={places}
        renderItem={({ item }) => {
     
          return (
            <View style={styles.itemContainer}>
              <View style={styles.mapImageContainer}>
                
              </View>
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemAddress}>{item.address}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />  
             <TouchableOpacity onPress={goToNewAdress} style={styles.addAddress}>
        <View>
          <Text> Agregar nueva direccion </Text>
        </View>
              </TouchableOpacity>
        </View>
    )
}

export default Adress;