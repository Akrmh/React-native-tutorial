import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const [successMsg, setSuccessMsg] = useState('')

  const validateForm = () =>{
    let errors = {};

     if (userName.length < 3) {
        errors.username = 'Username must be more than 3 characters'
    }
    if (password.length < 3) {
        errors.password = 'password must be more than 3 characters'
    }

    if (!userName) {
        errors.username = 'Username is required'
    }
    
    if (!password) {
        errors.password = 'Password is required'
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors)
        setSuccessMsg('')
        return false;
    } else {
        setErrors({})
        setSuccessMsg('Account created successfully')
        return true;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />

        {
            errors.username && <Text style={{color: 'red'}}>{errors.username}</Text>
        }

        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

         {
            errors.password && <Text style={{color: 'red'}}>{errors.password}</Text>
        }

        <Button title="Login" onPress={validateForm} />

        {
            successMsg && <Text style={{color:'green'}}>{successMsg}</Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 480,
    backgroundColor: "orange",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  form: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  textInput: {
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    borderColor: "#ccc",
  },
});

export default Login;
