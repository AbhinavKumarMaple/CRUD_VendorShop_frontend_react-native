import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Product } from "../database/Database";
import { commonStyles } from "./common";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import neworder from "./neworder.png";



const Products = ({navigation})=>{
    const [search, setsearch] = useState("");
    const FilteredProducts = Product.filter(item=>{
        return item.item_name.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase());
    })

    const ProductDetail = ({data})=>{
        const showToastWithGravity = () => {
                ToastAndroid.showWithGravity(
                    'Product Deleted Successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
                navigation.navigate("Home");
          };

        const handleEdit =()=>{
            navigation.navigate("addproduct",{data:data})
        }
        const handleDelete = ()=>{
            Product.pop(data.index-1);
            showToastWithGravity();

        }
        return (
            <View>
                <View style = {{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
                    <Text style = {styles.product_name}>{data.item_name}</Text>
                    {/* <View style = {styles.icons}>
                        <TouchableOpacity onPress= {()=>handleEdit()}>
                            <MaterialIcons name = "edit" style = {styles.icon} ></MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=>handleDelete()}>
                            <MaterialIcons name = "delete" style = {styles.icon} ></MaterialIcons>
                        </TouchableOpacity>
                    </View> */}
                    
                </View>
            
            <Text style = {{marginBottom:5,color:"orange",fontWeight:"800"}}><Text style = {{color:"#000",fontWeight:"bold"}}>QTY: </Text>{data.qty}</Text>
            <View style ={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginBottom:5,
            }}>
                <Text style = {{color:"orange",fontWeight:"800"}}><Text style = {styles.subtitle}>MRP: </Text>{data.mrp}</Text>
                <Text style = {{color:"orange",fontWeight:"800"}}><Text style = {styles.subtitle}>BRAND: </Text>{data.brand}</Text>
            </View>
            <View
            style ={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginBottom:5,
            }}>
                <Text style = {{color:"green",fontWeight:"800"}}><Text style = {styles.subtitle}>SELLING PRICE: </Text>{data.selling_price}</Text>
                <Text style = {{color:"blue",fontWeight:"800"}}><Text style = {styles.subtitle}>IN-STOCK: </Text>{data.stock}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop:20,
                    marginBottom:20,
                }}
            ></View>
        </View>
        
        )
    }
    return (
        
           
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={commonStyles.container}>
                <View style ={styles.header}>
                    <View style ={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity>
                            <Ionicons 
                                name ="arrow-back"
                                onPress={()=>navigation.navigate("Home")}
                                style={commonStyles.icon}
                            />
                        </TouchableOpacity>
                        <Text style ={commonStyles.page_title}>Products</Text>
                    </View>
                    {/* <View style ={styles.neworder}>
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate("addproduct")}>
                            <Image style= {styles.neworderImage} source = {neworder}></Image>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style ={styles.search_section}>
                    <Ionicons 
                        name ="search-outline"
                        style={styles.search_icon}/>
                    <TextInput placeholder="Search Product" style ={styles.search_input} onChangeText ={(text)=>setsearch(text)}></TextInput>
                </View>
                {FilteredProducts.map(product=>{
                    return <ProductDetail key = {product.id} data = {product}/>
                })}
            </View> 
        
    </ScrollView>  
        
    
         
    );
}

export const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15,
        justifyContent:"space-between",
    },
    icons:{
        width:50,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    icon:{
        fontSize:20,
    },
    search_section:{
        flex:1,
        justifyContent:"center",
        position:"relative",
        marginBottom:30,
    },
    search_icon:{
        fontSize: 20,
        borderRadius: 10,
        paddingLeft:10,
        borderColor: "black",
        position:"absolute",
        zIndex:99,
        color:"grey",
    },
    search_input:{
        padding:16,
        paddingLeft:40,
        borderRadius:20,
        backgroundColor:"white",
        color:"#000",
    },
    product_name:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:10,
    },
    subtitle:{
        color:"#000",
        fontWeight:"bold"
    },
    neworderImage:{
        width:45,
        height:55,
    }
})

export default Products;