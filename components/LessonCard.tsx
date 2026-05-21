import type { Lesson } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type LessonStatus = "completed" | "in-progress" | "available";

interface LessonCardProps {
  lesson: Lesson;
  order: number;
  status: LessonStatus;
  onPress: () => void;
}

export function LessonCard({ lesson, order, status, onPress }: LessonCardProps) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in-progress";

  const imageUri =
    lesson.image ?? `https://picsum.photos/seed/${lesson.id}/300/200`;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isInProgress && styles.inProgressCard]}
      activeOpacity={0.85}
    >
      <View style={{ flex: 1 }}>
        <Text
          className="caption"
          style={{ color: isInProgress ? "rgba(255,255,255,0.7)" : "#6b7280" }}
        >
          Lesson {order}
        </Text>
        <Text
          className="h4 mt-0.5"
          style={{ color: isInProgress ? "#ffffff" : "#001132" }}
          numberOfLines={2}
        >
          {lesson.title}
        </Text>

        {isInProgress && (
          <View style={styles.badge}>
            <Text className="caption" style={{ color: "#ffffff" }}>
              In progress
            </Text>
          </View>
        )}

        {!isInProgress && (
          <Text className="caption mt-1" style={{ color: "#6b7280" }}>
            {lesson.xpReward} XP · {lesson.estimatedMinutes} min
          </Text>
        )}
      </View>

      {/* ── Right side ── */}
      {isCompleted && (
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={22} color="#ffffff" />
        </View>
      )}

      {isInProgress && (
        <ExpoImage
          source={{ uri: imageUri }}
          style={styles.lessonImage}
          contentFit="cover"
        />
      )}

      {!isCompleted && !isInProgress && (
        <View style={styles.availableIcon}>
          <Ionicons name="chevron-forward" size={18} color="#6b7280" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  inProgressCard: {
    backgroundColor: "#6c4ef5",
    borderColor: "#6c4ef5",
    shadowColor: "#6c4ef5",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 8,
  },
  badge: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  checkCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#21c16b",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  lessonImage: {
    width: 84,
    height: 84,
    borderRadius: 12,
    marginLeft: 14,
  },
  availableIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f6f7fb",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});
