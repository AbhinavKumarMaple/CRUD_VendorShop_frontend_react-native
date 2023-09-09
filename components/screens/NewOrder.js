import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";
import { commonStyles } from "./common";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import { Product } from "../database/Database";

const NewOrder = ({ navigation }) => {
  //   const [selectedValue, setSelectedValue] = useState("");
  const [dropDownProduct, setDropDownProduct] = useState([]);
  const [modalVisible, setModalVisible] = useState("none");
  const [searchProduct, setSearchProduct] = useState("");
  const [product_id, setProduct_id] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [edit, setedit] = useState(false);
  const [proceed, setproceed] = useState(false);
  const [totalamount, setTotalamount] = useState(0);

  let debounceTimeout;

  const debounceSearch = (text) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchProducts(text);
    }, 500);
  };

  const searchProducts = (text) => {
    if (text != "") {
      const data = Product.filter((e) =>
        e?.item_name?.toLowerCase().includes(text?.toLowerCase())
      );
      if (data.length > 0) {
        setModalVisible("flex");
        setDropDownProduct(data);
      } else {
        setDropDownProduct([]);
        setModalVisible("none");
      }
    } else {
      setModalVisible("none");
      setDropDownProduct([]);
    }
  };

  const handleProduct = (itemValue) => {
    setModalVisible("none");
    setSearchProduct("");
    if (itemValue !== "null") {
      //   setSelectedValue(itemValue);
      setProduct_id((oldArray) => [...oldArray, itemValue]);
      let filter = [];
      let amount = 0;
      filter = Product.filter((item) => {
        if (item.id == itemValue) {
          amount += item.order_qty * item.selling_price.split("₹")[1];
        }
        return item.id == itemValue;
      });
      const found = FilteredProducts.find((product) => product == filter[0]);
      if (!found) {
        setFilteredProducts((prev) => [...prev, filter[0]]);
        setTotalamount(totalamount + amount);
        setproceed(true);
      }
    } else {
      //   setSelectedValue(itemValue);
    }
  };
  const getTotalAmount = (data) => {
    let TotalAmount = 0;
    data.map((product) => {
      TotalAmount += product.order_qty * product.selling_price.split("₹")[1];
    });
    setTotalamount(TotalAmount);
  };

  const renderFlatItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{ marginVertical: 10 }}
        onPress={() => {
          handleProduct(item?.id);
        }}
      >
        <Text>{item?.item_name}</Text>
      </TouchableOpacity>
    );
  };

  const handleOrderChange = (idx, obj) => {
    let clone = FilteredProducts;
    clone[idx] = { ...clone[idx], ...obj };
    setFilteredProducts([...clone]);
  };

  const ProductDetail = ({ data, index, handleOrderChange }) => {
    const [orderQty, setOrderQty] = useState(data?.order_qty);
    const handleEdit = () => {
      if (edit) {
        alert("Please Save the Opened Quantity!");
      } else {
        data.edit = true;
        setedit(true);
      }
    };

    const handleSave = (index) => {
      if (orderQty == 0)
        return Alert.alert("ALERT!", "Order Quantity must be grater than 0");
      data.edit = false;
      setedit(false);
      handleOrderChange(index, { order_qty: orderQty });
      getTotalAmount(FilteredProducts);
    };

    const handleDelete = () => {
      data.edit = false;
      setedit(false);
      let Products = FilteredProducts.filter((item) => {
        return item.id !== data.id;
      });
      if (Products.length) {
        setFilteredProducts(Products);
      } else {
        setproceed(false);
        // setSelectedValue("");
        setFilteredProducts(Products);
      }
      getTotalAmount(Products);
    };

    return (
      <View>
        <View style={styles.product_header}>
          <Text style={styles.product_name}>{data.item_name}</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => handleEdit()}>
              <MaterialIcons name="edit" style={styles.icon}></MaterialIcons>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete()}>
              <MaterialIcons name="delete" style={styles.icon}></MaterialIcons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product_details}>
          <Text style={{ color: "orange", fontSize: 13 }}>
            <Text style={{ color: "#000", fontWeight: "bold" }}>QTY: </Text>
            {data.qty}
          </Text>
          <Text style={{ color: "orange", fontSize: 13 }}>
            <Text style={styles.subtitle}>MRP: </Text>
            {data.mrp}
          </Text>
        </View>
        {edit && data.edit ? (
          <View style={styles.product_details}>
            <View style={styles.TextInput}>
              <TextInput
                style={{ color: "#000", fontSize: 13, fontWeight: "bold" }}
                defaultValue={data.selling_price}
                editable={false}
              ></TextInput>
            </View>
            <View style={styles.orderQtyView}>
              <TextInput
                key={data.id.toString()}
                placeholder="Order Quantity"
                style={styles.input}
                value={orderQty}
                keyboardType="numeric"
                onChangeText={(text) => setOrderQty(text.replace(/[^0-9]/, ""))}
              />
            </View>
          </View>
        ) : (
          <View style={styles.product_details}>
            <Text style={{ color: "green", fontSize: 13 }}>
              <Text style={styles.subtitle}>SELLING PRICE: </Text>
              {data.selling_price}
            </Text>
            <Text style={{ color: "blue", fontSize: 13 }}>
              <Text style={styles.subtitle}>ORDER-QTY: </Text>
              {data?.order_qty}
            </Text>
          </View>
        )}
        {edit && data.edit ? (
          <View style={styles.product_details}>
            <Text style={{ color: "blue", fontWeight: "800", fontSize: 15 }}>
              <Text style={styles.subtitle}>IN-STOCK: </Text>
              {data.stock}
            </Text>
            <TouchableOpacity onPress={() => handleSave(index)}>
              <View style={styles.button}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 20,
            marginBottom: 20,
          }}
        ></View>
      </View>
    );
  };

  return (
    <SafeAreaView>
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
              onPress={() => navigation.navigate("Home")}
              style={commonStyles.icon}
            />
          </TouchableOpacity>
          <Text style={commonStyles.page_title}>New Order</Text>
        </View>

        {/* <View style={styles.picker}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => handleProduct(itemValue)}
            >
              <Picker.Item label="Select Product" value="null"></Picker.Item>
              {Product.map((product) => {
                return (
                  <Picker.Item
                    key={product.id}
                    label={product.item_name}
                    value={product.id}
                  ></Picker.Item>
                );
              })}
            </Picker>
          </View> */}

        <View style={styles.searchBoxView}>
          <TextInput
            placeholder="Search Products"
            style={{ width: "80%" }}
            value={searchProduct}
            //   onChangeText={(text) => setSearchProduct(text)}
            onChangeText={(text) => {
              setSearchProduct(text);
              debounceSearch(text);
            }}
          />
          <Ionicons
            name="search"
            //   onPress={() => navigation.navigate("Home")}
            style={commonStyles.icon}
          />
        </View>

        <View style={[styles.dropDownListView, { display: modalVisible }]}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
            }}
            data={dropDownProduct}
            renderItem={renderFlatItems}
            //   scrollEnabled={false}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="never"
        >
          <View style={styles.values}>
            <Text style={{ fontSize: 14 }}>
              Item Count:{" "}
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {FilteredProducts.length}
              </Text>
            </Text>
            <Text style={{ fontSize: 14 }}>
              Total Amount:{" "}
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ₹{totalamount}
              </Text>
            </Text>
          </View>
          <View style={styles.products}>
            {FilteredProducts.map((item, index) => {
              return (
                <ProductDetail
                  key={index}
                  data={item}
                  index={index}
                  handleOrderChange={handleOrderChange}
                />
              );
            })}
          </View>
        </ScrollView>
        {proceed ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("printorder", {
                data: FilteredProducts,
                amount: totalamount,
              })
            }
          >
            <View style={styles.proceedBtn}>
              <Text style={styles.btnText}>Proceed</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  product_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  icons: {
    width: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 20,
  },
  product_name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#000",
    fontWeight: "bold",
  },
  products: {
    marginTop: 20,
  },
  product_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  TextInput: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
  },
  orderQtyView: {
    flexDirection: "row",
    width: 165,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: "bold",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
  },
  input: {
    width: 95,
    // paddingStart: 10,
    // fontSize: 13,
    // fontWeight: "bold",
    // height: 40,
    // borderRadius: 10,
    // backgroundColor: "#D3D3D3",
    // backgroundColor: "red",
  },
  QtyPicker: {
    width: Platform.OS == "android" ? 120 : 85,
    // alignItems: "center",
    // backgroundColor: "green",
  },
  button: {
    width: 165,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#2f9726",
  },
  proceedBtn: {
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
  values: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchBoxView: {
    width: "100%",
    backgroundColor: "#D3D3D3",
    //   height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  dropDownListView: {
    alignSelf: "center",
    position: "absolute",
    top: Dimensions.get("screen").height * 0.15,
    padding: 10,
    width: "100%",
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
    minHeight: "30%",
  },
});

export default NewOrder;
