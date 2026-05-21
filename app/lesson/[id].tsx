import { images } from "@/constants/images";
import { getLessonById } from "@/data/lessons";
import { useProgressStore } from "@/store/useProgressStore";
import type { ListenRepeatActivity } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function getTeacherName(prompt?: string): string {
  if (!prompt) return "AI Teacher";
  if (prompt.includes("Luna")) return "Luna";
  if (prompt.includes("Camille")) return "Camille";
  if (prompt.includes("Hana")) return "Hana";
  return "AI Teacher";
}

export default function LessonScreen() {
  const { id: rawId } = useLocalSearchParams<{ id: string }>();
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const router = useRouter();
  const { completeLesson, addXp } = useProgressStore();

  const lesson = getLessonById(id);

  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(true);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text className="body-md text-ink-secondary">Lesson not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const listenRepeat = lesson.activities.find(
    (a): a is ListenRepeatActivity => a.type === "listen-repeat"
  );

  const teacherPhrase = listenRepeat?.phrase ?? lesson.goal;
  const teacherTranslation = listenRepeat?.translation ?? "";

  function handleEndCall() {
    if (!lesson) return;
    completeLesson(lesson.id);
    addXp(lesson.xpReward);
    router.back();
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#001132" />
        </TouchableOpacity>

        <View style={styles.headerMid}>
          <Text className="h4" style={{ color: "#001132" }}>
            AI Teacher
          </Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text className="caption" style={{ color: "#21C16B" }}>
              Online
            </Text>
          </View>
        </View>

        <View style={styles.headerEnd}>
          <Ionicons name="videocam-outline" size={20} color="#6b7280" />
          <Text style={styles.participantCount}>12</Text>
          <View style={styles.participantBadge}>
            <Ionicons name="person" size={12} color="#ffffff" />
          </View>
        </View>
      </View>

      {/* ── Call Canvas ── */}
      <View style={styles.canvas}>
        {/* Teacher live preview — top right corner */}
        <View style={styles.teacherThumb}>
          <View style={styles.teacherPhotoBox}>
            <Ionicons name="person" size={28} color="rgba(255,255,255,0.5)" />
            <Text style={styles.teacherName}>{getTeacherName(lesson.aiTeacherPrompt)}</Text>
          </View>
        </View>

        {/* Fox mascot — vertically centered in available space */}
        <View style={styles.mascotWrap}>
          <Image
            source={images.mascotWelcome}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Teacher speech bubble */}
        <View style={styles.bubble}>
          <View style={styles.bubbleRow}>
            <Text className="h4" style={{ color: "#001132", flex: 1 }} numberOfLines={3}>
              {teacherPhrase}
            </Text>
            <TouchableOpacity style={styles.speakerBtn} activeOpacity={0.7}>
              <Ionicons name="volume-high-outline" size={18} color="#6c4ef5" />
            </TouchableOpacity>
          </View>
          {!!teacherTranslation && (
            <Text className="body-sm" style={{ color: "#6b7280", marginTop: 4 }}>
              {teacherTranslation}
            </Text>
          )}
        </View>
      </View>

      {/* ── Call Controls ── */}
      <View style={styles.controls}>
        <CtrlButton
          icon={isCameraOn ? "videocam" : "videocam-outline"}
          label="Camera"
          active={isCameraOn}
          onPress={() => setIsCameraOn((v) => !v)}
        />
        <CtrlButton
          icon={isMicMuted ? "mic-off-outline" : "mic-outline"}
          label="Mic"
          muted={isMicMuted}
          onPress={() => setIsMicMuted((v) => !v)}
        />
        <CtrlButton
          icon="document-text-outline"
          label="Subtitles"
          active={isSubtitlesOn}
          onPress={() => setIsSubtitlesOn((v) => !v)}
        />
        <EndCallButton onPress={handleEndCall} />
      </View>

      {/* ── Session Metrics ── */}
      <View style={styles.metrics}>
        <Metric label="Speaking" value="Excellent" color="#21C16B" />
        <View style={styles.metricDivider} />
        <Metric label="Pronunciation" value="Great" color="#21C16B" />
        <View style={styles.metricDivider} />
        <Metric label="Grammar" value="Good" color="#4D88FF" />
      </View>
    </SafeAreaView>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface CtrlButtonProps {
  icon: IoniconName;
  label: string;
  active?: boolean;
  muted?: boolean;
  onPress: () => void;
}

function CtrlButton({ icon, label, active, muted, onPress }: CtrlButtonProps) {
  return (
    <TouchableOpacity style={styles.ctrlItem} onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.ctrlCircle,
          active && styles.ctrlCircleActive,
          muted && styles.ctrlCircleMuted,
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={active ? "#ffffff" : muted ? "#ff4d4f" : "#374151"}
        />
      </View>
      <Text style={[styles.ctrlLabel, active && styles.ctrlLabelPrimary, muted && styles.ctrlLabelMuted]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function EndCallButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.ctrlItem} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.endCircle}>
        <Ionicons name="call" size={22} color="#ffffff" />
      </View>
      <Text style={styles.endLabel}>End Call</Text>
    </TouchableOpacity>
  );
}

interface MetricProps {
  label: string;
  value: string;
  color: string;
}

function Metric({ label, value, color }: MetricProps) {
  return (
    <View style={styles.metricItem}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={[styles.metricValue, { color }]}>{value}</Text>
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const CANVAS_BG = "#0F1829";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // ── Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerMid: {
    flex: 1,
    marginLeft: 6,
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#21C16B",
    marginRight: 5,
  },
  headerEnd: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  participantCount: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: "#6b7280",
  },
  participantBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#6c4ef5",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Canvas
  canvas: {
    flex: 1,
    backgroundColor: CANVAS_BG,
    flexDirection: "column",
  },
  teacherThumb: {
    position: "absolute",
    top: 14,
    right: 14,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    zIndex: 10,
  },
  teacherPhotoBox: {
    width: 72,
    height: 94,
    backgroundColor: "#1A2D4A",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  teacherName: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: "rgba(255,255,255,0.6)",
  },
  mascotWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  mascot: {
    width: "100%",
    height: "100%",
  },
  bubble: {
    marginHorizontal: 14,
    marginBottom: 14,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 10,
  },
  bubbleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  speakerBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#eeeafd",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    flexShrink: 0,
  },

  // ── Controls
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  ctrlItem: {
    alignItems: "center",
    gap: 6,
  },
  ctrlCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  ctrlCircleActive: {
    backgroundColor: "#6c4ef5",
  },
  ctrlCircleMuted: {
    backgroundColor: "#fff0f0",
  },
  ctrlLabel: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: "#374151",
  },
  ctrlLabelPrimary: {
    color: "#6c4ef5",
  },
  ctrlLabelMuted: {
    color: "#ff4d4f",
  },
  endCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
  },
  endLabel: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: "#FF3B30",
  },

  // ── Metrics
  metrics: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  metricItem: {
    flex: 1,
    alignItems: "center",
  },
  metricDivider: {
    width: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 4,
  },
  metricLabel: {
    fontFamily: "Poppins",
    fontSize: 11,
    color: "#6b7280",
  },
  metricValue: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    marginTop: 3,
  },
});
