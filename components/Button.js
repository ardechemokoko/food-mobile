import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../AppStyle';

function Button({props,children}) {
  return (
    <Pressable style={styles.defaultBtn}>
        <View>
            {children}
        </View>
    </Pressable>
  )
}
export default Button;