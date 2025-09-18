import Avatar from "@/components/Home/CustomAvatar";
import { Text, WhiteText } from "@/components/ui/Text";
import { useAuth } from "@/context/supabase-provider";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-primary flex-1 mx-4 mt-4">
          <View className="flex flex-row items-start w-full gap-4">
            <Avatar
              size={150}
              name="Joseph Awuku"
            />
            <View className="flex flex-col items-start justify-center gap-2 mt-6">
              <WhiteText className="text-xl font-bold">Joseph Awuku</WhiteText>
              <Text className="font-light text-sm text-gray-400">
                josephamoakoawuku@gmail.com
              </Text>
            </View>
          </View>
          <View className="mt-3">
            <WhiteText className="text-3xl font-bold">Quick Actions</WhiteText>
          </View>

          <View className="flex-1 mt-6 gap-6">
            <View className="flex flex-row items-center justify-between w-full">
              <WhiteText className="text-base">My Orders</WhiteText>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>
            <View className="flex flex-row items-center justify-between w-full">
              <WhiteText className="text-base">Saved Addresses</WhiteText>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>
            <View className="flex flex-row items-center justify-between w-full">
              <WhiteText className="text-base">Payment Methods</WhiteText>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>
            <View className="flex flex-row  items-center justify-between w-full">
              <WhiteText className="text-base">Help Center</WhiteText>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>
          </View>

          <View className="mt-6">
            <WhiteText className="text-3xl font-bold">
              Account settings
            </WhiteText>
          </View>

          <View className="flex-1 mt-6 gap-6">
            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Personal Information
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  Name, email, phone number
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Notifications
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  Push notifications, emails
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Language & Region
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  English, Ghana
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Privacy & Security
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  Password, data sharing
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Payment Settings
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  Cards and methods
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>


            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  Help & Support
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  FAQ, contact us
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col items-start justify-center gap-1">
                <WhiteText className="text-lg font-bold">
                  About App
                </WhiteText>
                <Text className="text-sm text-gray-500">
                  Version 1.0.0
                </Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>

            <View className="flex flex-row items-center justify-center w-full">
              <TouchableOpacity onPress={signOut}>
                <Text className="text-base text-gray-600">Log out</Text>
              </TouchableOpacity>
            </View>

            <View className="flex flex-row items-center justify-center w-full gap-6">
              <TouchableOpacity>
                <Entypo name="twitter" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="facebook" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="instagram" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
