import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { commonStyles } from "./common";

const AccountDetails = ({ navigation }) => {
  const [businessName, setBusinessName] = useState(
    "INNBENNE TECHNOLOGIES PVT LTD"
  );

  const [pan, setPan] = useState("CBV748H3K7");
  const [ownerName, setOwnerName] = useState("Indresh Vjai");
  const [address1, setAddress1] = useState("Kolalgiri Post, RadhaKrishna Apartment");
  const [address2, setAddress2] = useState("Udupi, Karnataka, India");
  const [pincode, setPincode] = useState("576102");
  const [phoneNumber, setPhoneNumber] = useState("+91-9632706239");
  const [gstin, setGstin] = useState("GKEH3859483KDND");

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
          <Text style={commonStyles.page_title}>Account Details</Text>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.title}>Business Name</Text>
            <TextInput style={styles.subTitle} defaultValue={businessName} />
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
            <Text style={styles.title}>Owner Name</Text>
            <TextInput style={styles.subTitle} defaultValue={ownerName} />
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
            <Text style={styles.title}>Address 1</Text>
            <TextInput style={styles.subTitle} defaultValue={address1} />
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
            <Text style={styles.title}>Address 2</Text>
            <TextInput style={styles.subTitle} defaultValue={address2} />
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
            <Text style={styles.title}>Pincode</Text>
            <TextInput style={styles.subTitle} defaultValue={pincode} />
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
            <Text style={styles.title}>Phone Number</Text>
            <TextInput style={styles.subTitle} defaultValue={phoneNumber} />
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
            <Text style={styles.title}>GSTIN (Optional)</Text>
            <TextInput style={styles.subTitle} defaultValue={gstin} />
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
            <Text style={styles.title}>PAN (Optional)</Text>
            <TextInput style={styles.subTitle} defaultValue={pan} />
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 10,
              marginBottom: 10,
            }}
          />
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
  subContainer: {
    marginTop: 20,
  },
  title: {
    color: "orange",
  },
  subTitle: {
    fontSize: 15,
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

export default AccountDetails;
