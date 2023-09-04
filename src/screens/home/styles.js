import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";
export const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: COLORS.background
},
productImage: {
  width: '100%',
  height: 250,
},
search: {
  backgroundColor: 'white'
},
textSearch: {
  alignItems: 'center',
  justifyContent: 'center'
},
imageContainer: {
flex: 1,
marginTop: 15,
},
image: {
width: '100%',
height: 310,
 borderColor: 'black',
 borderWidth: 2
},
arrowIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 130,

},
notFoundContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 25
},
notFoundText: {
  fontSize: 20,

},
clearIcon: {
  position: 'absolute',
  zIndex: 2,
  right: 39,
  top: 17, 
},
text: {
  fontSize: 20,
  textAlign: 'center', 
  marginTop: 10,
}
  });