import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

class Responsive extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.profileImage}>{}</View>
        </View>
        <View style={styles.center}>{}</View>
        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner} />
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>{}</View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>{}</View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}>{}</View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#98d2c1"
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#eee"
  },
  center: {
    height: "10%",
    backgroundColor: "#7fbcac"
  },
  bottom: {
    height: "45%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  bottomItem: {
    width: "50%",
    height: "45%",
    padding: 5
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#292929"
  }
});

export default Responsive;
