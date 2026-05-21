import { LessonCard, type LessonStatus } from "@/components/LessonCard";
import { images } from "@/constants/images";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import type { Lesson, Unit } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Tab = "lessons" | "practice";

function getCurrentUnit(units: Unit[], completedLessonIds: string[]): Unit {
  for (const unit of units) {
    const lessons = getLessonsByUnit(unit.id);
    const hasIncomplete = lessons.some((l) => !completedLessonIds.includes(l.id));
    if (hasIncomplete) return unit;
  }
  return units[units.length - 1] ?? units[0];
}

function getLessonStatus(
  lesson: Lesson,
  index: number,
  unitLessons: Lesson[],
  completedLessonIds: string[]
): LessonStatus {
  if (completedLessonIds.includes(lesson.id)) return "completed";
  const firstIncompleteIndex = unitLessons.findIndex(
    (l) => !completedLessonIds.includes(l.id)
  );
  if (index === firstIncompleteIndex) return "in-progress";
  return "available";
}

export default function LearnScreen() {
  const router = useRouter();
  const { selectedLanguageId } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();
  const [activeTab, setActiveTab] = useState<Tab>("lessons");

  const langId = selectedLanguageId ?? "spanish";
  const units = getUnitsByLanguage(langId);
  const currentUnit = getCurrentUnit(units, completedLessonIds);
  const unitLessons = getLessonsByUnit(currentUnit.id);

  const completedInUnit = unitLessons.filter((l) =>
    completedLessonIds.includes(l.id)
  ).length;

  const bannerUri =
    currentUnit.bannerImage ??
    `https://picsum.photos/seed/${currentUnit.id}/800/400`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f6f7fb" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* ── Unit Banner ── */}
        <View style={styles.banner}>
          {/* Background image */}
          <ExpoImage
            source={{ uri: bannerUri }}
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
          />

          {/* Dark overlay at bottom for text readability */}
          <View style={styles.bannerOverlay} />

          {/* Mascot */}
          <Image
            source={images.mascotWelcome}
            style={styles.mascot}
            resizeMode="contain"
          />

          {/* Bookmark icon */}
          <TouchableOpacity style={styles.bookmarkBtn} activeOpacity={0.7}>
            <Ionicons name="bookmark-outline" size={24} color="#ffffff" />
          </TouchableOpacity>

          {/* Unit info — bottom-left, stays clear of mascot */}
          <View style={styles.unitInfo}>
            <Text className="h2" style={{ color: "#ffffff" }}>
              {currentUnit.title}
            </Text>
            <Text className="caption" style={{ color: "rgba(255,255,255,0.82)" }}>
              Unit {currentUnit.order} · {completedInUnit} / {unitLessons.length}{" "}
              lessons
            </Text>
          </View>
        </View>

        {/* ── Tab Row ── */}
        <View style={styles.tabRow}>
          {(["lessons", "practice"] as Tab[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                className="h4"
                style={{
                  color: activeTab === tab ? "#6c4ef5" : "#6b7280",
                }}
              >
                {tab === "lessons" ? "Lessons" : "Practice"}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Content ── */}
        {activeTab === "lessons" ? (
          <View className="pt-5">
            {unitLessons.map((lesson, index) => {
              const status = getLessonStatus(
                lesson,
                index,
                unitLessons,
                completedLessonIds
              );
              return (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  order={index + 1}
                  status={status}
                  onPress={() =>
                    router.push(`/lesson/${lesson.id}` as never)
                  }
                />
              );
            })}
          </View>
        ) : (
          <View style={styles.practiceEmpty}>
            <View style={styles.practiceIconWrap}>
              <Ionicons name="construct-outline" size={36} color="#6c4ef5" />
            </View>
            <Text className="h3 text-ink" style={{ marginTop: 16 }}>
              Practice Coming Soon
            </Text>
            <Text
              className="body-md text-ink-secondary"
              style={{ marginTop: 8, textAlign: "center", paddingHorizontal: 32 }}
            >
              Interactive practice exercises for this unit are on the way.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 220,
    position: "relative",
    overflow: "hidden",
  },
  bannerOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    backgroundColor: "rgba(0, 11, 50, 0.52)",
  },
  mascot: {
    position: "absolute",
    bottom: 0,
    right: 18,
    width: 110,
    height: 158,
  },
  bookmarkBtn: {
    position: "absolute",
    top: 14,
    right: 18,
  },
  unitInfo: {
    position: "absolute",
    bottom: 18,
    left: 18,
    right: 148,
  },
  tabRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    position: "relative",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#6c4ef5",
  },
  practiceEmpty: {
    paddingTop: 64,
    alignItems: "center",
  },
  practiceIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#eeeafd",
    alignItems: "center",
    justifyContent: "center",
  },
});
