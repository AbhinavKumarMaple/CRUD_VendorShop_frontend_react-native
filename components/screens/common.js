import {   StyleSheet } from "react-native";

export const commonStyles  =StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        padding:16,
        position:"relative",
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15,
    },
    icon:{
        fontSize: 30,
        borderRadius: 10,
        borderColor: "black",
        color:"grey",
    },
    page_title:{
        fontSize:26,
        fontWeight:"bold",
        marginTop:-4,
        marginLeft:20,
    },
})