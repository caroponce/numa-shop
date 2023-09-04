import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import { COLORS } from '../../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../../store/cart/cartSlice';
const CartItem = ({id, categoryId, name, price, image, currency, quantity, stock , category }) => {
  const dispatch = useDispatch();
  // const stockText = useSelector(state => state.cart.stockText);
  // const [temporaryStockMessage, setTemporaryStockMessage] = useState('')
  const onIncrease = () => {
    dispatch(increaseQuantity({ id, categoryId, name, price, image, currency, quantity, stock, category }));
  }

  const onDecrease = () => {
    dispatch(decreaseQuantity({ id, categoryId, name, price, image, currency, quantity, stock , category}))
  }

  const onRemoveItem = () => {
    dispatch(removeItem({ id, categoryId, name, price, image, currency, quantity, stock, category}))
  }
  // useEffect(() => {
  //   if (stockText) {
  //     setTemporaryStockMessage(stockText);
  //     const timer = setTimeout(() => {
  //       setTemporaryStockMessage('');
  //     }, 2500);

  //     return () => clearTimeout(timer);
  //   }
  // }, [stockText]);
    return(
        <View style={styles.container}>
            {/* {temporaryStockMessage && <Text style={styles.stockText}>{temporaryStockMessage}</Text>} */}

            <View style={styles.imageContainer}>
             <Image source={{ uri: image}} style={styles.image}/>
            </View>
            <View style={styles.detailContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}> ${price}</Text>
            <Text style={styles.quantity}> Cantidad: {quantity}</Text>
            <View style={styles.actionContainer}>
          
          <TouchableOpacity style={styles.decreaseButton} onPress={onDecrease} >
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.increaseButton} onPress={onIncrease}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          </View>
            </View>
            <View>
            <TouchableOpacity style={styles.deleteButton} onPress={onRemoveItem}>
            <Ionicons name="trash" size={14} color={COLORS.white} />            
          </TouchableOpacity>         
          </View>
          
        </View>
    )
}

export default CartItem;