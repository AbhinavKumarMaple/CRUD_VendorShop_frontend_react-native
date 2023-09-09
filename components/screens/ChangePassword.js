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
import { commonStyles } from "./common";

const ChangePassword = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={commonStyles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              onPress={() => navigation.navigate("Menu")}
              style={commonStyles.icon}
            />
          </TouchableOpacity>
          <Text style={commonStyles.page_title}>Choose a Password</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>
            For the security & safety please don't share your password.
          </Text>
          <View style={styles.passwordSection}>
            <Ionicons style={styles.lockIcon} name="lock-closed-outline" />
            <TextInput
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="Password"
            />
            <Ionicons style={styles.eyeIcon} name="eye-outline" />
          </View>
          <View style={styles.passwordSection}>
            <Ionicons style={styles.lockIcon} name="lock-closed-outline" />
            <TextInput
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="Re-enter Password"
            />
            <Ionicons style={styles.eyeIcon} name="eye-outline" />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.proceedBtn}>
            <Text style={styles.btnText}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginVertical: 20,
  },
  title: {
    color: "grey",
    marginBottom: 40,
    fontSize: 16
  },
  passwordSection: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    marginBottom: 15,
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 60,
    padding: 16,
    borderRadius: 20,
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
    marginTop: 40,
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

export default ChangePassword;
