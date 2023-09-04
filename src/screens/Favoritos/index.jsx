import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import WishiListItem from "../../components/wishList/wishListItem";
import { useSelector } from "react-redux";
import { useGetWishListQuery } from "../../store/favoritos/api";
import useOrientation from "../../hooks/useOrientation";
import {ORIENTATION} from '../../constants/orientation'
const Favoritos = () => {
  const orientation = useOrientation();
  const wishiList = useSelector((state) => state.wishList.items)
  const localId = useSelector((state) => state.auth.user.localId);
  const {data} = useGetWishListQuery();
  const userWishList = data?.filter((product) => product?.user?.id === localId)
  
  const groupedProducts = userWishList?.reduce((acc, product) => {
    if (!acc[product.productId]) {
      acc[product.productId] = product;
    }
    return acc;
  }, {});

  const uniqueProducts = groupedProducts ? Object.values(groupedProducts) : []

 
  return(
      <View style={orientation === ORIENTATION.LANDSCAPE ? styles.containerLandscape : styles.container}>
      <FlatList
      data={uniqueProducts}
      renderItem={({ item }) => <WishiListItem {...item}/>}
      keyExtractor={(item) => `${item.id}_${item.product?.id}`}

      />
      </View>
  )
}

export default Favoritos;