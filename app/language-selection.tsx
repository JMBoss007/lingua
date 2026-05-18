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
import { useLanguageStore } from "@/store/useLanguageStore";

export default function LanguageSelectionScreen() {
  const { selectedLanguageId, setSelectedLanguage } = useLanguageStore();
  const [selectedId, setSelectedId] = useState<string>(
    selectedLanguageId ?? "spanish"
  );
  const [search, setSearch] = useState("");

  const popularLanguages = languages
    .filter((l) => l.isPopular)
    .filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View className="flex-row items-center px-4 pt-2 pb-4">
        {router.canGoBack() ? (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={22} color="#001132" />
          </TouchableOpacity>
        ) : (
          <View style={styles.backBtn} />
        )}
        <Text className="h3 text-ink flex-1 text-center">
          Choose a language
        </Text>
        {/* spacer to visually center the title */}
        <View className="w-[38px]" />
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
        <View className="px-4">
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
                <View className="w-11 h-11 rounded-full overflow-hidden bg-[#f0f0f0]">
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
                  <View className="w-[26px] h-[26px] rounded-full bg-primary items-center justify-center">
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
            onPress={() => {
              setSelectedLanguage(selectedId);
              router.replace("/home");
            }}
            disabled={!selectedId}
          >
            <Text className="btn-label text-white">Confirm</Text>
          </TouchableOpacity>
        </View>

        {/* Earth illustration — full-width, outside horizontal padding */}
        <View className="mt-6 overflow-hidden">
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
  // SafeAreaView — exempt (react-native-safe-area-context, className not supported)
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  // TouchableOpacity — exempt per style exception rules
  backBtn: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  // TextInput — exempt per style exception rules
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingLeft: 10,
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#001132",
  },
  // TouchableOpacity — exempt (base + dynamic selection/divider states)
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
  // expo-image Image — 3rd-party component, keep style prop for safety
  flagImg: {
    width: 44,
    height: 44,
  },
  // TouchableOpacity — exempt
  confirmBtn: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 24,
  },
  // expo-image Image — 3rd-party component, keep style prop for safety
  earthImg: {
    width: "100%",
    height: 200,
  },
});
