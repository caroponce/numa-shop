import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CartItem } from "../../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAll } from "../../store/cart/cartSlice";
import { useCreateOrderMutation } from "../../store/Orders/api";
const Cart = ({navigation}) => {

  const localId = useSelector((state => state.auth.user.localId))
  const cart = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch();    
  const [createOrder, {data, isLoading, isError, error}] = useCreateOrderMutation();
  const onRemoveAll = () => {
      dispatch(removeAll(cart));
    }


  const onCreateOrder = async () => {
    const newOrder = {
        id: Math.floor(Math.random() * 1000),
        items: cart,
        total,
        user: {
            id: localId,
            name: 'Carolina Ponce',
            address: 'Wonder 123',
            phone: '123456789',
            email: 'caro@gmail.com'        
        },
        payment: {
            method: 'VISA',
          },
          delivery: {
            method: 'UPS',
            trackingNumber: Math.floor(Math.random() * 1000),
          },
          createAt: Date.now(),
          finishedAt: '',
    };
    try {
      await createOrder(newOrder);
      onRemoveAll();
      navigation.navigate('Orders');
    } catch (e) {
      console.warn({ error, e });
    }
  
}

  return(
      
      <View style={styles.container}>
            <FlatList
            data={cart}
            renderItem={({ item }) => <CartItem {...item} />}
            keyExtractor={(item) => item.id.toString()}
          />
       {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Carrito vacío</Text>
      ) : (   <TouchableOpacity style={styles.deleteAllContainer} onPress={onRemoveAll}>
        <Text style={styles.deleteAll}>Eliminar Todo</Text>
      </TouchableOpacity>)} 
                       
      
      <View style={styles.checkoutContainer}>
      <TouchableOpacity style={styles.checkoutButton} onPress={onCreateOrder} >
                  <Text styles={styles.checkoutButtonText}> CheckOut</Text>
                  <View styles={styles.totalContainer}>                        
                  <Text style={styles.totalText}> Total </Text>
                  <Text style={styles.totalPriceText}> USD {total} </Text>
                  </View>
              </TouchableOpacity>
      </View>
    </View>
  );
};
     
  

export default Cart;