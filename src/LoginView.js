import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

export default LoginView = (props) => {
  const dimensions = useWindowDimensions();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const handleLogin = async () => {
    if (username && password) {
      if (username === "username" && password === "password") {
        props.setIsLoginView(false);
      } else {
        setApiErrorMsg("Username and Password is not valid!");
      }
    } else {
      setApiErrorMsg("Please enter Username and Password");
    }
  };

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="always"
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8ECD1",
        }}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 250,
                height: 250,
                resizeMode: "contain",
              }}
              source={require("../assets/icon.png")}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#610613",
                  letterSpacing: 1,
                  marginTop: 20,
                  fontWeight: "500",
                }}
              >
                Login to your account
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 60,
                marginTop: 40,
              }}
            >
              <TextInput
                style={{
                  height: 40,
                  marginBottom: 12,
                  backgroundColor: "#F6F6F4",
                  borderRadius: 20,
                  padding: 10,
                  textAlign: "center",
                  height: 35,
                }}
                onChangeText={(text) => {
                  setApiErrorMsg("");
                  setUsername(text);
                }}
                value={username}
                placeholder="Username"
                keyboardType="default"
                selectionColor={"blue"}
              />
              <TextInput
                style={{
                  height: 40,
                  marginBottom: 12,
                  backgroundColor: "#F6F6F4",
                  borderRadius: 20,
                  padding: 10,
                  textAlign: "center",
                  height: 35,
                }}
                secureTextEntry={true}
                onChangeText={(text) => {
                  setApiErrorMsg("");
                  setPassword(text);
                }}
                value={password}
                placeholder="Password"
                keyboardType="default"
                selectionColor={"blue"}
              />
              {apiErrorMsg ? (
                <Text
                  style={{
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {apiErrorMsg
                    ? apiErrorMsg
                    : "Please enter a valid phone number"}
                </Text>
              ) : (
                <Text
                  style={{
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {" "}
                </Text>
              )}
              <TouchableOpacity
                mode="contained"
                color={"blue"}
                onPress={handleLogin}
                style={{
                  borderRadius: 20,
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  backgroundColor: "#610613",
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/bgBottom.png")}
          style={{
            backgroundColor: "white",
            width: dimensions.width,
            height: dimensions.height / 3,
          }}
        ></Image>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};
