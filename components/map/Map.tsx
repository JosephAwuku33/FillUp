// components/MapViewComponent.tsx
import { useMapStore } from "@/store/useMapStore";
import * as Location from "expo-location";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";

const Map = () => {
  const { origin, destination, setOrigin } = useMapStore();
  const mapRef = useRef<MapView>(null);

  // Get user's current location if origin is not set
  useEffect(() => {
    const fetchLocation = async () => {
      if (origin?.latitude) return; // skip if origin already set

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        description: "Current Location",
      };

      setOrigin(coords);

      // Center the map immediately on user's location
      if (mapRef.current) {
        mapRef.current.animateToRegion(
          {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          },
          1000 // duration in ms
        );
      }
    };

    fetchLocation();
  }, [origin, setOrigin]);

  // Zoom to fit both markers if origin & destination are set
  useEffect(() => {
    if (!mapRef.current) return;
    if (origin && destination) {
      const coords: LatLng[] = [
        { latitude: origin.latitude, longitude: origin.longitude },
        { latitude: destination.latitude, longitude: destination.longitude },
      ];
      mapRef.current.fitToCoordinates(coords, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, [origin, destination]);

  const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        googleMapId={googleMapsApiKey}
        provider="google"
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: origin?.latitude || 0,
          longitude: origin?.longitude || 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {origin && (
          <Marker
            coordinate={{
              latitude: origin.latitude,
              longitude: origin.longitude,
            }}
            title="Origin"
            description={origin.description}
            pinColor="green"
          />
        )}
        {destination && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            title="Destination"
            description={destination.description}
            pinColor="red"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
