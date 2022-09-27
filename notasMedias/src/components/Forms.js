import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import FormsNotas from "./FormsNotas";
import React, { useState } from "react";

export default function Forms(props) {
    const [nA, setNA] = useState()
    const [nB, setNB] = useState()
    const [nC, setNC] = useState()
    const [nD, setND] = useState()
    const [aluno, setAluno] = useState()

    return (
        <View>
            <View>
                <TextInput style={styles.input} placeholder="Digite o Nome do Aluno" value={props.valueAluno} onChangeText={setAluno}></TextInput>
            </View>
            <View style={styles.Notas} >
                <FormsNotas notas='nA' value={nA} onChangeText={setNA} />
                <FormsNotas notas='nB' value={nB} onChangeText={setNB} />
                <FormsNotas notas='nC' value={nC} onChangeText={setNC} />
                <FormsNotas notas='nD' value={nD} onChangeText={setND} />
            </View>
            <View style={styles.buttonSpace}>
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => props.onAdicionarAluno({
                    aluno: aluno, nA: nA, nB: nB, nC: nC, nD: nD
                })}>
                    <Text style={styles.appButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    Notas: {
        flexDirection: 'row',
    },
    buttonSpace: {
        padding: 25,
        paddingRight: 100,
        paddingLeft: 100,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});