import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function AverageCalculator(props){
    const [getForm,  setForm] = useState({
        name: "",
        email: "",
        grade1: "",
        grade2: "",
        grade3: "",
    });

    function updateForm(field, value){
        setForm(form => ({...form, [field]: value}));
    }

    const [getResult, setResult] = useState({
        name: "",
        email: "",
        grade1: "",
        grade2: "",
        grade3: "",
        average: ""
    });

    const [showResult, setShowResult] = useState(false);

    function calculateAverage(values){
        return values.reduce((accumulator, value) => {return accumulator + Number(value)}, 0)/values.length;
    }

    function calculateAverageGrades(){
        setResult({
            name: getForm.name,
            email: getForm.email,
            grade1: getForm.grade1,
            grade2: getForm.grade2,
            grade3: getForm.grade3,
            average: calculateAverage([getForm.grade1, getForm.grade2, getForm.grade3])
        })
        setShowResult(true)
    }

    function restartForm(){
        setForm({
            name: "",
            email: "",
            grade1: "",
            grade2: "",
            grade3: "",
        });
        setResult({
            name: "",
            email: "",
            grade1: "",
            grade2: "",
            grade3: "",
            average: ""
        });
        setShowResult(false)
    }

    return(
        <View style={styles.containers}>
            <Text style={styles.titles}>Calculadora de Média</Text>
            <TextInput placeholder="Nome" style={styles.fields} value={getForm.name} onChangeText={(text) => updateForm("name", text)}/>
            <TextInput placeholder="E-mail" style={styles.fields} value={getForm.email} onChangeText={(text) => updateForm("email", text)}/>
            <View style={styles.gradeContainers}>
                <TextInput placeholder="Nota 1" style={[styles.fields, styles.gradeFields]} value={getForm.grade1} onChangeText={(text) => updateForm("grade1", text)}/>
                <TextInput placeholder="Nota 2" style={[styles.fields, styles.gradeFields]} value={getForm.grade2} onChangeText={(text) => updateForm("grade2", text)}/>
                <TextInput placeholder="Nota 3" style={[styles.fields, styles.gradeFields]} value={getForm.grade3} onChangeText={(text) => updateForm("grade3", text)}/>
            </View>
            <View style={styles.buttonContainers}>
                <View style={styles.buttons}>
                    <Button title="Calcular" onPress={calculateAverageGrades}></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title="Reiniciar" color="#ff0000" onPress={restartForm}></Button>
                </View>
            </View>
            {showResult && (
                <View style={styles.resultContainers}>
                    <Text>Nome: {getResult.name}</Text>
                    <Text>E-mail: {getResult.email}</Text>
                    <Text>Notas: {getResult.grade1}, {getResult.grade2}, {getResult.grade3}</Text>
                    <Text>Média: {getResult.average.toFixed(2)}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        containers: {
            alignItems: "center",
            justifyContent: "center",
        },
        titles: {
            fontWeight: "bold",
            fontSize: 20,
            marginVertical: 30,
        },
        fields: {
            width: "100%",
            borderColor: "#757575",
            borderWidth: 1,
            borderRadius: 5,
            margin: 5,
        },
        gradeContainers: {
            flexDirection: "row",
        },
        gradeFields: {
            flex: 1,
        },
        buttonContainers: {
            flexDirection: "row",
            marginVertical: 20,
        },
        buttons: {
            width: "100%",
            margin: 5,
            flex: 1
        },
        resultContainers: {
            backgroundColor: "#c9c9c9",
            width: "100%",
            padding: 20,
        }
    }
)

export default AverageCalculator;