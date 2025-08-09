import { View, Button,Alert } from "react-native"

const ButtonStyle = () => {
  return (
    <View>
          <Button
        title="Delete My Account"
        onPress={() =>
          Alert.alert("Are You Sure", "Your Account will be deleted",
            [
              {text:'yes', onPress:()=>Alert.alert('Your Account Deleted')},
              {text:'No'}
            ]
          )
        }
      />
    </View>
  )
}

export default ButtonStyle