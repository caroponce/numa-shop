import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import {SizeGuide} from '../../SizeGuide'
import { useState } from "react";
const ProductItem = ({products, addTocart, addToWishList}) => {
    const [isVisible, setIsvisible] = useState(false);
    const goToSizeGuide = () => {
        setIsvisible(true)
   
    }
    return(
    <View>
         <View style={styles.textcontainer}>
        <Text style={styles.text}> {products?.type} {products?.name} </Text>
        <Text style={styles.text}> {products?.description}</Text>
        <Text style={styles.text}> ${products?.price} </Text>
        </View>
        <View style={styles.imageContainer}>
        <Image source={{ uri: products?.image }} style={styles.productImage}/>
        </View>
         {/* <TouchableOpacity style={styles.sizeContainer} onPress={goToSizeGuide} >
        <SizeGuide setIsvisible={setIsvisible} isVisible={isVisible}/>
     
        <Text style={styles.sizeText}> Tabla de talle </Text>
        </TouchableOpacity>   */}

        <TouchableOpacity style={styles.addWishList} onPress={addTocart}>
        <Text style={styles.textWishList}> Agregar al carrito</Text>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.addWishList} onPress={addToWishList}>
        <Text style={styles.textWishList}> Agregar a favoritos </Text>
        </TouchableOpacity>
        <View>            
        </View>
      
       </View>
    )
}

export default ProductItem;