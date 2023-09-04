import { View, Image, Touchable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { useState } from "react";
const BannerImage = ({}) => {
    
    const [shopNowImage, setShopNowImage] = useState(false)
    const changeImage = () => {
        setShopNowImage(!shopNowImage)
      }
    return(
    <View style={styles.imageContainer}>
        <View style={styles.arrowIcon}>
          <AntDesign
            name="arrowright"
            size={30}
            color={COLORS.primary}
            onPress={changeImage}
          />
        </View>
        {shopNowImage ? (
          <Image
            style={styles.image}
            source={require('../../../assets/shopnow.png')}
          />
        ) : (
          <Image
            style={styles.image}
            source={require('../../../assets/ss24.png')}
          />
        )}
 
      </View> 
    )
}

export default BannerImage;