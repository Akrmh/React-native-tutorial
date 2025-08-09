import { useState } from "react";
import { View, Button, ActivityIndicator } from "react-native"

const TheIndicator = () => {
      const [isLoading, setIsLoading] = useState(true);
    
  return (
    <View style={{height:500}}>
        
              <Button title="Toggle" onPress={()=>setIsLoading(!isLoading)}/>
              <ActivityIndicator
              style={{
                flex:1,
                justifyContent:'center',
                alignContent:'center'
              }}
              color={'red'}
              size={'small'}
              animating={isLoading}
              /> 
    </View>
  )
}

export default TheIndicator