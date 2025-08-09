import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputs = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
       style={styles.input} 
       onChangeText={setName} 
       placeholder="Inter your age"
      //  secureTextEntry={true}
       keyboardType="numeric"
       autoCapitalize="characters"
        // autoFocus={true}
       />

       <TextInput 
       placeholder="Description..."
       multiline={true}
       style={styles.muti}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  muti:{
    minHeight: 120,
    fontSize: 20,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  }
});
export default TextInputs;
