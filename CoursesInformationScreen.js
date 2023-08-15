import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Eğitimi"
        imageSource={require("../../assets/angular.png")}
        desc='Harika Angular Eğitimi'
      />
      <Information
        title="Bootstrap Eğitimi"
        imageSource={require("../../assets/bootstrap.jpeg")}
        desc='Harika Bootstrap Eğitimi'
      />
      <Information
        title="C Programlama Eğitimi"
        imageSource={require("../../assets/c-programlama.png")}
        desc='Harika C Programlama Eğitimi'
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
