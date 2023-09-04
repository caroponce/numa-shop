import { StyleSheet } from "react-native";
import {COLORS} from '../../themes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center', 
         justifyContent: 'flex-start', 
        paddingVertical: 20, 
      },
      header: {
        marginBottom: 20, 
      },
      touchableContainer: {
         alignItems: 'center',
        marginTop: 30,
      },
      touchableContainerLandscape: {
        flexDirection: 'row', 
        flexWrap: 'wrap',        
        marginHorizontal: 60,
        marginTop: 30
      },
      touchable: {
        
        width: 350, 
        height: 50,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
         alignItems: 'center', 
         justifyContent: 'center', 
        borderRadius: 10
      },
      touchableLandscape: {
        width: 300, 
        height: 50,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
         alignItems: 'center', 
         justifyContent: 'center', 
        borderRadius: 10,
        margin: 10
      },
      textProfile: {
        fontSize: 16,
      },
})