import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL = 'http://localhost:8000';

const onInsertHandler = () => {
  const payload = {
    "name" : "name1",
    "email" : "email", 
    "password" : "password"
  }
  fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body : JSON.stringify(payload)
  })
}

const onSelectHandler = () => {
  fetch(`${API_URL}/select`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
  })
  .then(async res => {
    try{
      const jsonRes = await res.json()
      if(res.status === 200) {
        console.log(jsonRes)
      }
    } 
    catch{
      
    }
  })
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={onInsertHandler}>
        <Text style={styles.buttonText}>Criar usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSelectHandler}>
        <Text style={styles.buttonText}>Selecionar usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },
});
