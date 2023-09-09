import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Customer_Details } from "../database/Database";
import { commonStyles } from "./common";

const Customers = ({navigation})=>{
    const [search, setsearch] = useState("");
    const FilteredCustomers = Customer_Details.filter(person=>{
        return person.company_name.toLowerCase().includes(search.toLowerCase()) || person.name.toLowerCase().includes(search.toLowerCase()) || person.gstin_no.toLowerCase().includes(search.toLowerCase()) || person.pan_no.toLowerCase().includes(search.toLowerCase());
    })

    const CustomerCard = ({data})=>{
        return(
            <>
            <View>
                <Text 
                style = {{
                    fontSize:16,
                    fontWeight:"bold",
                    marginBottom:5,
                }}>
                    {data.company_name}
                </Text>

                <Text 
                    style ={{
                    fontSize:11,
                    marginBottom:5,}}
                    >
                    {data.address}
                </Text>
                <Text 
                    style ={{
                    fontSize:11,
                    color:"#ADD8E6",
                    marginBottom:5,
                    fontWeight:800,
                }}
                >
                    {data.name}
                </Text>
                <Text 
                    style = {{
                        fontSize:10,
                        fontWeight:600,
                        marginBottom:5,
                    }}>
                    GSTIN: {data.gstin_no}
                </Text>
                <Text 
                    style ={{fontSize:10,fontWeight:600,}}
                >
                    PAN: {data.pan_no}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop:10,
                    marginBottom:10,
                }}
            ></View>
            </>
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.container}>
            <View style ={{
                flexDirection:"row",
                alignItems:"center",
                marginBottom:15,
                // borderWidth:1,
                // borderColor:"red",
            }}>
                <TouchableOpacity>
                    <Ionicons 
                    name ="arrow-back"
                    onPress={()=>navigation.navigate("Home")}
                    style={commonStyles.icon}/>
                </TouchableOpacity>
                <Text style ={commonStyles.page_title}>Customers</Text>
            </View>
            <View style ={{
                flex:1,
                justifyContent:"center",
                position:"relative",
                marginBottom:30,
            }}>
                <Ionicons 
                    name ="search-outline"
                    style={{
                        fontSize: 20,
                        borderRadius: 10,
                        paddingLeft:10,
                        borderColor: "black",
                        position:"absolute",
                        zIndex:99,
                        color:"grey",
                    }}/>
                <TextInput placeholder="Select customer"  style ={{
                    padding:16,
                    paddingLeft:40,
                    borderRadius:20,
                    backgroundColor:"#D3D3D3",
                    color:"#000",
                }}
                onChangeText ={(text)=>{setsearch(text)}}
                ></TextInput>
            </View>

            {FilteredCustomers.map(data=>{
                return <CustomerCard key = {data.id} data = {data}/>
            })}

            
        </View>
        </ScrollView>
    );
}

export default Customers;