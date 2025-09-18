import { BlackText, WhiteText } from "@/components/ui/Text";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={["bottom", "left", "right"]}
      className="bg-primary"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="bg-primary flex-1 mx-4">
          <View className="bg-[#94ADC7] h-1/2 rounded-2xl flex flex-row items-center justify-between ">
            <View className="flex flex-col w-7/12 pl-8 pt-16">
              <WhiteText className="text-2xl font-bold">
                Get your cylinder{" "}
              </WhiteText>
              <WhiteText className="text-2xl font-bold">
                delivered in 30
              </WhiteText>
              <WhiteText className="text-2xl font-bold">minutes</WhiteText>
            </View>
            <View className="flex-1 p-3">
              <Image
                source={require("@/assets/images/woman1.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>

          {/* Select Service Type */}
          <View className="mt-4">
            <WhiteText className="text-lg font-bold mb-2">
              Select Service Type
            </WhiteText>
            <View className="flex h-3/5 flex-row items-center justify-between w-full gap-6">
              <TouchableOpacity
                onPress={() => router.push("/(home)/(pickup)/details")}
                className="flex-1 flex-col h-full rounded-2xl bg-white items-center justify-center"
              >
                <Image
                  source={require("@/assets/images/cylinder.png")}
                  style={{ width: "50%", height: "50%" }}
                />
                <View className="mx-2">
                  <BlackText className="font-bold text-center">
                    Pickup & Fill
                  </BlackText>
                  <BlackText className="text-sm text-center">
                    We collect and Return
                  </BlackText>
                  <BlackText className="text-sm text-center">
                    GHS 100 Base Fee-30 mins
                  </BlackText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/(home)/(pickup)/total-cost")}
                className="flex-1 flex-col h-full rounded-2xl bg-white items-center justify-center"
              >
                <Image
                  source={require("@/assets/images/cylinder.png")}
                  style={{ width: "50%", height: "50%" }}
                />
                <View className="mx-2">
                  <BlackText className="font-bold text-center">
                    New Cylinder
                  </BlackText>
                  <BlackText className="text-sm text-center">
                    Direct Delivery
                  </BlackText>
                  <BlackText className="text-sm text-center">
                    GHS 100 Base Fee-30 mins
                  </BlackText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
