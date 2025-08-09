import React from 'react'
import { View, Text, Pressable, Button } from 'react-native'

const PressableText = () => {
  return (
    <View>
            <Button title="Click here" color={'red'} />

      <Pressable
      onPress={()=>{console.log('Press')}}
      onPressIn={()=>{console.log('PressIn')}}
      onPressOut={()=>{console.log('Press Out')}}
      onLongPress={()=>{console.log('onLongPress')}}
      >
        <Text>Pressable Text</Text>
      </Pressable>
    </View>
  )
}

export default PressableText