import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CounterProps = {
  initial?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
};

const Counter: React.FC<CounterProps> = ({
  initial = 0,
  min = 0,
  max = Infinity,
  step = 1,
  onChange,
}) => {
  const [count, setCount] = useState<number>(initial);

  const handleDecrement = () => {
    if (count > min) {
      const newVal = count - step;
      setCount(newVal);
      onChange?.(newVal);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      const newVal = count + step;
      setCount(newVal);
      onChange?.(newVal);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, count <= min && styles.disabled]}
        onPress={handleDecrement}
        disabled={count <= min}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.value}>{count}</Text>

      <TouchableOpacity
        style={[styles.button, count >= max && styles.disabled]}
        onPress={handleIncrement}
        disabled={count >= max}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "#fff",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 15,
    color: "#333",
  },
  disabled: {
    opacity: 0.4,
  },
});

export default Counter;
