import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type DropdownItem = {
  label: string;
  value: string | number;
};

type DropdownProps = {
  data: DropdownItem[];
  value: string | number | null;
  onSelect: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  style?: object;
};

const CustomDropdown: React.FC<DropdownProps> = ({
  data,
  value,
  onSelect,
  placeholder = "Select an option",
  label,
  style,
}) => {
  const [visible, setVisible] = useState(false);

  const selectedItem = data.find((item) => item.value === value);

  const handleSelect = (item: DropdownItem) => {
    onSelect(item.value);
    setVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Main Dropdown Button */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={selectedItem ? styles.selectedText : styles.placeholder}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <AntDesign name={visible ? "up" : "down"} size={16} color="#333" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => (
                <View style={styles.separator} />
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  dropdownButton: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholder: {
    color: "#999",
    fontSize: 14,
  },
  selectedText: {
    color: "#333",
    fontSize: 14,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    maxHeight: 300,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 12,
  },
  itemText: {
    fontSize: 14,
    color: "#333",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
  },
});

export default CustomDropdown;
