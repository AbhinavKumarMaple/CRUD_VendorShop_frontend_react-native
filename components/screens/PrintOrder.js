import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { commonStyles } from "./common";
// import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Customer_Details } from "../database/Database";
import customer from "./customer.png";
// import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
// import ThermalPrinterModule from "react-native-thermal-printer";

const PrintOrder = ({ route, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("null");
  const [filteredCustomer, setFilteredCustomer] = useState([]);
  const [customer, setCustomer] = useState({});
  const [productDetail, setProductDetail] = useState("");
  const [modalVisible, setModalVisible] = useState("none");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const products = route.params.data;

    const productsString = products
      .map((item, index) => {
        const total =
          parseFloat(item.selling_price.split("₹")[1]) *
          parseFloat(item.order_qty);
        return `
        <ul style="list-style: none; display: flex; justify-content: space-between; padding: 0;">
          <li>${index + 1}</li>
          <li style="width: 25%">${item.item_name + " - " + item.qty}</li>
          <li>${item.order_qty}</li>
          <li>${item.selling_price}</li>
          <li>₹${total}</li>
        </ul>
        `;
      })
      .join("");

    setProductDetail(productsString);
  }, []);

  const handleCustomer = (itemValue) => {
    setModalVisible("none");
    setSearchValue("");
    setSelectedValue(itemValue);
    let data;
    data = Customer_Details.filter((customer) => {
      return customer.id == itemValue;
    });
    setCustomer(data[0]);
  };

  let generatePdf = async () => {
    // try {
    // const a = await ThermalPrinterModule.getBluetoothDeviceList();
    // console.log(a);
    // await ThermalPrinterModule.printBluetooth({
    //   payload: "hello world",
    //   printerNbrCharactersPerLine: 38,
    // });
    // } catch (err) {
    //   //error handling
    //   console.log("error", err.message);
    // }
    // const file = await printToFileAsync({
    //   html: html,
    //   base64: false,
    // });

    await shareAsync(file.uri);
  };

  const orderedProducts = route.params.data;
  const totalBill = route.params.amount;

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const hour = today.getHours();
  const minutes = today.getMinutes();

  const time = hour + ":" + minutes;

  const Row = ({ index, product }) => {
    const total =
      parseFloat(product.selling_price.split("₹")[1]) *
      parseFloat(product.order_qty);
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>{index + 1}</Text>
          </View>
          <View style={{ width: "35%" }}>
            <Text>{product.item_name + " - " + product.qty}</Text>
          </View>
          <View>
            <Text>{product.order_qty}</Text>
          </View>
          <View>
            <Text>{product.selling_price}</Text>
          </View>
          <View>
            <Text>₹{total}</Text>
          </View>
        </View>
      </>
    );
  };

  const html = `
  <html lang="en">
  <body>
    <div>
      <div style="text-align: center">
        <h4>INNBENNE TECHNOLOGIES PVT LTD</h4>
        <p>Sagri Chakrathirtha, Udupi</p>
        <p>Ph : 0820-255634</p>
        <p>GSTIN : 29K43568847H3JD</p>
      </div>

      <div style="display: flex; justify-content: space-around">
        <div style="width: 50%;">
          <p>Bill To : <span>${customer.company_name}</span></p>
          <p>${customer.address}</p>
          <p>GST : ${customer.gstin_no}</p>
        </div>
        <div>
          <p>Date: ${formattedToday + "  " + time}</p>
          <p>Bill No : 748388</p>
          <p>Ph : 9373838383</p>
        </div>
      </div>

      <div>
        <hr style="border-top: dotted 1px;" />
        <ul style="list-style: none; display: flex; justify-content: space-between; padding: 0;">
            <li>SI</li>
            <li style="width: 25%">Description</li>
            <li>OTY</li>
            <li>RATE</li>
            <li>TOTAL</li>
        </ul>
        <hr style="border-top: dotted 1px;" />
        ${productDetail}
        <hr style="border-top: dotted 1px;" />
        <div style="display: flex; justify-content: flex-end;">
            <h3>Total : Rs. ${totalBill}</h3>
        </div>
        <hr style="border-top: dotted 1px;" />
        <p style="text-align: center;">Thank you! Order Again!</p>
      </div>
    </div>
  </body>
</html>`;

  let debounceTimeout;
  const debounceSearch = (text) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchCustomer(text);
    }, 500);
  };

  const searchCustomer = (text) => {
    if (text != "") {
      const data = Customer_Details.filter((e) =>
        e?.company_name?.toLowerCase().includes(text?.toLowerCase())
      );
      if (data.length > 0) {
        setModalVisible("flex");
        setFilteredCustomer(data);
      } else {
        setFilteredCustomer([]);
        setModalVisible("none");
      }
    } else {
      setModalVisible("none");
      setFilteredCustomer([]);
    }
  };

  const renderFlatItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{ marginVertical: 10 }}
        onPress={() => {
          handleCustomer(item?.id);
        }}
      >
        <Text>{item?.company_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            onPress={() => navigation.navigate("Neworder")}
            style={commonStyles.icon}
          />
        </TouchableOpacity>
        <Text style={commonStyles.page_title}>Choose Customer</Text>
      </View>
      <View style={styles.customer}>
        <Text style={{ fontSize: 20 }}>Bill To: </Text>
        {/* <View style={styles.picker}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                handleCustomer(itemValue)
              }
            >
              <Picker.Item label="Choose Customer" value="null"></Picker.Item>
              {Customer_Details.map((customer) => {
                return (
                  <Picker.Item
                    key={customer.id}
                    label={customer.company_name}
                    value={customer.id}
                  ></Picker.Item>
                );
              })}
            </Picker>
          </View> */}
        <View style={styles.searchBoxView}>
          <TextInput
            placeholder="Search Customer"
            style={{ width: "80%", height: "120%", paddingBottom: 0 }}
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
              debounceSearch(text);
            }}
          />
          <Ionicons name="search" style={commonStyles.icon} />
        </View>
      </View>
      <View style={[styles.dropdownListView, { display: modalVisible }]}>
        <FlatList data={filteredCustomer} renderItem={renderFlatItems} />
      </View>
      <ScrollView>
        {selectedValue !== "null" ? (
          <View style={styles.billContainer}>
            <View style={styles.billHeader}>
              <View style={styles.billHeader}>
                <Text>INNBENNE TECHNOLOGIES PVT LTD</Text>
                <Text>Sagri Chakrathirtha, Udupi</Text>
                <Text>Ph : 0820-255634</Text>
                <Text>GSTIN : 29K43568847H3JD</Text>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <View style={styles.billToContainer}>
                  <Text>Bill To : </Text>
                  <View style={{ width: 180 }}>
                    <Text>{customer.company_name}</Text>
                    <Text>{customer.address}</Text>
                  </View>
                </View>
                <View style={styles.billToContainer}>
                  <Text>GST : </Text>
                  <Text>{customer.gstin_no}</Text>
                </View>
              </View>

              <View style={styles.rightContainer}>
                <Text>Date : {formattedToday + "  " + time}</Text>
                <Text>Bill No : 748388</Text>
                <Text>Ph : 9373838383</Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderStyle: "dashed",
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>SI</Text>
              </View>
              <View style={{ width: "35%" }}>
                <Text>Description</Text>
              </View>
              <View>
                <Text>QTY</Text>
              </View>
              <View>
                <Text>RATE</Text>
              </View>
              <View>
                <Text>TOTAL</Text>
              </View>
            </View>

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderStyle: "dashed",
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            {orderedProducts.map((product, index) => {
              return <Row key={product.id} index={index} product={product} />;
            })}

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderStyle: "dashed",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: 700, fontSize: 16 }}>
                Total : Rs. {totalBill}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderStyle: "dashed",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text>Thank You! Order Again!</Text>
            </View>
            <TouchableOpacity onPress={generatePdf}>
              <View style={styles.proceedBtn}>
                <Text style={styles.btnText}>Print</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
  },
  customer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  billContainer: {
    marginVertical: 20,
  },
  billHeader: {
    alignItems: "center",
  },
  billToContainer: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  leftContainer: {
    width: 260,
  },
  rightContainer: {
    width: 160,
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
  searchBoxView: {
    width: "80%",
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  dropdownListView: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.15,
    marginLeft: Dimensions.get("screen").width * 0.18,
    padding: 10,
    width: "85%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    // maxHeight: "50%",
    // minHeight: "30%",
  },
});

export default PrintOrder;
