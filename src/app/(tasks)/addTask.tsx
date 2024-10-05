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
import { useTasks } from "@/context/TaskContext"; // Importe o hook useTasks
import { colors } from "@/styles/colors";

export default function AddTask() {
  const [title, setTitle] = useState(""); // Estado para armazenar o título
  const [description, setDescription] = useState(""); // Estado para armazenar a descrição (opcional)
  const router = useRouter();
  const { addTask } = useTasks(); // Acesso à função addTask do contexto

  // Função para confirmar a adição da tarefa
  const handleConfirm = () => {
    if (title.trim()) {
      // Verifica se o título não está vazio
      addTask(title); // Adiciona a tarefa com o título fornecido
      router.back(); // Navega de volta à tela anterior
    } else {
      // Pode exibir uma mensagem de erro ou feedback se o título estiver vazio
      console.log("O título da tarefa não pode estar vazio.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Título"} // Placeholder do input
          value={title} // Valor do input
          onChangeText={setTitle} // Atualiza o valor do título
        />
        <LargeInput
          placeholder={"Descrição"} // Placeholder para a descrição (opcional)
          value={description} // Valor do input de descrição
          onChangeText={setDescription} // Atualiza o valor da descrição
        />
        <ConfirmButton
          onPress={handleConfirm} // Chama a função handleConfirm ao clicar no botão
        />
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
