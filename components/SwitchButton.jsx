import { useState } from "react"
import { SafeAreaView, Switch, } from "react-native"

const SwitchButton = () => {

    const [isTrue, setIsTrue] = useState(false);


  return (
    <SafeAreaView>
        <Switch 
        value={isTrue}
        onValueChange={setIsTrue}
        trackColor={ {true: 'green', false: 'red'} }
        />
    </SafeAreaView>
  )
}

export default SwitchButton