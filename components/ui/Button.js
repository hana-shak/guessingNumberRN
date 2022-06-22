import { ViewBase, Text, StyleSheet, Pressable, View } from "react-native";


function Button({ children, onPress}){
    return(
        <Pressable
           style={({ pressed})=> [styles.button, pressed && styles.pressed ]}
           onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>

        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
     button:{
         borderRadius:6,
         backgroundColor:'#c30b64',
         paddingVertical:6,
         paddingHorizontal:12,
         elevation:2,
         shadowColor:'black',
         shadowOffset: {width:1, height:1},
         shadowOpacity:0.25,
         shadowRadius:4
     },
     pressed:{
         opacity:0.7
     },
     buttonText:{
         textAlign: 'center'
     }

});