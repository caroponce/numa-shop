import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
const BestItems = ({seeAll, goDetail}) => {
    
  const products = useSelector((state) => state.products.data)
    const randomProducts = [];
    while (randomProducts.length < 4) {
      const randonNumber = Math.floor(Math.random() * products.length);
      if (!randomProducts.includes(products[randonNumber])) {
        randomProducts.push(products[randonNumber]);
      }
    }
        return(
        <View style={styles.container} >
            <Text style={styles.bestText}> Favoritos del Mes </Text>
            
            <View style={styles.containerList}>
        {randomProducts.map((product) => (
          <TouchableOpacity style={styles.imageContainer} onPress={() => goDetail(product.id)} key={product.id}>
          <Image key={product.id} source={{ uri: product.image }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.seeMoreButton} onPress={seeAll} > 
        <Text> Ver todo </Text>
         </TouchableOpacity>
        </View>
    )
}

export default BestItems;