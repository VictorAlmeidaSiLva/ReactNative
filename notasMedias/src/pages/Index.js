import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import Header from '../components/Header';
import Results from '../components/Results';


export default function Index() {

    const [alunos, setAlunos] = useState([])
    const [media, setMedias] = useState()

    function AdicionarAluno(aluno) {
        alunos.push({aluno})
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header onAdicionarAluno={AdicionarAluno} />
            <View style={styles.containerBlock} />
            <Results alunos={alunos} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBlock: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'Black',
    },
});
