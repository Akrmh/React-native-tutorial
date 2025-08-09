import { useState } from "react";
import { View, Text, Modal, Button } from "react-native";


const ModalStyle = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View>
      <Modal visible={isOpen} animationType="fade">
        <Text>You are opening React native tutorial</Text>
        <Button title="Continue" onPress={() => setIsOpen(false)} />
      </Modal>{" "}
      
    </View>
  );
};

export default ModalStyle;
