import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RadioButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  size?: number; // optional, to customize circle size
  color?: string; // optional, to customize active color
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
  size = 20,
  color = "#007AFF", // default iOS blue
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View
        style={[
          styles.radioOuter,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      >
        {selected && (
          <View
            style={[
              styles.radioInner,
              {
                width: size / 2,
                height: size / 2,
                borderRadius: size / 4,
                backgroundColor: color,
              },
            ]}
          />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioOuter: {
    borderWidth: 2,
    borderColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  radioInner: {
    backgroundColor: "#007AFF",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default RadioButton;
