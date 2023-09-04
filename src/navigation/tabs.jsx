import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import ProfileNavigator from "./profile";
import { COLORS } from "../themes";
import { Ionicons } from '@expo/vector-icons/';
const BottonTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return(
        <BottonTab.Navigator initialRouteName="ShopTab"
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 10,
    
            },
            tabBarStyle: {
                backgroundColor: COLORS.background
            },
            tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.text,
        tabBarIconStyle: {
            fontSize: 20,
        }
        }}>
            <BottonTab.Screen name="ShopTab" component={ShopNavigator}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => {
                   return <Ionicons name="home-outline" size={size} color={color}/>
                },
               
            }}/>
            <BottonTab.Screen name="CartTab" component={CartNavigator}
             options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({focused, color, size}) => {
                   return <Ionicons name='cart-outline' size={size} color={color}/>
                },
               
            }}
            />
            <BottonTab.Screen name="ProfileTab" component={ProfileNavigator}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({focused, color, size}) => {
                   return <Ionicons name="person-outline" size={size} color={color} />
                },
               
            }}/>
        </BottonTab.Navigator>
    )
}

export default TabsNavigator;