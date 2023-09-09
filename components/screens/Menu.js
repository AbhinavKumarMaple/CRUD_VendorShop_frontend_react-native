import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Menu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalTitle}>Do you want to Logout?</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.applyBtn, styles.noBtn]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.applyBtnText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.applyBtn, styles.yesBtn]} onPress={()=>navigation.navigate("login")}>
                  <Text style={styles.applyBtnText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.menuHeader}>
          <Text style={styles.headerTitle}>INNBENNE TECHNOLOGIES PVT LTD</Text>
          <Text style={styles.headerTitle}>+91-9632706239</Text>
        </View>
        <View style={styles.subMenuContainer}>
          <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("AccountDetails")}
            >
              <Ionicons
                name="pencil-sharp"
                style={[styles.icon, styles.pencilIcon]}
              />
              <Text style={styles.subMenuTitle}>Account Details</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Ionicons name="lock-closed-sharp" style={styles.icon} />
              <Text style={styles.subMenuTitle}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="mail-outline" style={styles.icon} />
              <Text style={styles.subMenuTitle}>Mail To Us</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons
                name="log-out-outline"
                style={[styles.icon, styles.logoutIcon]}
              />
              <Text style={styles.subMenuTitle}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          {/* <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("Login")}
            >
              <Ionicons
                name="enter-outline"
                style={[styles.icon, styles.logoutIcon]}
              />
              <Text style={styles.subMenuTitle}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <View>
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Ionicons
                name="add-outline"
                style={[styles.icon, styles.logoutIcon]}
              />
              <Text style={styles.subMenuTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    height: "100%",
  },
  menuHeader: {
    marginVertical: 30,
  },
  headerTitle: {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 5,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
  },
  icon: {
    fontSize: 30,
  },
  pencilIcon: {
    color: "#236cd9",
  },
  logoutIcon: {
    color: "red",
  },
  subMenuTitle: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 500,
  },
  subMenuContainer: {
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#e8e9fd",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 12,
  },
  applyBtn: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  applyBtnText: {
    fontSize: 16,
    color: "#FFF",
  },
  yesBtn: {
    backgroundColor: "#0A0E73",
  },
  noBtn: {
    backgroundColor: "#848884"
  }
});

export default Menu;
