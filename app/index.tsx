import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function _layout() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl text-red-500">Aora</Text>
      <Link href={"/Profile"} style={{ color: "blue" }}>
        Go to Profile!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
