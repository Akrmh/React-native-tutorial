import { StyleSheet, Text, View } from "react-native"

const Welcome = ({name, country, style}) => {
  return (
    <View style={style}>
        <Text style={[styles.text, styles.textName]}>Welcome Your Name Is {name}</Text>
        <Text style={[styles.text, styles.textCountry]}>And your country is {country}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize:20,
    fontWeight:'bold'
  },
  textName: {
    color:'white',

  },
  textCountry: {
    color:'orange',
  }
})

export default Welcome