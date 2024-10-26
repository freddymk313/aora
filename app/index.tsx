import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Aora</Text>
      <Link href={"/profile"} style={{ color: "blue" }}>
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
