import { View, Text, FlatList } from "react-native";
import { useGetOrdersQuery } from "../../store/Orders/api";
import { OrderItem } from "../../components";
import { useSelector } from "react-redux";

const Orders = () => {
  const localId = useSelector((state) => state.auth.user.localId);
   const {data} = useGetOrdersQuery();
    const renderItem = ({ item }) => <OrderItem {...item} />;
    const keyExtractor = (item) => item.id.toString();
    const userOrders = data?.filter((order) => order?.user?.id === localId);
 
    console.log(userOrders)
    return (
      <View >
        <FlatList
        data={userOrders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
      </View>
    );
  };
  
  export default Orders;