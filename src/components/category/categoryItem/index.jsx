import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../themes/colors";
import {styles} from './styles'
import useOrientation from "../../../hooks/useOrientation";
import {ORIENTATION} from '../../../constants/orientation'
const CategoryItem = ({categoryName, categoryId, goDetail}) => {
   const orientation = useOrientation();
    return (
          
            <TouchableOpacity style={orientation === ORIENTATION.LANDSCAPE ? styles.containerLandscape : styles.container}  underlayColor={COLORS.background} onPress={() => goDetail(categoryId)}>
            <View style={styles.categoryItem}>               
            <Text style={styles.categoryName}> {categoryName} </Text>           
            </View>
            </TouchableOpacity>
           
    )
}

export default CategoryItem;