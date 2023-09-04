import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
     alignItems: 'center',
     alignContent: 'center',

  },
  productImage: {
    width: '80%',
      height: 400,
      marginTop: 15,
      marginBottom: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  addWishList: {
    backgroundColor: COLORS.background,
    marginTop: 15,
    padding: 5,
    borderColor: 'black',
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 40,
    alignItems: 'center',

  },
  textcontainer: {
    alignItems: 'center',
    gap: 4,
    margin: 7,
  },
  text: {
    fontSize: 17,
    // fontFamily: 'Mulish-Regular'
  },
    textWishList:{

},
sizeContainer: {

},
sizeText: {
fontSize: 17,
textDecorationColor: 'black',
textDecorationLine: 'underline'
}
  });