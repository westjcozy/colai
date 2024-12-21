import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Drawing } from "@/types";

interface DrawingCardProps {
  drawing: Drawing;
  onPress: (drawing: Drawing) => void;
}

export const DrawingCard = ({ drawing, onPress }: DrawingCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(drawing)}>
      <Image
        source={{ uri: drawing.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{drawing.title}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>{drawing.category}</Text>
          <Text style={styles.tag}>{drawing.difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  tagContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tag: {
    fontSize: 12,
    color: "#666",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
