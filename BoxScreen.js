import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

export default function BoxScreen() {
  const [colors, setColors] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Kutu Ekle"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderRadius:30,
                borderCurve:15,
                height: 150,
                width: 150,
                backgroundColor: item,
                marginVertical: 15,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
