import { StyleSheet } from 'react-native';
import { Colors } from './constances/Colors';

const styles = StyleSheet.create({
    container: {
        marginTop:50
    },

    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:12,
        backgroundColor: Colors.primary,
        height:70,
        marginBottom:15
    },
    headerTitle:{
        fontSize:30,
        fontFamily:'shirk',
        color:Colors.light
    },
    container1: {
        width:"100%",
        height:"100%",
        backgroundColor:Colors.light,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    defaultBtn :{
        height:48,
        borderRadius:25,
        width:"95%",
        alignItems:'center',
        justifyContent:'center'
    },
    addBtn :{
        backgroundColor:Colors.danger,
    },
    defaultText:{
        fontFamily : 'inter',
    },
    textBtnDefault :{
        color :Colors.light,
        fontSize:17
    },
    container2 :{
        width:'100%',
        height:"80%",
        flex:1,
        marginTop:16,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:Colors.warning,
    },
    modalContainer :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor :Colors.warning
    },
    modalMain:{
        backgroundColor:"#FFF",
        width:"90%",
        borderRadius:10,
        alignItems:'center',
        height:250
    },
    textHeaderModal :{
        color:Colors.primary,
        fontSize:18,
        textTransform:'uppercase',
        marginTop:20
    },
    input :{
        borderWidth:1,
        padding:12,
        borderColor:Colors.secondary,
        borderRadius:25,
        marginTop:18,
        textAlign:'center',
    },
    containerMainbtn :{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        padding:12,
        marginTop:22
    },
    modalBtnAdd : {
        backgroundColor:Colors.success,
        width:"48%"
    },
    modalBtnAnnu : {
        backgroundColor:Colors.danger,
        width:"48%"
    }

  });
  export default styles;