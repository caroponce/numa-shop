import { FlatList, View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";


const ProductList = ({productId, image, categoryType, name, price, onHandleGoDetail}) => {
    
    return (
        <View style={styles.containerProduct}>                
        <Image source={image} style={styles.productImage}/>
        <View style={styles.detailProduct}>
        <Text style={styles.productName}> {categoryType} {name} </Text>
        <Text style={styles.productPrice }> ${price}</Text>
        <TouchableOpacity
         style={styles.detalle}
        onPress={() => onHandleGoDetail(productId)}>
         <Text style={styles.textdetalle}>Detalle</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default ProductList;