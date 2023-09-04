import {  View, ScrollView } from "react-native";
import { styles } from "./styles";
import CategoryItem from "../categoryItem";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../../store/categories/api";
import useOrientation from "../../../hooks/useOrientation";
import {ORIENTATION} from '../../../constants/orientation'
const CategoryList  = ({navigation, route}) => {
    const orientation = useOrientation();
    const {data, isLoading, error} = useGetCategoriesQuery();
    const goDetail = ({categoryId}) => {
        navigation.navigate("ProductFiltered", {categoryId})
    }
 
    return(
        <View style={styles.container}>
            
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            >
            {
                data?.map((category) => (
                    <View style={styles.listCategory} key={category.id}>  
                       <CategoryItem categoryName={category.categoryName} goDetail={() => goDetail({categoryId: category.id})}/>
                     </View>
                ))
            }
            </ScrollView>
        </View>
    )
}

export default CategoryList;