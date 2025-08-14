import CustomButton from "@/components/ui/CustomButton";
import { WhiteText } from "@/components/ui/Text";
import { useAuth } from "@/context/supabase-provider";
import React from "react";
import { View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <WhiteText>Profile</WhiteText>
      <View className="mt-2 w-full p-4">
        <CustomButton title="Sign Out" onPress={signOut} />
      </View>
    </View>
  );
}
