import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewAdress, Favoritos, Orders, Profile, Adress } from "../screens";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Favoritos" component={Favoritos}/>
            <Stack.Screen name="NewAdress" component={NewAdress}/>
            <Stack.Screen name="Orders" component={Orders}/>
            <Stack.Screen name="Adress" component={Adress}/>
        </Stack.Navigator>
    )
}

export default ProfileNavigator;