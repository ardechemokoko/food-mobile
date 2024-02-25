import React, { Component } from 'react'
import {View ,Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../AppStyle';
import { Colors } from "../constances/Colors"

const Header= () =>{
    return(
    <View style={styles.header}>
        <View>
        <Icon name="bars" size={22} color={Colors.light} />
        </View>
        <View>
        <Text style={styles.headerTitle}>dorjaFood</Text>
        </View>
        <View>
        <Icon name="bell" size={22} color={Colors.light} />
        </View>
    </View>
    )
}




export default Header;


