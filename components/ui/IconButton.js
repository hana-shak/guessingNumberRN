import { Pressable, View, Text, StyleSheet, NativeEventEmitter  } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ name, size, color, onPress }){
    return(
        <Pressable
           style={({ pressed})=>[styles.button, pressed && styles.pressed]}
           onPress = {onPress}
        >
            <Ionicons
               name={name}
               color={color}
               size={size}
            />
        </Pressable>
    )
};

const styles = StyleSheet.create({
     button:{
        margin:8,
        borderRadius:20,
     },
     pressed:{
         opacity:0.7
     }
});

export default IconButton; 