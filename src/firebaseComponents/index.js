import { View,Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

 
export default function CardAluno({data}) {

    const navigation = useNavigation();

    function irDetalhes(){
        navigation.navigate('Detalhes', {dados : data , imagem:data.Imagem});
    }

    return (

        <TouchableOpacity onPress={irDetalhes} >
            <Image style = {estilo.imagem} source={{uri: data.Imagem}}></Image>
            <Text>{data.nome} </Text>
        </TouchableOpacity>
    )

 }



 const estilo = StyleSheet.create ({

    container: {
         marginHorizontal: 5,
         backgroundColor: '#abcdef',
    },
    imagem :{
        width:130,
        height:120
    }

 })