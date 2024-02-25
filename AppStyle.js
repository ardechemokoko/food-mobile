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
        backgroundColor:Colors.danger,
        width:"95%",
        alignItems:'center',
        justifyContent:'center'
    },
    defaultText:{
        fontFamily : 'inter',
    },
    textBtnDefault :{
        color :Colors.light
    },
    container2 :{
        width:'100%',
        height:"80%",
        flex:1,
        marginTop:16,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:Colors.warning,
    }

  });
  export default styles;