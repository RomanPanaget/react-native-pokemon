import React, { useCallback } from "react";
import { Animated, Image, Text, StyleSheet, View } from "react-native";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Icon from "./Icon";
import { FadeOut } from "../shared/animations";

export default function PokemonCard({ pokemon, onPress }) {
  const opacity = new Animated.Value(0);
  const fireLikeAnimation = useCallback((checked: boolean) => {
    if (checked) {
      opacity.setValue(1);
      FadeOut(opacity, 0, 500, 1000).start();
    } else {
      opacity.setValue(0);
    }
  }, []);
  return (
    <Card onPress={onPress}>
      <View>
        <Text style={styles.id}>#{pokemon.id}</Text>
        <View>
          <Image
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
            }}
            style={styles.image}
          />
          <Animated.View style={[styles.imageOverlay, { opacity }]}>
            <Icon name={"md-heart"} size={120} color={"white"} />
          </Animated.View>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
        </View>
        <Checkbox
          onToggled={fireLikeAnimation}
          selected={false}
          unselectedIcon={"md-heart-empty"}
          selectedIcon={"md-heart"}
          color={"red"}
          size={24}
          buttonStyle={styles.action}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  id: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
    padding: 12,
    color: "red",
    borderRadius: 26,
    overflow: "hidden"
  },
  titleContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginLeft: 16
  },
  title: {
    fontSize: 20,
    letterSpacing: 1.2
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 10
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF000070"
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#FF8888",
    height: 48
  },
  action: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10
  },
  divider: { backgroundColor: "#FFAAAA", width: 1 }
});
