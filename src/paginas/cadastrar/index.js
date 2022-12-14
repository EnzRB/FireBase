import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from '../../firebaseConnection/index.js'
import React,{useState} from 'react'

export default function Cadastrar(){

    const [nome,setNome] = useState("");
    const [nota1,setNota1] = useState("");
    const [nota2,setNota2] = useState("");
    const [nota3,setNota3] = useState("");
    const [imagem,setImagem] = useState("");

    async function cadastrar(){

    const Alunos = await firebase.database().ref('Alunos');
    const chave = Alunos.push().key;

    Alunos.child(chave).set ({
        Nome: nome,
        Nota1: nota1,
        Nota2: nota2,
        Nota3: nota3,
        Imagem: imagem
    })

    }


    return(

        <View style ={estilos.container}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos </Text>
        <Text style ={estilos.texto}>Nome :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite o nome do aluno' onChangeText = { (Texto) => setNome(Texto) }></TextInput>
        <Text style ={estilos.texto}>Nota1 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 1 do aluno' onChangeText = { (Texto) => setNota1(Texto) }></TextInput>
        <Text style ={estilos.texto}>Nota2 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 2 do aluno' onChangeText = { (Texto) => setNota2(Texto) }></TextInput>
        <Text style ={estilos.texto}>Nota3 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 3 do aluno' onChangeText = { (Texto) => setNota3(Texto) }></TextInput>
        <Text style ={estilos.texto}>Imagem :</Text>
        <TextInput style ={estilos.entradas} placeholder='Digite o link com a foto do aluno' onChangeText = { (Texto) => setImagem(Texto) }></TextInput>


    <TouchableOpacity style ={estilos.botao} onPress={cadastrar}>
        <Text style={{fontWeight:'bold'}}>Cadastrar</Text></TouchableOpacity>
    </View>

    );

}

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'

    },
    entradas :{
        width:'85%',
        height:30,
        borderWidth:2
    },
    botao:{
        width:'85%',
        height:60,
        alignItems:'center',
        backgroundColor:'orange',
        marginTop:20,
        justifyContent:'center',
        fontWeight:'bold'
    },
    texto:{
        marginTop:20,
        marginLeft:-252,
        fontSize:15,
        fontWeight:'bold'


    }


})