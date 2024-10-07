import React from "react";
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useRouter } from "expo-router";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "@/styles/colors";
import { LargeInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { NotificationText } from "@/styles/global";
import { useTasks } from "@/context/TaskContext";

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("*O campo não pode estar vazio")
    .max(80, "*Limite de 80 caracteres"),
});

export default function AddTask() {
  const router = useRouter();
  const { addTask } = useTasks();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <Formik
          initialValues={{ title: "" }}
          validationSchema={TaskSchema}
          onSubmit={(values) => {
            addTask(values.title);
            router.back();
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <>
              <LargeInput
                value={values.title}
                placeholder="Digite sua nova tarefa"
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                onFocus={() => {}}
              />
              {errors.title && touched.title ? (
                <NotificationText
                  style={{ fontSize: 14, color: colors.red, marginTop: 20 }}
                >
                  {errors.title}
                </NotificationText>
              ) : null}

              <ConfirmButton onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
    backgroundColor: colors.gray[300],
  },
});
