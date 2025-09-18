import CustomButton from "@/components/ui/CustomButton";
import { BlackText, WhiteText } from "@/components/ui/Text";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function TotalCost() {
  return (
    <View className="flex-1 bg-primary px-4">
      {/* Pickup Delivery Header */}
      <View className="flex flex-row mt-4 items-center justify-evenly w-full p-4 bg-black">
        <TouchableOpacity>
          <AntDesign name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <WhiteText className="text-lg font-bold">Pickup & Delivery</WhiteText>
      </View>

      {/* Total Cost Section */}
      <View className="mt-6 bg-white rounded-2xl p-4">
        <View className="flex flex-row items-center justify-between mb-4">
          <BlackText className="text-base">Service Fee</BlackText>
          <BlackText className="text-base">GHS50.00</BlackText>
        </View>
        <View className="flex flex-row items-center justify-between mb-4">
          <BlackText className="text-base">Gas Refill</BlackText>
          <BlackText className="text-base">GHS250.00</BlackText>
        </View>
        <View className="flex flex-row items-center justify-between mb-4">
          <BlackText className="text-base">Taxes</BlackText>
          <BlackText className="text-base">GHS5.00</BlackText>
        </View>
        <View className="w-full border-b border-dashed border-black" />
        <View className="flex flex-row items-center justify-between mt-4 mb-4">
          <BlackText className="text-base">Total Amount</BlackText>
          <BlackText className="text-base">GHS305.00</BlackText>
        </View>
      </View>

      {/* Confirm Order Button */}
      <View className="mt-20">
        <CustomButton title="Confirm Order" />
      </View>
    </View>
  );
}
