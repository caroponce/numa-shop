
import { View, Text, Image } from 'react-native';
import { styles } from './styles'

const WishiListItem = ({ product}) => {

   

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
             <Image source={{ uri: product?.image}} style={styles.image}/>
            </View>
            <View style={styles.detailContainer}>
            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.price}> ${product?.price}</Text>
            <View style={styles.actionContainer}>    
          
          </View>
          </View>
        
        </View>
    )
}

export default WishiListItem;