import { View, ScrollView, Text, Image, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ProductItem, SizeGuide } from "../../components";
import { useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../store/products/api";
import { useCreateWishListMutation } from "../../store/favoritos/api";
import { addToWishList } from "../../store/wishList/wishiListSlice";
const ProductDetail = ({route}) => {
    const {productId} = route.params;
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishList.products)
    const localId = useSelector((state => state.auth.user.localId))
    const {data, isLoading, error} = useGetProductByIdQuery(productId);
    const productsFiltered = data?.find((product)=> product.id === productId)
    const [createWishList] = useCreateWishListMutation();
    // const [isVisible, setIsvisible] = useState(false);
    // const goToSizeGuide = () => {
    //     setIsvisible(true)
   
    // }
    
    const addTocart = () => {
        dispatch(addToCart(productsFiltered));
    }
    console.log({wishList})
    const addToWishlist = async () => {        
        const newProduct = {
            id: Math.floor(Math.random() * 1000),
            product: productsFiltered,
            productId: productsFiltered.id,            
            user: {
                id: localId,                      
            },};
        try {
            
          await createWishList(newProduct);
          dispatch(addToWishList(newProduct))
        } catch (e) {
          console.warn({ error, e });
        }
    }
   
    return(
        <ScrollView contentContainerStyle={styles.container}>

           <ProductItem products={productsFiltered} addTocart={addTocart} addToWishList={addToWishlist}/>

        </ScrollView>
    )
}

export default ProductDetail;