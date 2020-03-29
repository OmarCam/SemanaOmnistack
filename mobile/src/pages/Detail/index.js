import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

import style from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Hello, ${incident.name} I am contacting you because I would like to help in the case ${incident.title} with the value of R $ ${incident.value}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hero of the case: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={style.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={style.incidentProperty}>CASES:</Text>
        <Text style={style.incidentValue}> {incident.title} </Text>

        <Text style={style.incidentProperty}>VALOR:</Text>
        <Text style={style.incidentValue}>{incident.value}</Text>
      </View>
      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Save the day</Text>
        <Text style={style.heroTitle}>BE THE HERO of this case</Text>

        <Text style={style.heroDescription}>Get in touch</Text>

        <View style={style.actions}>
          <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
            <Text style={style.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.action} onPress={sendMail}>
            <Text style={style.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
