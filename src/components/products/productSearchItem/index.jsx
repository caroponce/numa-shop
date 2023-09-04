import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
const ProductSearchItem = ({ image, goDetail, productId}) => {

    
    return(
        <View style={styles.container}>
             <TouchableOpacity style={styles.productContainer} onPress={()=> {goDetail(productId)}}>
              <Image style={styles.productImage} source={image} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductSearchItem;