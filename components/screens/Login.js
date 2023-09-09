import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style ={{alignItems:"center"}}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.loginSection}>
            <Ionicons style={styles.lockIcon} name="mail-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Email"
            />
          </View>
          <View style={styles.loginSection}>
            <Ionicons style={styles.lockIcon} name="lock-closed-outline" />
            <TextInput
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="Password"
            />
            <Ionicons style={styles.eyeIcon} name="eye-outline" />
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Navigation")}>
          <View style={styles.proceedBtn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("signup")}>
        <View style ={{alignItems:"center",marginTop:20}}>
          <Text style ={{color:"blue",textDecorationLine:"underline"}}>Create an Account</Text>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    margin:20,
    marginTop:70,
    padding: 16,
  },
  header: {
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  loginSection: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    marginBottom: 15,
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 60,
    borderWidth:1,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f3f4f8",
    color: "#000",
  },
  lockIcon: {
    position: "absolute",
    zIndex: 99,
    paddingLeft: 15,
    fontSize: 20,
  },
  eyeIcon: {
    position: "absolute",
    zIndex: 99,
    right: 15,
    fontSize: 20,
  },
  proceedBtn: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#0A0E73",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default Login;
