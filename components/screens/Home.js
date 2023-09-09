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
  SafeAreaView,
  Dimensions,
} from "react-native";
import { COLOURS, Items } from "../database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import neworder from "./neworder.png";

const Home = ({ navigation }) => {
  const ProductCard = ({ count }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("Customers")}
          style={{
            width: "48%",
            marginVertical: 14,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              backgroundColor: "white",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              // marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: "purple",
                fontWeight: "800",
                marginBottom: 2,
              }}
            >
              25
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              Customers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={{
            width: "48%",
            marginVertical: 14,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              backgroundColor: "white",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              // marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: "#90EE90",
                fontWeight: "800",
                marginBottom: 2,
              }}
            >
              450
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              Products
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate("ProductInfo", { productID: data.id })
          // }
          style={{
            width: "48%",
            marginVertical: 14,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              backgroundColor: "white",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              // marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              This month
            </Text>

            <Text
              style={{
                fontSize: 45,
                color: "red",
                fontWeight: "800",
                marginBottom: 2,
              }}
            >
              $73.3k
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              Transactions
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Orders")}
          style={{
            width: "48%",
            marginVertical: 14,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              backgroundColor: "white",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              // marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              This month
            </Text>

            <Text
              style={{
                fontSize: 45,
                color: "#ffae42",
                fontWeight: "800",
                marginBottom: 2,
              }}
            >
              227
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: "500",
                marginBottom: 2,
              }}
            >
              Orders
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: "500",
              letterSpacing: 1,
            }}
          >
            INNBENNE
          </Text>
          <MaterialCommunityIcons
            name="bell-outline"
            style={{
              fontSize: 26,
              padding: 12,
              borderRadius: 10,
              borderColor: COLOURS.backgroundLight,
            }}
          />
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              height: 70,
              padding: 16,
              borderRadius: 10,
            }}
          >
            <FontAwesome
              name="user-o"
              style={{
                fontSize: 24,
                marginRight: 6,
                color: "black",
              }}
            />
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                INNBENNE TRADERS
              </Text>
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                Sagri Chakrathirta,kunjbettue,Udupi - 576102
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <ProductCard count="25" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.neworder}>
        <TouchableOpacity onPress={() => navigation.navigate("Neworder")}>
          <Image style={styles.neworderImage} source={neworder}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  neworder: {
    position: "absolute",
    bottom: height * 0.09,
    right: width * 0.2,
    width: width * 0.065,
    height: height * 0.03,
  },
  neworderImage: {
    // aspectRatio: 1,
    resizeMode: "contain",
    width: width * 0.1595,
    height: height * 0.09105,
  },
});
