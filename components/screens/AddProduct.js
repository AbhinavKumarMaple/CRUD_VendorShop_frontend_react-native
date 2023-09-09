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
import { commonStyles } from "./common";4
import Ionicons from "react-native-vector-icons/Ionicons";
import { Product } from "../database/Database";



const AddProduct = ({route,navigation})=>{
    const [name, setname] = useState("");
    const [quantity, setquantity] = useState("");
    const [brand, setbrand] = useState("");
    const [mrp, setmrp] = useState("");
    const [selling_price, setselling_price] = useState("");
    const [instock, setinstock] = useState("");
    let product = false;
    if(route.params){
        product = route.params;
    }

    const showToastWithGravity = (bool) => {
        if(bool){
            ToastAndroid.showWithGravity(
                'Product Updated Successfully',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );

        }else{
            ToastAndroid.showWithGravity(
                'Product Added Successfully',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );

        }
        
      };

    const handleProduct = ()=>{
        if(name!="" && quantity!="" && brand!="" && mrp && selling_price!="" && instock){
            const product = {
                id:Product.length+1,
                item_name:name,
                qty:quantity,
                mrp:"₹"+mrp,
                selling_price:"₹"+selling_price,
                brand:brand,
                stock:instock,
                edit:false,
                order_qty:1,
            }
            Product.push(product);
            showToastWithGravity(false);
            navigation.navigate("Home");
        }else{
            alert("Please Input all fields!");
        }
    }
    const handleUpdateProduct = ()=>{
        
        const data = {
            id:product.data.id,
            item_name:name!=""?name:product.data.item_name,
            qty:quantity!=""?quantity:product.data.qty,
            mrp:mrp!=""?mrp:product.data.mrp,
            selling_price:selling_price!=""?selling_price:product.data.selling_price,
            brand:brand!=""?brand:product.data.brand,
            stock:instock!=""?instock:product.data.stock,
            edit:false,
            order_qty:1,
        }
        Product[product.data.id-1] = data;
        showToastWithGravity(true);
        navigation.navigate("Home");
        
    }
    return (
        <View style ={commonStyles.container}>
            <View style ={commonStyles.header}>
                <TouchableOpacity>
                    <Ionicons 
                        name ="arrow-back"
                        onPress={()=>navigation.navigate("Products")}
                        style={commonStyles.icon}
                    />
                </TouchableOpacity>
                
                {product?<Text style ={commonStyles.page_title}>Update Product</Text>:<Text style ={commonStyles.page_title}>Add Product</Text>}
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop:20,
                    marginBottom:20,
                }}
            ></View>
            <View style = {{marginTop:20}}>
                <View style = {styles.addInput}>
                <Text style ={{fontSize:16}}>Name:</Text>
                {product?<TextInput style = {styles.product} defaultValue={product.data.item_name}  placeholder="Product Name" onChangeText={(text)=>setname(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Product Name" onChangeText={(text)=>setname(text)}></TextInput>}
                </View>
           
            {/* <Text style = {styles.product_name}
            
            >Harsh</Text> */}
            <View style = {styles.addInput}>
            <Text style = {{fontSize:16}}>QTY: </Text>
            {product?<TextInput style = {styles.product} placeholder="Quantity" defaultValue={product.data.qty} onChangeText={(text)=>setquantity(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Quantity" onChangeText={(text)=>setquantity(text)}></TextInput>}
            

            </View>
            <View style = {styles.addInput}>
            <Text style = {{fontSize:16}}>MRP: </Text>
            {product?<TextInput style = {styles.product} placeholder="Maximum Retail Price" defaultValue={product.data.mrp} onChangeText={(text)=>setmrp(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Maximum Retail Price" onChangeText={(text)=>setmrp(text)}></TextInput>}
            

            </View>
            <View style = {styles.addInput}>
            <Text style = {{fontSize:16}}>BRAND: </Text>
            {product?<TextInput style = {styles.product} placeholder="Brand Name" defaultValue={product.data.brand} onChangeText={(text)=>setbrand(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Brand Name"  onChangeText={(text)=>setbrand(text)}></TextInput>}
            

            </View>
            <View style = {styles.addInput}>
            <Text style = {{fontSize:16}}>Price: </Text>
            
            {product?<TextInput style = {styles.product} placeholder="Selling Price" defaultValue={product.data.selling_price} onChangeText={(text)=>setselling_price(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Selling Price"  onChangeText={(text)=>setselling_price(text)}></TextInput>}
            

            </View>
            <View style = {styles.addInput}>
            <Text style = {{fontSize:16}}>InStock: </Text>
            {product?<TextInput style = {styles.product} placeholder="Stock Available" defaultValue={product.data.stock} onChangeText={(text)=>setinstock(text)}></TextInput>:<TextInput style = {styles.product} placeholder="Stock Available"  onChangeText={(text)=>setinstock(text)}></TextInput>}
            

            </View>
            {product?<TouchableOpacity onPress={()=>handleUpdateProduct()} ><View style = {styles.proceedBtn} ><Text style = {styles.btnText}>Update Product</Text></View></TouchableOpacity>:<TouchableOpacity onPress={()=>handleProduct()} ><View style = {styles.proceedBtn} ><Text style = {styles.btnText}>Add Product</Text></View></TouchableOpacity>}
            
         
            
        </View>
        </View>
        
    );

    
}

export const styles = StyleSheet.create({
    addInput:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    product:{
        width:300,
        borderRadius:10,
        padding:16,
        borderWidth:1,
        height:50,
        fontSize:16,
        fontWeight:"bold",
        marginBottom:10,
    },
    subtitle:{
        color:"#000",
        fontWeight:"bold"
    },
    proceedBtn:{
        marginTop:40,
        height:40,
        backgroundColor:"#0A0E73",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    btnText:{
        fontWeight:"bold",
        fontSize:16,
        color:"#fff",
    }
})
export default AddProduct;