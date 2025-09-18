// stores/useMapStore.ts
import { create } from "zustand";

export type Location = {
  latitude: number;
  longitude: number;
  description: string;
} | null;

type MapState = {
  origin: Location;
  destination: Location;
  setOrigin: (location: Location) => void;
  setDestination: (location: Location) => void;
  reset: () => void;
};

export const useMapStore = create<MapState>((set) => ({
  origin: null,
  destination: null,
  setOrigin: (location) => set({ origin: location }),
  setDestination: (location) => set({ destination: location }),
  reset: () => set({ origin: null, destination: null }),
}));
