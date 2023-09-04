import { StyleSheet } from "react-native";
import {COLORS} from '../../themes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    
      },
      buttonContainer: {
        
        backgroundColor: COLORS.primary,
        padding: 14,
        marginHorizontal: 25,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
})