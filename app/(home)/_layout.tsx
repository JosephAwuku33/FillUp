import Header from "@/components/Home/Header";
import { Stack } from "expo-router";
import React from "react";

export default function HomeLayout() {
  return (
    <Stack>
        <Stack.Screen name="tabs" options={{headerShown: false}} />
        <Stack.Screen name="(pickup)" options={{header: () => <Header />}} />
    </Stack>
  )
}
