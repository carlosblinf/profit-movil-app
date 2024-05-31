import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NewAllocationScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Nueva Operación" }} />
      <Text>New Allocation Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
