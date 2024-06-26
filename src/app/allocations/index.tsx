import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Activos" }} />
      <Text>Home Screen</Text>
      <Link href="/allocations/new">add new allocations</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
