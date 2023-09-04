import { View, Text, TextInput} from "react-native";
import { styles } from "./styles";

const Input = ({value, handleSearch}) => {
  
    return (
    
        <View style={styles.containerinput}> 
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                placeholderTextColor="#A8577E"            
                selectionColor="#A8577E"
                value={value}
                placeholder="Buscar"
                onChangeText={handleSearch}
             />
      
            
        </View>
    );
};

export default Input;