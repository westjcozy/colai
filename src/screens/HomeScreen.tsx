import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawingCard } from "@/components/DrawingCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Drawing, Category } from "@/types";

const CATEGORIES: Category[] = [
  { id: "all", name: "전체", value: "all" },
  { id: "nature", name: "자연", value: "자연" },
  { id: "animal", name: "동물", value: "동물" },
  { id: "pattern", name: "패턴", value: "패턴" },
];

const SAMPLE_DRAWINGS: Drawing[] = [
  {
    id: "1",
    title: "평화로운 정원",
    imageUrl: "https://example.com/garden.jpg",
    category: "자연",
    difficulty: "easy",
  },
  {
    id: "2",
    title: "귀여운 동물들",
    imageUrl: "https://example.com/animals.jpg",
    category: "동물",
    difficulty: "easy",
  },
  {
    id: "3",
    title: "만다라 아트",
    imageUrl: "https://example.com/mandala.jpg",
    category: "패턴",
    difficulty: "medium",
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDrawings = useMemo(() => {
    if (selectedCategory === "all") {
      return SAMPLE_DRAWINGS;
    }
    return SAMPLE_DRAWINGS.filter(
      (drawing) => drawing.category === selectedCategory
    );
  }, [selectedCategory]);

  const handleDrawingPress = (drawing: Drawing) => {
    console.log("Selected drawing:", drawing);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>ColAi</Text>

        {/* 기본 도안 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기본 도안</Text>
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.drawingList}
          >
            {filteredDrawings.map((drawing) => (
              <DrawingCard
                key={drawing.id}
                drawing={drawing}
                onPress={handleDrawingPress}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 16,
    color: "#333",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  drawingList: {
    paddingVertical: 8,
  },
});

export default HomeScreen;
