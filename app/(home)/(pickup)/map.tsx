import Map from "@/components/map/Map";
import { useMapStore } from "@/store/useMapStore";
import logger from "@/utils/logger/custom-logger";
import React from "react";
import { StyleSheet, View } from "react-native";
import GooglePlacesTextInput from "react-native-google-places-textinput";

const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY as string; // replace with your key

const MapScreen = () => {
  const { setOrigin, setDestination } = useMapStore();

  return (
    <View style={styles.container}>
      {/* Top Inputs */}
      <View style={styles.inputsContainer}>
        <GooglePlacesTextInput
          apiKey={GOOGLE_API_KEY}
          fetchDetails={true}
          placeHolderText="Enter Origin"
          detailsFields={["displayName", "formattedAddress", "location"]}
          onPlaceSelect={(place, details) => {
            logger.info("APP", `Origin's details:${JSON.stringify(place.details?.location)}`);
            if (!place.details) return;
            setOrigin({
              latitude: place.details?.location.latitude,
              longitude: place.details?.location.longitude,
              description:
                place?.structuredFormat?.mainText.text +
                " " +
                place?.structuredFormat.secondaryText?.text,
            });
          }}
          style={{
            input: styles.input,
          }}
        />
        <GooglePlacesTextInput
          apiKey={GOOGLE_API_KEY}
          placeHolderText="Enter Destination"
          detailsFields={["displayName", "formattedAddress", "location"]}
          onPlaceSelect={(place, details) => {
            logger.info("APP", `Destination's details:${JSON.stringify(place.details?.location)}`);
            if (!place.details) return;
            setDestination({
              latitude: place.details?.location.latitude,
              longitude: place.details?.location.longitude,
              description:
                place?.structuredFormat?.mainText.text +
                " " +
                place?.structuredFormat.secondaryText?.text,
            });
          }}
          style={{
            input: styles.input,
          }}
        />
      </View>

      {/* Map covers 75% */}
      <View style={styles.mapContainer}>
        <Map />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputsContainer: {
    padding: 10,
    backgroundColor: "#fff",
    elevation: 2,
    zIndex: 10,
  },
  input: {
    height: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
  },
  mapContainer: {
    flex: 1, // takes up 75% by default since inputs take space
  },
});

export default MapScreen;
