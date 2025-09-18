import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TitleText } from "../ui/Text";

export default function Header() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const goToProfilePage = () => {
    router.push("/(home)/tabs/profile");
  };
  return (
    <View
      style={{ paddingTop: insets.top }}
      className="flex flex-row items-center justify-between w-full gap-4 bg-primary p-4"
    >
      <TitleText>FillUp</TitleText>
      <View className="relative flex-1 text-center">
        <TextInput
          placeholder="Current Location"
          keyboardType="default"
          className=" bg-white p-3 rounded-full"
          style={{ paddingLeft: 40, fontFamily: "Lato" }}
        />
        <View className="absolute left-4 top-2">
          <FontAwesome6 name="location-dot" size={24} color="black" />
        </View>
      </View>
      <TouchableOpacity onPress={goToProfilePage}>
        <FontAwesome name="user-circle" size={36} color="white" />
      </TouchableOpacity>
    </View>
  );
}
