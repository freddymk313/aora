import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Platform } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl" style={{ fontFamily: 'Poppins_900Black' }}>Aora!</Text>
      <Link href={"/profile"} className="text-blue-500">
        Go to Profile!
      </Link>
    </View>
  );
}
