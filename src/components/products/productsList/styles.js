import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";
export const styles = StyleSheet.create({
    container : {
        flex: 1,      
      

    },
    productImage: {
        width: '100%',
        height: 250,
    },
      detailProduct:{
      marginTop: 10,
      alignItems: 'center'
      },
      productName: {
          fontSize: 16,
          fontWeight: 'bold',
        },
    
        productPrice: {
          fontSize: 14,
          marginTop: 5,
        },
        detalle: {
          backgroundColor: COLORS.background,
          margin: 5,
          borderColor: 'black',
          borderRadius: 2,
          borderWidth: 1,
      },
      clearIcon: {
        position: 'absolute',
        zIndex: 2,
        right: 39,
        top: 17,
      },
      goBack: {
        paddingHorizontal: 20,
        paddingBottom: 10,
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    })