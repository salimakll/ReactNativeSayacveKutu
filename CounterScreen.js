import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        color='tomato'      
        title="Arttır"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        color='tomato'      
        title="Azalt"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={{color:'red', fontSize:35, textAlign:'center', alignItems:'center'}}>Sayı : {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
