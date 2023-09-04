import { Button, FlatList, View } from "react-native"
import { CategoryItem } from "../../components"
import { styles } from "./styles"
import { useSelector } from "react-redux"
import { useGetCategoriesQuery } from "../../store/categories/api"

const Categories = ({}) => {
    const {data, error, isLoading} = useGetCategoriesQuery();
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({item}) => <CategoryItem categoryName={item.categoryName} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.categoryList}
            style={styles.categoryContainer}
            />
        </View>
        </View>
    )
}

export default Categories;