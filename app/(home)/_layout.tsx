import { Slot } from "expo-router";
import { Text } from "react-native";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <View>
        <Text>AVX</Text>
      </View>
      <Slot />
    </>
  );
}
