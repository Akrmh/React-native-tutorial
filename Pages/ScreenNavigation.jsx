import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import AboutScreen from "@/screens/AboutScreen";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ name: "Akrmh", age: 35 }}
        options={{
            title: "Home Screen",
            headerStyle:{
                backgroundColor: "darkorange",
                borderBottomColor: "darkred",
                borderBottomWidth: 5,
            },
            headerTintColor: "white",
            headerRight: () => <Text style={{color:"white"}}>Right</Text>,
            headerLeft: () => <Text style={{color:"white"}}>Left</Text>,
            headerTitleAlign: "center",
            // header: () => <Text>Header</Text>

            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (text) => console.log("Text Changed"),
                onSubmitEditing: (text) => console.log("Search Submitted"),
                onClose: (text) => console.log("Search Closed"),
                onOpen: (text) => console.log("Search Opened")
            }
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ country: "Sudan" }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default ScreenNavigation;
