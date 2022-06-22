import { ViewBase, Text, TextInput, StyleSheet , View} from "react-native";

function Input({
   label,
   keyboardType,
   secure,
   onUpdateValue,
   value,
   isInvalid
}) {
    return(
       <View style={styles.inputContainer}>
           <Text style={[styles.label , isInvalid && styles.labelInvalid]}>
               {label}
           </Text>
           <TextInput
             style={[styles.input , isInvalid && styles.inputInvalid]}
             autoCapitalize={false}
             autoCapitalize="none"
             keyboardType={keyboardType}
             secureTextEntry={secure}
             onChangeText={onUpdateValue}
             value={value}
           /> 
       </View>
)
};

const styles = StyleSheet.create({
      inputContainer:{
          marginVertical: 8,
      },
      label:{
          color: 'white',
          marginBottom:4,
      },
      labelInvalid:{
          color : '#c30b64'
      },
      input:{
          paddingVertical:8,
          paddingHorizontal:6,
          backgroundColor:'#f9beda',
          borderRadius:4,
          fontSize:16
      },
      inputInvalid:{
          backgroundColor:'#f9beda'
      }
})

export default Input;

