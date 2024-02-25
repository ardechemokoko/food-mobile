import React, { Component, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import styles from '../AppStyle'
import TextCustomer from './TextCustomer'
import Button from './Button'


const Modal = ({updateParentState,handelProduit}) =>{
  const handelChangeState = () =>{
    updateParentState(false)
  }
  const [val, setVal] =useState();
  const [error,setError] = useState(false);

  

  const handelSubmit = () => {
    if(val !== ''){
      handelProduit(val);
    }
    else{
     setError(true)
    }
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
            value={val}
            style={styles.input}
            />
            <Text style={styles.textError}>{error ? 'Ce champs est obligatoire':null}</Text>
          </View>
          <View style={styles.containerMainbtn}>
                <Button 
                onPress={()=>handelSubmit()}
                style={styles.modalBtnAdd}>
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
