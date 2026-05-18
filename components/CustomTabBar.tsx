import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const TAB_BAR_HEIGHT = 72;
const CIRCLE_SIZE = 52;
const ICON_SIZE = 22;
// Icon center Y from the top of the tab bar (used to align circle and icons)
const ICON_CENTER_Y = 30;
const CIRCLE_TOP = ICON_CENTER_Y - CIRCLE_SIZE / 2; // = 4
const TAB_PADDING_TOP = ICON_CENTER_Y - ICON_SIZE / 2; // = 19

const TAB_CONFIG = [
  {
    name: "home",
    label: "Home",
    activeIcon: "home" as const,
    inactiveIcon: "home-outline" as const,
  },
  {
    name: "learn",
    label: "Learn",
    activeIcon: "book" as const,
    inactiveIcon: "book-outline" as const,
  },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    activeIcon: "sparkles" as const,
    inactiveIcon: "sparkles-outline" as const,
  },
  {
    name: "chat",
    label: "Chat",
    activeIcon: "chatbubble" as const,
    inactiveIcon: "chatbubble-outline" as const,
  },
  {
    name: "profile",
    label: "Profile",
    activeIcon: "person" as const,
    inactiveIcon: "person-outline" as const,
  },
] as const;

export function CustomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  const { width: screenWidth } = Dimensions.get("window");
  const tabWidth = screenWidth / state.routes.length;

  const circleX = useSharedValue(
    state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2
  );

  useEffect(() => {
    const { width } = Dimensions.get("window");
    const tw = width / state.routes.length;
    circleX.value = withTiming(state.index * tw + (tw - CIRCLE_SIZE) / 2, {
      duration: 260,
      easing: Easing.out(Easing.quad),
    });
  }, [state.index]);

  const circleAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  return (
    <View
      style={[
        styles.container,
        { height: TAB_BAR_HEIGHT + insets.bottom, paddingBottom: insets.bottom },
      ]}
    >
      {/* Sliding purple circle — rendered first so it sits behind icons */}
      <Animated.View style={[styles.circle, circleAnimStyle]} />

      {state.routes.map((route, index) => {
        const config = TAB_CONFIG[index];
        const isActive = index === state.index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? config.activeIcon : config.inactiveIcon}
              size={ICON_SIZE}
              color={isActive ? "#ffffff" : "#9ca3af"}
            />
            {!isActive && <Text style={styles.label}>{config.label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 10,
    position: "relative",
  },
  circle: {
    position: "absolute",
    top: CIRCLE_TOP,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: "#6c4ef5",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: TAB_PADDING_TOP,
  },
  label: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: "#9ca3af",
    marginTop: 3,
    textAlign: "center",
  },
});
