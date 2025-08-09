import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native"
import { data2 } from "../app/data2"

const ProductionsList = () => {
  return (
    <SafeAreaView>
        <SectionList
            sections={data2}
            renderItem={({item})=>(
                <View style={styles.card}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section}) => (
                <View style={styles.card}>
                    <Text style={styles.text}>{section.type}</Text>
                </View>
            )}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    // height: 600,
  },
  card: {
    backgroundColor: "darkorange",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});


export default ProductionsList