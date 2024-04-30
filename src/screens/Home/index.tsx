import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Participants } from "../../components/Participants";

export default function Home () {
  const [nameParticipants, setNameParticipants] = useState('');

  const [participants, setParticipants] = useState<string[]>([]);

  function handlePartipantAdd() {
    if (participants.includes(nameParticipants)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com este nome");
    };

    setParticipants((item) => (
        [
          ...item, 
          nameParticipants
        ]
      ));
    setNameParticipants('');
  };

   function handlePartipantRemove(name:string) {
    setParticipants(item => 
      item
      .filter(participants => participants !== name 
    ));

    return Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>
        Evento
      </Text>

      <Text style={styles.textInformation}>
        O evento acontecerá no dia 26 de abril de 2024
      </Text>

      <View style={styles.form}>

        <TextInput 
          placeholder="Digite seu nome"
          placeholderTextColor={'black'}
          style = {styles.input}
          onChangeText={setNameParticipants}
          value={nameParticipants}
        />

        <TouchableOpacity 
          style={styles.btn}
          onPress={handlePartipantAdd}
          >
          <Text style={styles.btnText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList 
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Participants 
              name = {item} 
              onRemove = {() => handlePartipantRemove(item)}
              key={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
            <Text style = {styles.textEmptyList}>
              Ninguém chegou no evento ainda!!!
            </Text>
            <Text style = {styles.textEmptyList}>
              Adicione alguém na lista de presença
            </Text>
            </>
          )}
        />
    </View>
  );
};
