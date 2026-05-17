import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { languages } from "@/data/languages";
import { images } from "@/constants/images";

export default function LanguageSelectionScreen() {
  const [selectedId, setSelectedId] = useState<string>("spanish");
  const [search, setSearch] = useState("");

  const popularLanguages = languages
    .filter((l) => l.isPopular)
    .filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View className="flex-row items-center px-4 pt-2 pb-4">
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={22} color="#001132" />
        </TouchableOpacity>
        <Text className="h3 text-ink flex-1 text-center">
          Choose a language
        </Text>
        <View style={{ width: 38 }} />
      </View>

      {/* Search bar */}
      <View className="px-4 mb-5">
        <View className="flex-row items-center bg-surface rounded-2xl px-4">
          <Ionicons name="search" size={18} color="#6b7280" />
          <TextInput
            placeholder="Search languages"
            placeholderTextColor="#6b7280"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text className="h4 text-ink mb-3">Popular</Text>

          {popularLanguages.map((lang, index) => {
            const isSelected = selectedId === lang.id;
            const isLast = index === popularLanguages.length - 1;

            return (
              <TouchableOpacity
                key={lang.id}
                activeOpacity={0.7}
                onPress={() => setSelectedId(lang.id)}
                style={[
                  styles.langRow,
                  isSelected ? styles.langRowSelected : null,
                  !isSelected && !isLast ? styles.langRowDivider : null,
                ]}
              >
                <View style={styles.flagWrap}>
                  <Image
                    source={{ uri: lang.flag }}
                    style={styles.flagImg}
                    contentFit="cover"
                  />
                </View>

                <View className="flex-1 ml-3">
                  <Text className="h4 text-ink">{lang.name}</Text>
                  <Text className="body-sm text-ink-secondary">
                    {lang.learnerCount} learners
                  </Text>
                </View>

                {isSelected ? (
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </View>
                ) : (
                  <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
                )}
              </TouchableOpacity>
            );
          })}

          {/* Confirm button */}
          <TouchableOpacity
            style={styles.confirmBtn}
            activeOpacity={0.85}
            onPress={() => router.back()}
            disabled={!selectedId}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>

        {/* Earth illustration — full-width, outside horizontal padding */}
        <View style={styles.earthWrap}>
          <Image
            source={images.earth}
            style={styles.earthImg}
            contentFit="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backBtn: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingLeft: 10,
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#001132",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  langRowSelected: {
    backgroundColor: "#ede9fe",
    borderWidth: 1.5,
    borderColor: "#6c4ef5",
    marginBottom: 4,
  },
  langRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  flagWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  flagImg: {
    width: 44,
    height: 44,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#6c4ef5",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBtn: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 0,
  },
  confirmText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#ffffff",
    lineHeight: 24,
  },
  earthWrap: {
    marginTop: 24,
    overflow: "hidden",
  },
  earthImg: {
    width: "100%",
    height: 200,
  },
});
