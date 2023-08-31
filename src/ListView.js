import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, Text, View } from "react-native";
import * as Network from "expo-network";
import { useEffect, useState } from "react";

export default ListView = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const apiCall = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await res.json();

      if (responseJSON) {
        setData(responseJSON);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Exception in API call: ", error);
    }
  };

  const getPosts = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();
      if (networkState.isConnected) {
        apiCall();
      } else {
        Alert.alert("Alert", "No internat connection is available", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log("Error in api call : " + error);
    }
  };

  const readingList = ({ item }) => (
    <View
      key={item.id}
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "#cccccc",
        backgroundColor: "#f2f2f2",
        marginTop: 10,
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          Title:
        </Text>
        <Text style={{ marginLeft: 8, flex: 1 }}> {item.title}</Text>
      </View>
      <View
        style={{
          marginTop: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          Body:
        </Text>
        <Text style={{ marginLeft: 8, flex: 1 }}>{item.body}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8ECD1",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: 40,
        }}
      >
        <FlatList
          style={{
            marginVertical: 20,
            paddingHorizontal: 20,
          }}
          data={data}
          refreshing={loading}
          onRefresh={() => {
            getPosts();
          }}
          renderItem={readingList}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 16 }}>
                No data found
              </Text>
            </View>
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
