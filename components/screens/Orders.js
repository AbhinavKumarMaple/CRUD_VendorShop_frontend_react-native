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
import {Picker} from "@react-native-picker/picker"
import { commonStyles } from "./common";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Order } from "../database/Database";
import order from "./order.png";




const Orders = ({navigation})=>{
    const [selectedValue, setSelectedValue] = useState("day");

    const OrderDetail = ({data})=>{
        return (
            <>
            <View style = {styles.order_container}>
                <View>
                    <Image style = {styles.image} source={order}></Image>
                </View>
                <View style = {{marginLeft:20}}> 
                    <View style ={styles.order_details}>
                        <Text style = {{fontSize:16,fontWeight:"bold"}}>{data.order_no}</Text>
                        <Text style = {{color:"grey"}}>{data.date}</Text>
                    </View>
                    <View style ={styles.order_details}>
                        <View style ={{marginBottom:5}}>
                            <Text style ={{color:"green",fontSize:12,}}>{data.customer}</Text>
                            <Text style ={{color:"grey",fontSize:10,}}>{data.address}</Text>
                        </View>
                        <View>
                            <Text style ={{color:"#EE7600",fontWeight:"bold",fontSize:20,}}>₹{data.amount}</Text>
                        </View>
                    </View>
                </View>
            </View>
              <View
              style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop:10,
                  marginBottom:10,
              }}
          />
          </>

         
            
        );
    }
    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <View style = {commonStyles.container}>
                <View style ={commonStyles.header}>
                    <TouchableOpacity>
                        <Ionicons 
                            name ="arrow-back"
                            onPress={()=>navigation.navigate("Home")}
                            style={commonStyles.icon}
                        />
                    </TouchableOpacity>
                    <Text style ={commonStyles.page_title}>Orders</Text>
                </View>
                <View style = {styles.filter}>
                    <Text>Filter:</Text>
                    <View>
                        <Picker 
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label ="Day" value ="day"/>
                            <Picker.Item label="Week" value = "week"/>
                            <Picker.Item label="Month" value = "month"/>
                        </Picker>
                    </View>
               </View>
                {Order.map((order,index)=>{
                    return <OrderDetail key ={index} data = {order}/>
                })}
            </View>
            
            

        </ScrollView>
    );
}
export const styles = StyleSheet.create({
    filter:{
        marginTop:20,
        width:200,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    picker: { 
        height: 30, 
        width: 150,
    },
    image:{
        height:70,
        width:70,
    },
    order_container:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center"
    },
    order_details:{
        marginBottom:5,
        width:250,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    
})

export default Orders;