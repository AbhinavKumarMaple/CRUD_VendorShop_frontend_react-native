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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "./Home";
import Menu from "./Menu";

import Orders from "./Orders";
import Customers from "./Customers";

const Tab = createBottomTabNavigator();

const Footer = ()=>{
    return(
        <>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route})=> ({
                headerShown: false,
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'black',
                tabBarActiveBackgroundColor:"blue",
                tabBarItemStyle:[{
                    marginLeft:40,
                    borderRadius:25,
                    maxWidth:50,
                    maxHeight:50,
                }],
                tabBarLabelStyle:[
                    {
                        display:"none",
                        // paddingBottom:10,fontSize:10
                    },null
                ],
                tabBarStyle:[
                    {   borderTopEndRadius:30,
                        borderTopStartRadius:30,
                        padding:10,
                        height:70,
                    },null

                ],
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let rn = route.name;
                    if(rn == "Home"){
                        iconName = focused ? 'home': 'home-outline'
                        
                    } else if(rn == "Customers"){
                        iconName  =focused ? 'people':'people-outline'
                    }
                    else if(rn =="Orders"){
                        iconName  = focused ? 'document':'document-outline'
                        
                    } else if(rn == "Menu"){
                        iconName = focused ? 'menu':'menu-outline'
                        
                    }
                    return <Ionicons name = {iconName} size ={size} color = {color}></Ionicons>
                },
            })}
            >
                <Tab.Screen name = "Home" component={Home}/>
                <Tab.Screen name = "Customers" component={Customers}/>
                <Tab.Screen name = "Orders" component={Orders}/>
                <Tab.Screen name = "Menu" component={Menu}/>
            </Tab.Navigator>
        </>

    );
}
export default Footer;