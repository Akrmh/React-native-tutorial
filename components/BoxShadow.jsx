import { StyleSheet, Text, View } from "react-native"

const BoxShadow = () => {
  return (
    <View>
        <Text style={styles.box}>Hello World</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    box:{
        margin:10,
        width:200,
        height:200,
        backgroundColor:'orange',
        shadowColor:'black',
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity:0.5,
        shadowRadius: 50,
    }
})
export default BoxShadow