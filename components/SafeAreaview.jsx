import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

const SafeAreaview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
    container:{
        height: 500,
        backgroundColor: 'darkgray',
    },
    text:{
        fontSize:25,
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                color: 'white',
                textAlign: 'left',
            },
            android: {
                 color: 'green',
                textAlign: 'center',
            },
            web: {
                 color: 'red',
                textAlign: 'right',
            },
        })
    }
})

export default SafeAreaview;
