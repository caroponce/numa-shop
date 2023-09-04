
import { styles } from "./styles";
import { View, Modal, Image, Button, Text } from "react-native";

const SizeGuide = ({setIsvisible, isVisible}) => {
    return(
        <Modal visible={isVisible}>
         <View style={styles.modalContainer}>
         <View style={styles.modalbuttoncontainer}>
           <Button
              title="X"
              color="black"
              onPress={() => setIsvisible(false)}
            /> 
           </View>
            <Text style={styles.textSize}> Tabla de Talle </Text>
            <Image source={require('../../../assets/sizeGuide.png')}/>         
          </View>
        </Modal>
       
    )
}

export default SizeGuide;