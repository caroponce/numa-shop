import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { ProductList } from "../../components";
import { useGetProductsQuery } from "../../store/products/api";

const AllProducts = ({ navigation}) => {
    const {data, isLoading, error} = useGetProductsQuery();
    const onHandleGoDetail = ({productId}) => {
        navigation.navigate('ProductDetail', {productId})
    }
    return(
        <View>
            <FlatList
            data={data}
            renderItem={({item}) => <ProductList  image={{ uri: item.image }} categoryName={item.categoryName} name={item.name} price={item.price} onHandleGoDetail={() => onHandleGoDetail({productId: item.id})}  />}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default AllProducts;