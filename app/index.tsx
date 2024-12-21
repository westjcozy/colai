import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>Welcome to ColAi</Text>

      {/* Section 1: About the App */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What is ColAi?</Text>
        <Text style={styles.sectionContent}>
          ColAi provides tailored coloring materials for all ages and
          situations, offering psychological comfort and a creative experience.
        </Text>
      </View>

      {/* Section 2: Key Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.sectionContent}>
          - Free basic coloring templates{"\n"}- AI-powered custom designs{"\n"}
          - Personalized content for users{"\n"}- Social sharing and community
          engagement
        </Text>
      </View>

      {/* Section 3: Differentiators */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why ColAi?</Text>
        <Text style={styles.sectionContent}>
          - AI-based personalized recommendations{"\n"}- Meditation music and
          guides while coloring{"\n"}- Learning tools for kids and memory
          training for seniors
        </Text>
      </View>

      {/* Section 4: Get Started */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get Started</Text>
        <Text style={styles.sectionContent}>
          Try ColAi today to experience a new way of relaxation and creativity.
          Tap below to explore!
        </Text>
        <Button
          title="Explore Now"
          onPress={() => alert("Navigating to Explore Page...")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#444",
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    color: "#666",
  },
});
