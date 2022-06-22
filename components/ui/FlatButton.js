import { auto } from "async";
import { Pressable, View, Text, StyleSheet } from "react-native";

function FlatButton({ children, onPress }){
    return(
        <Pressable
          style={({ pressed })=> [styles.button, pressed && styles.pressed] }
          onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button:{
        paddingVertical:6,
        paddingHorizontal:12,
    },
    pressed:{
        opacity:0.7
    },
    buttonText:{
        textAlign:"center", 
        color:"orange"

    }

})

export default FlatButton;