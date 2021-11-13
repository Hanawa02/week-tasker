import React from "react";
import { StyleSheet } from "react-native";
import { View, ScrollView } from "react-native";
import Colors from "../constants/Colors";

interface DefaultLayoutProps {
  title: string;
  children: any;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.menu}>{props.title}</View>
        <ScrollView style={styles.pageContainer}>{props.children}</ScrollView>
      </View>
    </View>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.gray5,
    color: Colors.white,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Roboto",
  },
  container: {
    backgroundColor: Colors.gray6,
    maxWidth: "768px",
    margin: "0 auto !important",
    width: "100%",
  },
  menu: {
    padding: "1.5rem",
    textAlign: "center",
    backgroundColor: Colors.darkTransparency4,
    fontSize: "1.5rem",
  },
  pageContainer: {
    padding: "1.25rem",
  },
});
