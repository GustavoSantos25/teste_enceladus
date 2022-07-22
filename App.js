import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL = 'http://localhost:8000';

const fetchGET = (url) => {
  return fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
  })
}

const fetchPOST = (url, payload) => {
  return fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body : JSON.stringify(payload)
  })
}

const onInsertHandler = () => {
  const payload = {
    "nusp" : 11221933,
    "telefone": "974542371",
    "email" : "gustavosantos25@usp.br",
    "tipo":  "ATIVO",
    "nome": "Gustavo Santos Morais",
    "password": "password",
    "unidade_ensino": "IME",
    "curso": "Ciência da Computação",
    "nivel": "Bacharelado",
    "status": "Em andamento"
  }
  fetchPOST("/usuario/create", payload)
  .then(async res => {
    if(res.status === 200){
      console.log("Usuário criado com sucesso!")
    }
    else if(res.status === 409){
      console.log("Usuário já cadastrado!")
    }
  })
}

const onSelectHandler = () => {
  fetchGET("/usuario/11221933")
  .then(async res => {
    try{
      if(res.status === 200) {
        const jsonRes = await res.json()
        console.log(jsonRes)
      }
      else if(res.status === 404){
        console.log("Usuário não existe!")
      }
    } 
    catch{err => {
      console.log('error', err)
    }}
  })
}

const onLoginHandler = () => {
  fetchGET("/login/11221934/password")
  .then(async res => {
    try{
      if(res.status === 200) {
        const jsonRes = await res.json()
        console.log("Usuário logado")
      }
      else if(res.status === 404){
        console.log("Usuário não cadastrado!")
      }
    } 
    catch{err => {
      console.log('error', err)
    }}
  })
}

const onCriarSalaEstudosHandler = () => {
  const payload = {
    "nome": "SALA 2",
    "unidade_ensino": "IME"
  }
  fetchPOST("/sala_estudos/create", payload)
  .then(async res => {
    if(res.status === 200){
      console.log("Sala criada com sucesso!")
    }
    else if(res.status === 409){
      console.log("Sala já existe no banco!")
    }
  })
}

const onSelecionarSalaEstudosHandler = () => {
  fetchGET("/sala_estudos/SALA 3")
  .then(async res => {
    if(res.status === 200){
      const sala_estudos = await res.json()
      console.log(sala_estudos)
    }
    else if(res.status === 404){
      console.log("Sala não existe!")
    }
  })
}

const onUsuarioByUnidadeHandler = () => {
  fetchGET("/usuarios/unidade/IME")
  .then(async res => {
    if(res.status === 200){
      const usuarios = await res.json()
      console.log(usuarios)
    }
    else if(res.status === 404){
      console.log("A unidade não existe!")
    }
  })
}

const onUsuarioByCursoHandler = () => {
  fetchGET("/usuarios/curso/Ciência da Computação")
  .then(async res => {
    if(res.status === 200){
      const usuarios = await res.json()
      console.log(usuarios)
    }
  })
}

const onSalaByUnidadeHandler = () => {
  fetchGET("/sala_estudos/unidade/FFLCH")
  .then(async res => {
    if(res.status === 200){
      const usuarios = await res.json()
      console.log(usuarios)
    }
    else if(res.status === 404){
      console.log("A unidade não existe!")
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
      <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onCriarSalaEstudosHandler}>
        <Text style={styles.buttonText}>Criar Sala de Estudos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSelecionarSalaEstudosHandler}>
        <Text style={styles.buttonText}>Selecionar Sala de Estudos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onUsuarioByUnidadeHandler}>
        <Text style={styles.buttonText}>Selecionar Usuários por unidade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onUsuarioByCursoHandler}>
        <Text style={styles.buttonText}>Selecionar Usuários por curso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSalaByUnidadeHandler}>
        <Text style={styles.buttonText}>Selecionar sala por unidade</Text>
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
