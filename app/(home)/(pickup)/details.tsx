import Counter from "@/components/ui/Counter";
import CustomButton from "@/components/ui/CustomButton";
import CustomDropdown from "@/components/ui/CustomDropdown";
import RadioButton from "@/components/ui/RadioButton";
import { BlackText, Text, WhiteText } from "@/components/ui/Text";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
  const [selectedCylinderOption, setSelectedCylinderOption] = useState<
    string | number | null
  >(null);
  const [selectedCondition, setSelectedCondition] = useState<string>("Empty");
  const router = useRouter();
  const cylinderOptions = [
    { label: "45kg Cylinder", value: "45kg" },
    { label: "15kg Standard Cylinder", value: "15kg" },
    { label: "11kg Cylinder", value: "11kg" },
    { label: "9kg Cylinder", value: "9kg" },
    { label: "6kg Cylinder", value: "6kg" },
    { label: "3kg Cylinder", value: "3kg" },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={["bottom", "left", "right"]}
      className="bg-primary"
    >
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      >
        <View className="bg-primary mx-4">
          {/* Pickup Delivery Header */}
          <View className="flex flex-row mt-4 items-center justify-evenly w-full p-4 bg-black">
            <TouchableOpacity>
              <AntDesign name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <WhiteText className="text-lg font-bold">
              Pickup & Delivery
            </WhiteText>
          </View>

          {/* Cylinder Details Section */}
          <View className="bg-white h-6/7 rounded-2xl mt-2 p-2">
            <BlackText className="text-3xl text-center mt-2">
              Cylinder Details
            </BlackText>

            <View className="mx-4 mt-4">
              <CustomDropdown
                data={cylinderOptions}
                value={selectedCylinderOption}
                onSelect={setSelectedCylinderOption}
                placeholder="Select a cylinder"
                label="Cylinder Type"
              />
            </View>

            <View className="flex flex-row items-center gap-3 mx-4 mt-2">
              <Counter initial={1} max={10} min={1} />
              <BlackText className="text-base text-center">
                Max 10 cylinders per order
              </BlackText>
            </View>

            <View className="flex flex-row items-center justify-between w-3/4 mx-4 mt-2">
              <RadioButton
                label="Empty"
                selected={selectedCondition === "Empty"}
                onPress={() => setSelectedCondition("Empty")}
              />
              <RadioButton
                label="Partially Filled"
                selected={selectedCondition === "Partially Filled"}
                onPress={() => setSelectedCondition("Partially Filled")}
              />
            </View>

            <View className="flex flex-col gap-3 mx-4 mt-6">
              <BlackText className="text-base">Cylinder Status</BlackText>
              <BlackText className="text-base font-bold">
                Special Instructions (Optional)
              </BlackText>
              <TextInput
                placeholder="Enter any special instructions here..."
                multiline
                numberOfLines={4}
                maxLength={500}
                className="border border-gray-600 rounded-lg p-2"
                style={{
                  minHeight: 100,
                  textAlignVertical: "top",
                  fontFamily: "Lato",
                }}
              />
            </View>
          </View>

          {/* Pickup Location Section */}
          <View className="mt-4 mx-4">
            <WhiteText className="text-lg font-bold">Pickup Location</WhiteText>
          </View>
          <View className="flex flex-row items-center justify-between w-full bg-white rounded-lg mt-4 p-4">
            <View className="flex flex-row items-center gap-3">
              <Entypo name="location-pin" size={24} color="black" />
              <BlackText className="text-lg font-bold">
                Current Location
              </BlackText>
            </View>
            <TouchableOpacity>
              <Text className="font-bold text-cyan-600">Change</Text>
            </TouchableOpacity>
          </View>

          {/* Delivery Gas Station Section */}
          <View className="mt-4 mx-4">
            <WhiteText className="text-lg font-bold">
              Delivery Gas Station
            </WhiteText>
          </View>
          <View className="flex flex-row items-center justify-between w-full bg-white rounded-lg mt-4 p-4">
            <View className="flex flex-row items-center gap-3">
              <Entypo name="location-pin" size={24} color="black" />
              <BlackText className="text-lg font-bold">
                Current Location
              </BlackText>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/(home)/(pickup)/map")}
            >
              <Text className="font-bold text-cyan-600">Change</Text>
            </TouchableOpacity>
          </View>

          {/* Continue Button */}
          <View className="mt-6">
            <CustomButton
              onPress={() => router.push("/(home)/(pickup)/total-cost")}
              title="Continue"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
