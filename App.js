import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from "./components/screens/Footer";
import Customers from "./components/screens/Customers";
import Products from "./components/screens/Products";
import NewOrder from "./components/screens/NewOrder";
import PrintOrder from "./components/screens/PrintOrder";
import AddProduct from "./components/screens/AddProduct";
import AccountDetails from "./components/screens/AccountDetails";
import ChangePassword from "./components/screens/ChangePassword";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name = "login" component={Login}/>
        <Stack.Screen name="Navigation" component={Footer} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="addproduct" component={AddProduct} />
        <Stack.Screen name="Neworder" component={NewOrder} />
        <Stack.Screen name = "printorder" component={PrintOrder}/>
        <Stack.Screen name = "AccountDetails" component={AccountDetails}/>
        <Stack.Screen name = "ChangePassword" component={ChangePassword}/>
        
        <Stack.Screen name = "signup" component={SignUp}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
