import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProductList } from "../../components";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../store/products/api";
const ProductFiltered = ({route, navigation}) => {
   const {categoryId} = route.params;
   const {data, error, isLoading} = useGetProductsByCategoryQuery(categoryId);
  
   const filteredByCategory = data?.filter((product) => product.categoryId === categoryId);
   const onHandleGoDetail = ({productId}) => {
    navigation.navigate('ProductDetail', {productId})
}
return(
    <View>
         <FlatList
        data={filteredByCategory}
        renderItem={({item}) => <ProductList  image={{ uri: item.image }} categoryType={item.type} name={item.name} price={item.price} onHandleGoDetail={() => onHandleGoDetail({productId: item.id})}  />}
        keyExtractor={(item) => item.id.toString()}
        />
         
    </View>
)
}

export default ProductFiltered;