import { Text, TouchableOpacity, View } from "react-native";

export default function AppButton({
  text,
  onPress,
  variant = "primary",
}: {
  text: string;
  onPress: () => void;
  variant?: "primary" | "ghost" | "disabled";
}) {
  if (variant === "ghost") {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="bg-transparent border-2 border-[#667DFF] rounded-full flex items-center justify-center py-3"
      >
        <Text className="text-lg text-[#667DFF] font-semibold">{text}</Text>
      </TouchableOpacity>
    );
  }

  if (variant === "disabled") {
    return (
      <View className="bg-[#667DFF] border-2 opacity-50 border-[#667DFF] rounded-full flex items-center justify-center py-3">
        <Text className="text-lg text-white font-semibold">{text}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#667DFF] border-2 border-[#667DFF] rounded-full flex items-center justify-center py-3"
    >
      <Text className="text-lg text-white font-semibold">{text}</Text>
    </TouchableOpacity>
  );
}