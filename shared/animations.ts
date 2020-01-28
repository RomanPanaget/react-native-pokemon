import { Animated } from "react-native";

export const LoopHeartbeatAnimation = (
  value: Animated.Value,
  minValue: number,
  maxValue: number
) =>
  Animated.loop(
    Animated.sequence([
      Animated.timing(value, {
        toValue: maxValue,
        duration: 100
      }),
      Animated.timing(value, {
        toValue: minValue,
        duration: 100
      }),
      Animated.timing(value, {
        toValue: maxValue,
        duration: 100
      }),
      Animated.timing(value, {
        toValue: minValue,
        duration: 2000
      })
    ])
  );

export const SingleHeartbeatAnimation = (
  value: Animated.Value,
  minValue: number,
  maxValue: number
) =>
  Animated.sequence([
    Animated.timing(value, {
      toValue: maxValue,
      duration: 100
    }),
    Animated.timing(value, {
      toValue: minValue,
      duration: 100
    }),
    Animated.timing(value, {
      toValue: maxValue,
      duration: 100
    }),
    Animated.timing(value, {
      toValue: minValue,
      duration: 2000
    })
  ]);

export const FadeOut = (
  value: Animated.Value,
  toValue: number,
  duration: number,
  delay: number = 0
) =>
  Animated.timing(value, {
    toValue,
    duration,
    delay
  });
