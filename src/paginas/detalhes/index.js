import { useRoute } from '@react-navigation/native';
import React from 'react'
import {View,Text,Image, StyleSheet,TextInput, SafeAreaView, StatusBar} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';





export default function Detalhes(){
const routes = useRoute();
return(

    <View style ={estilo.container}>
            <Image style = {estilo.imagem} source={{uri: routes.params?.imagem}}></Image>
        <Text style ={estilo.texto}>Nome :</Text>
            <TextInput  style ={estilo.entradas}></TextInput>
        <Text style ={estilo.texto}>Nota1 :</Text>
            <TextInput  style ={estilo.entradas}></TextInput>
        <Text style ={estilo.texto}>Nota2 :</Text>
            <TextInput  style ={estilo.entradas}></TextInput>
        <Text style ={estilo.texto}>Nota3 :</Text>
            <TextInput  style ={estilo.entradas}></TextInput>
        <Text style ={estilo.texto}>Imagem :</Text>
            <TextInput style ={estilo.entradas}></TextInput>

        <TouchableOpacity>
        <Text style={{fontWeight:'bold'}}>Atualizar</Text></TouchableOpacity>
        <TouchableOpacity>
        <Text style={{fontWeight:'bold'}}>Deletar</Text></TouchableOpacity>
    </View>
);
}

const estilo = StyleSheet.create ({

    container: {
        marginHorizontal: 5,
        flex:1,
        backgroundColor: '#abcdef',
        alignItems: 'center'
        
    },
    imagem :{
        width:200,
        height:200,
        alignItems:'center',
        justifyContent: 'center'

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