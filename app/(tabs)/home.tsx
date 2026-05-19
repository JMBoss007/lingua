import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useProgressStore } from "@/store/useProgressStore";
import type { LessonType } from "@/types/learning";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LANGUAGE_GREETING: Record<string, string> = {
  spanish: "Hola",
  french: "Bonjour",
  japanese: "こんにちは",
};

const DIFFICULTY_LEVEL: Record<string, string> = {
  beginner: "A1",
  intermediate: "B1",
  advanced: "C1",
};

type PlanConfig = {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  bgColor: string;
  iconColor: string;
};

const LESSON_PLAN_CONFIG: Record<LessonType, PlanConfig> = {
  vocabulary: {
    label: "Lesson",
    icon: "book-outline",
    bgColor: "#EEF3FF",
    iconColor: "#4d88ff",
  },
  phrase: {
    label: "Lesson",
    icon: "book-outline",
    bgColor: "#EEF3FF",
    iconColor: "#4d88ff",
  },
  audio: {
    label: "AI Conversation",
    icon: "headset-outline",
    bgColor: "#EDFAF3",
    iconColor: "#21c16b",
  },
  chat: {
    label: "Chat",
    icon: "chatbubble-outline",
    bgColor: "#FFF0F0",
    iconColor: "#ff4d4f",
  },
};

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageId } = useLanguageStore();
  const { dailyXpEarned, dailyXpGoal, streakDays, completedLessonIds } =
    useProgressStore();

  const language = languages.find((l) => l.id === selectedLanguageId);
  const languageUnits = language ? getUnitsByLanguage(language.id) : [];
  const firstUnit = languageUnits[0];
  const todayLessons = firstUnit
    ? getLessonsByUnit(firstUnit.id).slice(0, 3)
    : [];

  const greeting = language
    ? (LANGUAGE_GREETING[language.id] ?? "Hello")
    : "Hello";
  const level = language
    ? (DIFFICULTY_LEVEL[language.difficulty] ?? "A1")
    : "A1";
  const firstName = user?.firstName ?? user?.username ?? "there";
  const xpProgress =
    dailyXpGoal > 0 ? Math.min(dailyXpEarned / dailyXpGoal, 1) : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-4 pb-3">
          <View className="flex-row items-center">
            {language && (
              <ExpoImage
                source={{ uri: language.flag }}
                style={{ width: 32, height: 22, borderRadius: 4 }}
                contentFit="cover"
              />
            )}
            <Text className="h4 text-ink ml-2">
              {greeting}, {firstName}! 👋
            </Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={images.streakFire}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="ml-1 font-poppins-semibold text-sm leading-5 text-ink">
              {streakDays}
            </Text>
            <TouchableOpacity className="ml-3">
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#001132"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5">
          {/* ── Daily Goal Card ── */}
          <View className="bg-[#FFF7EE] rounded-2xl p-4 flex-row items-center">
            <View className="flex-1">
              <Text className="body-sm text-ink-secondary">Daily goal</Text>
              <Text className="h3 text-ink mt-0.5">
                {dailyXpEarned} / {dailyXpGoal} XP
              </Text>
              <View className="h-2 bg-[#FFE0B2] rounded mt-[10] overflow-hidden">
                <View
                  className="h-full bg-streak rounded"
                  style={{ width: `${Math.round(xpProgress * 100)}%` }}
                />
              </View>
            </View>
            <Image
              source={images.treasure}
              className="w-20 h-20 ml-3"
              resizeMode="contain"
            />
          </View>

          {/* ── Continue Learning Card ── */}
          {language && firstUnit && (
            <View className="bg-primary rounded-2xl pt-5 pb-5 pl-5 pr-0 flex-row items-center overflow-hidden min-h-[160] mt-4">
              <View className="flex-1 justify-center">
                <Text className="font-poppins text-xs leading-[18] text-white/75">
                  Continue learning
                </Text>
                <Text className="font-poppins-bold text-[28] leading-[34] text-white mt-0.5">
                  {language.name}
                </Text>
                <Text className="font-poppins text-[13] leading-5 text-white/75 mt-0.5">
                  {level} · Unit {firstUnit.order}
                </Text>
                <TouchableOpacity className="bg-white rounded-[20] px-5 py-2 self-start mt-3.5">
                  <Text className="font-poppins-semibold text-[13] text-primary">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={images.palace}
                className="w-[130] h-[155] self-end"
                resizeMode="contain"
              />
            </View>
          )}

          {/* ── Today's Plan ── */}
          {todayLessons.length > 0 && (
            <View className="mt-6">
              <View className="flex-row items-center justify-between mb-3">
                <Text className="h4 text-ink">Today's plan</Text>
                <TouchableOpacity>
                  <Text className="body-md text-primary">View all</Text>
                </TouchableOpacity>
              </View>

              <View className="bg-white rounded-2xl border border-border overflow-hidden">
                {todayLessons.map((lesson, index) => {
                  const config = LESSON_PLAN_CONFIG[lesson.type];
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  const isLast = index === todayLessons.length - 1;
                  const subtitle =
                    lesson.type === "vocabulary"
                      ? `${lesson.vocabulary?.length ?? 0} words`
                      : lesson.title;

                  return (
                    <View key={lesson.id}>
                      <TouchableOpacity className="flex-row items-center py-[14] px-4">
                        <View
                          className="w-11 h-11 rounded-xl justify-center items-center"
                          style={{ backgroundColor: config.bgColor }}
                        >
                          <Ionicons
                            name={config.icon}
                            size={20}
                            color={config.iconColor}
                          />
                        </View>
                        <View className="flex-1 ml-3">
                          <Text className="body-md text-ink">
                            {config.label}
                          </Text>
                          <Text
                            className="body-sm text-ink-secondary"
                            numberOfLines={1}
                          >
                            {subtitle}
                          </Text>
                        </View>
                        {isCompleted ? (
                          <View className="w-6 h-6 rounded-full bg-lingua-blue justify-center items-center">
                            <Ionicons name="checkmark" size={14} color="#fff" />
                          </View>
                        ) : (
                          <View className="w-6 h-6 rounded-full border-2 border-border" />
                        )}
                      </TouchableOpacity>
                      {!isLast && (
                        <View className="h-px bg-[#f3f4f6] ml-[72]" />
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
