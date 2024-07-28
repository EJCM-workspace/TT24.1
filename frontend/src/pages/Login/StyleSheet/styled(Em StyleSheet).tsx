import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
    },
    containerLogo:{
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:120,
        borderRadius:100,
        marginBottom:20,
        backgroundColor:'#c6c6c6'
    },
    logoZoe:{
        width:100,
        height:100,
    },
    TitleZoe:{
    fontSize:36,
    fontWeight:400,
    fontFamily: 'Roboto',
    marginBottom: 60,
    },
    inputs:{   
        width:'100%',
        gap:8,

    },

    containerInput:{
        width:"100%",
        paddingHorizontal:12,
        paddingVertical:8,
        borderWidth:1,
        borderColor: 'grey',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    inputStyles:{
        width:'100%',
        height:40,
        fontSize:20,   
    },
    inputTitle:{
        fontSize:20,
        fontWeight:'400',
    },
    passwordEye:{
        width:24,
        height:26
    },
    ButtonStyle:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:40,
        width:'100%',
        height:46,
        borderRadius:5,
        backgroundColor:"#007C82"
    },
    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'500',
    },
   forgotPassword:{
    fontSize:14,
    fontWeight:'400',
    alignSelf:'flex-end'
   },
   enterWithContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 40,
    flexDirection:'row',
    gap:10,
   },
   enterWithText:{
    fontSize:15,
    fontWeight:'400'
   },
   enterWithBar:{
    height:1,
    width:'35%',
    backgroundColor:'grey'
   },
   allsocialmedia:{
    flexDirection:'row',
    gap:16,

   },
   socialMediaContainer:{
    width:162,
    height:46,
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'grey',
    borderRadius:5,
   },
   socialMediaText:{
    fontSize:16,
    fontWeight:'400',
    color:'#222831',
    opacity: 0.8,

   },
   socialMediaImage:{
    width:20,
    height:20,
   },
   RegisterTextContainer:{
    flexDirection:'row',
    marginTop: 60,
    gap:10,

   },
    RegisterText:{
    fontSize:15,
    fontWeight:'400'
   }

})