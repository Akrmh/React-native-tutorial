import { View, Image } from "react-native"

const ImageStyle = () => {
  return (
    <View>
         <Image
      source={require('@/assets/images/icon.png')}
      style={{
        width:100,
        height:100
        }}
      >
      </Image>
    </View>
  )
}

export default ImageStyle