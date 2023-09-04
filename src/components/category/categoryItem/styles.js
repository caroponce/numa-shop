import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:  COLORS.primary,        
    borderRadius: 100,
     marginHorizontal: 5,
    height: 70,
    width: 70,
    
  },
  containerLandscape: {
    backgroundColor:  COLORS.primary,        
    borderRadius: 100,
     marginHorizontal: 20,
    height: 70,
    width: 70,
  },
  categoryName: {
    flex: 1,   
    fontSize: 9,
    color: COLORS.text,
    padding: 5,   
    paddingTop: 30   
   

},
categoryItem:{  
  aspectRatio: 1,
  justifyContent: "center",
  alignItems: "center",
},
  });