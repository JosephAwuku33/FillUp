import { Stack } from "expo-router";
import React from "react";

export default function PickUpLayout() {
  return (
    <Stack>
      <Stack.Screen name="details" options={{ headerShown: false }} />
      <Stack.Screen name="total-cost" options={{ headerShown: false }} />
      <Stack.Screen name="map" options={{ headerShown: false }} />
    </Stack>
  );
}
