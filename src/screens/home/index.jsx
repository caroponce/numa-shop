import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { CategoryList, Input, ProductSearch, BannerImage, BestItems } from "../../components";
import { useState } from "react";
import PRODUCTS from '../../constants/products.json'
import { Ionicons} from '@expo/vector-icons'
import useOrientation from "../../hooks/useOrientation";
import {ORIENTATION} from '../../constants/orientation'
const Home = ({navigation}) => {
  const orientation = useOrientation();
    const [searchResults, setSearchResults] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');
    const handleSearch = (text) => {
        if (text === '') {
          setSearchResults([]); 
          setSearchProduct('');   
        } else {
          const results = PRODUCTS.filter(
            (product) =>
              product.description.toLowerCase().includes(text.toLowerCase())
          );
          setSearchResults(results);
          setSearchProduct(text);
        }
      };
   
    const goDetail = (productId) => {
      const product = PRODUCTS.find(product => product.id === productId);
      if (product) {
        navigation.navigate('ProductDetail', { productId: product.id });
      }
    }
    const deleteSearch = () => {
      setSearchProduct(''); 
      setSearchResults([]); 
    }
    const seeAll = () => {
      navigation.navigate("AllProducts")
     }
    return(
      <ScrollView>
      <View style={styles.container}>
      <Input handleSearch={handleSearch} searchProduct={searchProduct} value={searchProduct} />
      {searchProduct.length > 0 &&<Ionicons style={styles.clearIcon} onPress={deleteSearch}  name="close-circle" size={25} color="black" />}
      <CategoryList navigation={navigation} />

    {searchProduct !== '' ? (
      searchResults.length > 0 ? (
        
        <ProductSearch searchResults={searchResults} goDetail={goDetail} />
      ) : (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>No se encontraron productos.</Text>
        </View>
      )
    ) : null}

    {searchProduct == '' && ( 
      <View> 
      <BannerImage />
      <BestItems seeAll={seeAll} goDetail={goDetail}/>
    </View>
    )}    
    
  </View>
  </ScrollView>
  );
};

export default Home;