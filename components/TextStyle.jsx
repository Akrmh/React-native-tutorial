import { View, Text } from "react-native"

const TextStyle = () => {
  return (
    <View>
         <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
        }}
      >
        Hello word
      </Text>
    </View>
  )
}

export default TextStyle