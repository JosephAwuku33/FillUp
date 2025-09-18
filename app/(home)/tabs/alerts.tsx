import { WhiteText } from "@/components/ui/Text";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function Alerts() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <View className="w-full h-1/2">
        <Image
          source={require("@/assets/images/emails.svg")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      <View className="mt-3 mx-12">
        <WhiteText className="text-lg font-extrabold text-center">
          You will be notified of everything through your email for now
        </WhiteText>
      </View>
    </View>
  );
}
