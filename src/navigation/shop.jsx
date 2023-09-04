import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Categories, ProductDetail, ProductFiltered, AllProducts, Orders} from '../screens'
import { CategoryList, ProductSearch } from "../components";
import { COLORS } from "../themes";
const Stack = createNativeStackNavigator();

function ShopNavigator({}) {
    return (
        <Stack.Navigator initialRouteName="Home"
        screenOptions={() => ({
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 80,
            },
            headerTitleStyle: {
              fontSize: 16,
            },
            headerTintColor: COLORS.text,
            animation: 'slide_from_bottom',
           
          })}>
            <Stack.Screen name="Home" component={Home} options={{ title: 'NUMA-SHOP' }}/>
            <Stack.Screen name="Categories" component={Categories} options={{ title: 'CATEGORIES', headerBackTitle:'Back' }} />
            <Stack.Screen name="ProductFiltered" component={ProductFiltered} options={{ title: 'PRODUCTS', headerBackTitle:'Back' }}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'PRODUCT DETAIL',  headerBackTitle:'Back' }}/>
            <Stack.Screen name= "ProductSearch"  component={ProductSearch} options={{ title: 'PRODUCTS', headerBackTitle:'Back' }}/>
            <Stack.Screen name= "AllProducts" component={AllProducts} options={{ title: 'PRODUCTS', headerBackTitle:'Back' }} /> 
            <Stack.Screen name="Orders" component={Orders}/>                 
            
        </Stack.Navigator>
    )
}


export default ShopNavigator;