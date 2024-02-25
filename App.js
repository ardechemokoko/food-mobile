import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Colors }from './constances/Colors'
import Header from './components/Header';
import styles from './AppStyle';
import Button from './components/Button';
import TextCustomer from './components/TextCustomer';
import ModalCustomer from './components/Modal';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "inter": require("./assets/fonts/Inter-VariableFont_slnt,wght.ttf"),
    "shirk": require("./assets/fonts/Shrikhand-Regular.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }
  //data for modal
  const [visible,setVisible]=useState(false);
  
  const updateParentState = (newValue) => {
    setVisible(newValue);
  };



  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <Header />
      <View style={styles.container1}>
        <Button onPress={()=>setVisible(true)} style={styles.addBtn}>
          <TextCustomer name="Ajouter un produit" style={styles.textBtnDefault}/>
        </Button>
        <View style={styles.container2}>
      </View>
      </View>
      <Modal
          animationType="slide"
          visible={visible}
          onRequestClose={() => {
            setVisible(false);
          }}

        >
        <ModalCustomer updateParentState={updateParentState} />
      </Modal>
     
  
      <StatusBar style="auto" />
    </View>
  );
}

