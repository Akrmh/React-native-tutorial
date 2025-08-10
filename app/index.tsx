import Welcome from "@/components/Welcome";
import BoxShadow from "@/components/BoxShadow";
import ButtonStyle from "@/components/ButtonStyle";
import TextStyle from "@/components/TextStyle";
import ImageStyle from "@/components/ImageStyle";
import PressableText from "@/components/PressableText";
import ModalStyle from "@/components/ModalStyle";
import TheIndicator from "@/components/TheIndicator";
import StatusBarStyle from "@/components/StatusBarStyle";
import FlexBox from "@/components/FlexBox";
import SafeAreaview from "@/components/SafeAreaview";
import RanderUsers from "@/components/RanderUsers";
import ProductionsList from "@/components/ProductionsList";
import TextInputs from "@/components/TextInputs";
import SwitchButton from "@/components/SwitchButton";
import Login from "@/Pages/Login";
import ApiFetching from "@/Pages/ApiFetching";
import ScreenNavigation from "@/Pages/ScreenNavigation";

import { ScrollView, StyleSheet, View } from "react-native";

const index = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
     <ScreenNavigation />
     {/* <ApiFetching /> */}
      {/* <Login /> */}
      {/* <TheIndicator />
      <SwitchButton />
      <SafeAreaview />
      <TextInputs />
      <ModalStyle />
      <TextStyle />
      <ButtonStyle />
      <ImageStyle />
      <PressableText />
      <StatusBarStyle />
      <Welcome
        style={{ padding: 10, backgroundColor: "red" }}
        name={"Akrmh"}
        country={"Sudan"}
      />
      <ProductionsList />
      <RanderUsers />
      <BoxShadow />
      <View style={styles.container}>
        <FlexBox style={{ backgroundColor: "blue",  }} />
        <FlexBox style={{ backgroundColor: "red" }} />
        <FlexBox style={{ backgroundColor: "green" }} />
        <FlexBox style={{ backgroundColor: "yellow" }} />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    height: 500,
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // gap: 50,
  }
})


export default index;
