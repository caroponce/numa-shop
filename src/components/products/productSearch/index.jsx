import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import { styles } from "./styles";
import ProductSearchItem from "../productSearchItem/index";
const ProductSearch = ({searchResults, goDetail}) => {
 

    return(
        <View>
        <FlatList
          style={styles.search}
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductSearchItem
            image={{ uri: item.image }}
            goDetail={() => goDetail({productId : item.id})}
          />
          )}
        />
        </View>
    )
}

export default ProductSearch;