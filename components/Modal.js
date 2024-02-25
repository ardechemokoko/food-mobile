import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../AppStyle'
import TextCustomer from './TextCustomer'
import Button from './Button'

const Modal = ({updateParentState}) =>{
  const handelChangeState = () =>{
    updateParentState(false)
  }
  return(
    <View style={styles.modalContainer}>
        <View style={styles.modalMain}>
          <View>
           <TextCustomer
            name="Enregistrement d'un produit" 
            style={styles.textHeaderModal}
            />
            <TextInput 
            style={styles.input}
            />
          </View>
          <View style={styles.containerMainbtn}>
                <Button style={styles.modalBtnAdd}>
                  <TextCustomer name="Valider" style={styles.textBtnDefault}/>
                </Button>
                <Button 
                onPress={()=>handelChangeState()}
                style={styles.modalBtnAnnu} >
                  <TextCustomer name="Annuler" style={styles.textBtnDefault}/>
                </Button>
             
          </View>

        </View>
        
      </View>
  )
}
export default Modal;
