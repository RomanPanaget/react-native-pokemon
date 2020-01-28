import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Linking,
  Button
} from "react-native";
import { LoopHeartbeatAnimation } from "../shared/animations";

const LOGO_MAX_SIZE = 150;
const LOGO_MIN_SIZE = 145;

export default function HomeScreen() {
  const size = useRef(new Animated.Value(LOGO_MIN_SIZE)).current;
  useEffect(() => {
    LoopHeartbeatAnimation(size, LOGO_MIN_SIZE, LOGO_MAX_SIZE).start();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: LOGO_MAX_SIZE,
          marginVertical: 24
        }}
      >
        <Animated.Image
          source={require("../assets/pokeball.png")}
          style={{ width: size, height: size }}
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          marginHorizontal: 24
        }}
      >
        <Text style={{ textAlign: "center" }}>
          This app is a demo on how to query Pokemon's API with React Native
        </Text>
        <Button
          title={"Github Project"}
          onPress={() =>
            Linking.openURL(
              "https://github.com/RomanPanaget/react-native-pokemon"
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
