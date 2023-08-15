import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function CoursesScreen() {
const DATA = [
  {
    title : 'Galatasaray',
    number: 1
  },
  {
    title : 'Fenerbahçe',
    number: 2
  },
  {
    title : 'Beşiktaş',
    number: 3
  },
  {
    title : 'Trabzon',
    number: 4
  },
  {
    title : 'Başakşehir',
    number: 5
  },
]

return <FlatList style={styles.container} data={DATA} renderItem={({item})=>{
    return(
      <View>
        <Text style={styles.container}>{item.title}</Text>
        <Text style={styles.number}>{item.number}</Text>
      </View>
    )
  }}/>;
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'tomato',
    flex:1,
    fontSize:45,
    color:'white',
  },
  number:{
    backgroundColor:'tomato',
    flex:1,
    fontSize:35,
    color:'green',
  }
});
