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

const SignUp = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style ={{alignItems:"center",marginTop:10}}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="business-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Business Name"
            />
          </View>

          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="briefcase-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Owner Name"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="business-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Address 1"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="business-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Address 2"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="pin-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Pincode"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="phone-portrait-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="Phone Number"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="card-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="GSTIN (Optional)"
            />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="card-outline" />
            <TextInput
              style={styles.passwordInput}
              placeholder="PAN (Optional)"
            />
          </View>

          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="mail-outline" />
            <TextInput style={styles.passwordInput} placeholder="Email" />
          </View>
          <View style={styles.signUpSection}>
            <Ionicons style={styles.lockIcon} name="lock-closed-outline" />
            <TextInput
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="Password"
            />
            <Ionicons style={styles.eyeIcon} name="eye-outline" />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.proceedBtn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("login")}>
        <View style ={{alignItems:"center",marginTop:20}}>
          <Text style ={{color:"blue",textDecorationLine:"underline"}}>Already Have An Account? Login</Text>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    margin:20,
    padding: 16,
  },
  header: {
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  signUpSection: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    marginBottom: 10,
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    borderWidth:1,
    paddingHorizontal: 60,
    padding: 14,
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

export default SignUp;
