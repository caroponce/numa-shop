import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    containerList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black'
      
      },
      container: {
        
      },
      bestText: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10, 
      },
      bestItemList: {
        width: '50%',
        padding: 10,
      },
      image: {
        width: '100%',
        height: '100%',
        
      },
      imageContainer: {
        width: '48%',
        aspectRatio: 1,
        margin: 4,
       
      },
      seeMoreButton: {
        marginTop: 15,
        padding: 5,
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 30
      }
})