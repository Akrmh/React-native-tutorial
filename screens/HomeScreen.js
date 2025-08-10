import { Button, Text, View } from "react-native"

function HomeScreen ({navigation, route}){

    const {name, age} = route.params;
    return(
    <View>
        <Text> your name is {name} and your age is {age}</Text>
        <Button title="Go to about me" onPress={()=>navigation.navigate("About")}/>
    </View>
    )
}
export default HomeScreen