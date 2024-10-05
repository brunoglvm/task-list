import { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SmallInput, LargeInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { useRouter } from "expo-router";
import { colors } from "@/styles/colors";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Título"}
          value={title}
          onChangeText={setTitle}
        />
        <LargeInput
          placeholder={"Descricão"}
          value={description}
          onChangeText={setDescription}
        />
        <ConfirmButton onPress={handleNavigateBack} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
    backgroundColor: colors.gray[300],
  },
});