import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "@/styles/colors";
import { H2DarkText, NotificationText } from "@/styles/global";
import { Loading } from "@/components/loading";
import { SmallInput } from "@/components/Inputs";
import { LoginButton } from "@/components/Buttons";

type LoginFormValues = {
  username: string;
};

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername) {
        router.replace({
          pathname: "/home",
          params: { username: storedUsername },
        });
      } else {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  // Limpa os dados armazenados
  // useEffect(() => {
  //   const clearStorage = async () => {
  //     await AsyncStorage.clear();
  //     console.log("AsyncStorage limpo");
  //   };
  //   clearStorage();
  // }, []);

  const handleLogin = async (values: LoginFormValues) => {
    const { username } = values;
    await AsyncStorage.setItem("username", username);

    router.replace({
      pathname: "/home",
      params: { username },
    });
  };

  if (loading) {
    return <Loading />;
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("*Necessário fornecer um nome")
      .max(26, "*Limite de 26 caracteres"),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <H2DarkText style={{ fontSize: 30, color: colors.gray[600] }}>
          Digite seu nome
        </H2DarkText>

        <Formik
          initialValues={{ username: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <SmallInput
                placeholder={"Nome de usuário"}
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                onFocus={() => {}}
              />
              {errors.username && touched.username && (
                <NotificationText
                  style={{ fontSize: 14, color: colors.red, marginTop: 20 }}
                >
                  {errors.username}
                </NotificationText>
              )}
              <View style={{ marginTop: 20 }}>
                <LoginButton title="Entrar" onPress={handleSubmit} />
              </View>
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
    paddingBottom: 40,
    backgroundColor: colors.gray[300],
  },
});
