import { Pressable, View, Text } from "react-native";
import { Link, router } from "expo-router";
import { Appbar } from "react-native-paper";
import * as Clipboard from "expo-clipboard";
import React from "react";
import { useUserStore } from "../../store";
import { shortenAddress } from "@thirdweb-dev/react-native";
import QRCode from "../../components/qrcode";
import { ArrowLeft, Check, Copy } from "lucide-react-native";

export default function AddMoneyModal() {
  const isPresented = router.canGoBack();
  const user = useUserStore((state) => state.user);
  const [copied, setCopied] = React.useState(false);

  return (
    <View className="flex-1 flex-col bg-[#161618]">
      {!isPresented && <Link href="../">Dismiss</Link>}
      <Appbar.Header
        elevated={false}
        statusBarHeight={0}
        className="bg-[#161618] text-white"
      >
        <Appbar.Action
          icon={() => <ArrowLeft size={24} color="#FFF" />}
          onPress={() => router.back()}
          color="#fff"
          size={20}
        />
        <Appbar.Content
          title=""
          color="#fff"
          titleStyle={{ fontWeight: "bold" }}
        />
      </Appbar.Header>
      <View className="flex px-4 space-y-4">
        <Text className="text-3xl text-white font-bold">Add money</Text>
        <Text className="text-[#8F8F91] font-semibold mt-8">
          Add money to account
        </Text>
        <Text className="text-white font-semibold mt-2">
          Send USDC to your address below.
        </Text>
        <View className="bg-[#161618] rounded-lg flex flex-row justify-between mt-4 px-4 py-2">
          <Text className="text-[#8F8F91] text-ellipsis">
            {shortenAddress(user?.address)}
          </Text>
          <Pressable
            onPress={async () => {
              await Clipboard.setStringAsync(user!.address);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1500);
            }}
          >
            {copied ? (
              <Check size={16} color={"green"} />
            ) : (
              <Copy size={16} color={"#8F8F91"} />
            )}
          </Pressable>
        </View>
        <View className="bg-[#161618] mx-auto rounded-lg p-8">
          <QRCode />
        </View>
      </View>
    </View>
  );
}
