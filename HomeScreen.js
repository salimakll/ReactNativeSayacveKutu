import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Ekran </Text>
      <Button
        color="#841584"
        title="Kurslarım"
        onPress={() => navigation.navigate("Kurslarım")}
      />
      <Button
        color="#841584"
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate("KursBilgilerim")}
      />
      <Button
        color="#841584"
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate("Sayac")}
      />
      <Button
        color="#841584"
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate("Kutu Uygulaması")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
