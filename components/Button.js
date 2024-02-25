import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../AppStyle';

function Button({onPress,children,style}) {
  return (
    <Pressable 
    onPress={onPress}
    style={{...styles.defaultBtn, ...style}}>
        <View>
            {children}
        </View>
    </Pressable>
  )
}
export default Button;