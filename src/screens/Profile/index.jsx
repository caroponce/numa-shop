import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { useSelector } from "react-redux";
import {ORIENTATION} from '../../constants/orientation'
import { ImageSelector } from "../../components";
import { useUpdateLookPhotoMutation, useGetLookPhotoQuery } from "../../store/profile/api";
import useOrientation from "../../hooks/useOrientation";

const Profile = ({navigation}) => {    
   const  dispatch = useDispatch()
    const orientation = useOrientation();
   const localId = useSelector((state) => state.auth.user.localId);
    const [updateLookPhoto, { data, isLoading, error }] = useUpdateLookPhotoMutation();
    const { data: userData, isLoading: isLoadingUserData } = useGetLookPhotoQuery({ localId });
    const onHandlerImage = async ({ uri, base64 }) => {
        await updateLookPhoto({ localId, image: `data:image/jpeg;base64,${base64}` });
      };

    const goToFavorites = () => {
        navigation.navigate('Favoritos')
    }
    const goToAdress = () => {
        navigation.navigate('Adress')
    }
    const goToOrders = () => {
        navigation.navigate('Orders')
    }
    const goToLogout = () => {
        dispatch(logout());
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
            <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage}/>
      
            </View>
          <View style={ orientation === ORIENTATION.LANDSCAPE ? styles.touchableContainerLandscape : styles.touchableContainer}>
            <TouchableOpacity style={orientation === ORIENTATION.LANDSCAPE ? styles.touchableLandscape : styles.touchable} onPress={goToAdress}>
                <Text style={styles.textProfile}> Mis direcciones </Text>
            </TouchableOpacity>
            <TouchableOpacity style={orientation === ORIENTATION.LANDSCAPE ? styles.touchableLandscape : styles.touchable} onPress={goToFavorites}>
                <Text style={styles.textProfile}> Mis favoritos </Text>
            </TouchableOpacity>
            <TouchableOpacity style={orientation === ORIENTATION.LANDSCAPE ? styles.touchableLandscape : styles.touchable} onPress={goToOrders}>
                <Text style={styles.textProfile}> Mis compras </Text>
            </TouchableOpacity>
            <TouchableOpacity style={orientation === ORIENTATION.LANDSCAPE ? styles.touchableLandscape : styles.touchable} onPress={goToLogout}>
                <Text style={styles.textProfile}> Cerrar sesión </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Profile;