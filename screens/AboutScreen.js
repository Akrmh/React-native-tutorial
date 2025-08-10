import { Button, Text, View } from "react-native"

function AboutScreen ({navigation, route}){

    const {country} = route.params;
    return(
    <View>
        <Text>About Screen</Text>
        <Text>Your country is {country}</Text>
        <Button title="Change country" onPress={() => navigation.setParams({country:"SD"})}/>
    </View>
    )
}
export default AboutScreen