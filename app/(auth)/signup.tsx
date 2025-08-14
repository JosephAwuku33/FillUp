import CustomButton from "@/components/ui/CustomButton";
import Loader from "@/components/ui/Loader";
import { ItalicText, Text, WhiteText } from "@/components/ui/Text";
import { supabase } from "@/config/supabase";
import { useAuth } from "@/context/supabase-provider";
import logger from "@/utils/logger/custom-logger";
import { signUpSchema } from "@/utils/validationSchema/authValidationSchema";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const { signUp } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (form: FormValues) => {
    const { email, password } = form;

    try {
      const user = await signUp(email, password);

      if (!user) {
        Alert.alert("Error", "User creation failed");
        return;
      }

      const { error: insertError } = await supabase.from("users").insert([
        {
          id: user.id,
          created_at: new Date(),
          full_name: form.fullName,
          email: form.email,
          role: "REQUESTER",
          phone_number: form.phoneNumber,
          email_verified: true,
        },
      ]);

      if (insertError) {
        logger.info("APP", `This is the error ${insertError}`);
      } else {
        router.replace("/(home)/tabs");
        Alert.alert("APP", "Registration successfull");
      }
    } catch (error: Error | any) {
      logger.error("APP", `There was an error with signup ${error}`);
      Alert.alert("Error", "There was an issue with signup");
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#121417", paddingBottom: 20 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-col items-start justify-start w-full gap-4 p-6">
          {isSubmitting && <Loader />}
          <View>
            <WhiteText className="text-3xl text-secondary font-bold">
              Hello
            </WhiteText>
            <WhiteText className="text-3xl text-black font-bold">
              there!
            </WhiteText>
          </View>
          <ItalicText className="text-sm leading-6 text-quaternary">
            Create an account to save your favorites, get personalized
            recommendations, and receive instant updates on new listings!
          </ItalicText>

          {/* Full Name */}
          <View className="gap-3 w-full">
            {/* <WhiteText className="text-lg">Full Name</WhiteText> */}
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={{
                      borderRadius: 8,
                      borderWidth: 2,
                      color: "white",
                      padding: 15,
                      borderColor: "#3B4A54",
                    }}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your full name"
                    keyboardType="default"
                    placeholderTextColor="#98A2B3"
                  />
                </>
              )}
            />
            {errors.fullName && (
              <Text className="text-red-500 text-sm">
                {errors.fullName.message}
              </Text>
            )}
          </View>

          {/* Email */}
          <View className="gap-3 w-full">
            {/* <WhiteText className="text-lg">Email</WhiteText> */}
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={{
                      borderRadius: 8,
                      borderWidth: 2,
                      color: "white",
                      padding: 15,
                      borderColor: "#3B4A54",
                    }}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    placeholder="kwamedugbatey@gmail.com"
                    keyboardType="email-address"
                    placeholderTextColor="#98A2B3"
                  />
                </>
              )}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Password */}
          <View className="gap-2 w-full">
            {/* <WhiteText className="text-lg">Password</WhiteText> */}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <View className="relative w-full">
                  <TextInput
                    style={{
                      borderRadius: 8,
                      borderWidth: 2,
                      color: "white",
                      padding: 15,
                      borderColor: "#3B4A54",
                    }}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!passwordVisible}
                    placeholder="Password"
                    keyboardType="visible-password"
                    placeholderTextColor="#98A2B3"
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 top-4"
                  >
                    <Feather
                      name={passwordVisible ? "eye-off" : "eye"}
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm">
                {errors.password.message}
              </Text>
            )}
          </View>

          {/* Confirm Password */}
          <View className="gap-2 w-full">
            {/* <WhiteText className="text-lg">Confirm Password</WhiteText> */}
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <View className="relative w-full">
                  <TextInput
                    style={{
                      borderRadius: 8,
                      borderWidth: 2,
                      color: "white",
                      padding: 15,
                      borderColor: "#3B4A54",
                    }}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!confirmPasswordVisible}
                    placeholder="Password"
                    keyboardType="visible-password"
                    placeholderTextColor="#98A2B3"
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                    className="absolute right-4 top-4"
                  >
                    <Feather
                      name={passwordVisible ? "eye-off" : "eye"}
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.confirmPassword && (
              <Text className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </Text>
            )}
          </View>

          {/* Phone Number */}
          <View className="gap-3 w-full">
            {/* <WhiteText className="text-lg">Phone Number</WhiteText> */}
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={{
                      borderRadius: 8,
                      borderWidth: 2,
                      color: "white",
                      padding: 15,
                      borderColor: "#3B4A54",
                    }}
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your phone number"
                    keyboardType="decimal-pad"
                    placeholderTextColor="#98A2B3"
                  />
                </>
              )}
            />
            {errors.phoneNumber && (
              <Text className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </Text>
            )}
          </View>

          {/* Sign Up button */}
          <View className="mt-2 w-full">
            <CustomButton
              title="Register"
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            />
          </View>

          <View className="flex flex-row items-end justify-end gap-1 w-full ">
            <WhiteText>Already a user?</WhiteText>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="text-gray-500">Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
