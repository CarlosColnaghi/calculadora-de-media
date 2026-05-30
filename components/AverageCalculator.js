import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function AverageCalculator(props){
    const [getForm,  setForm] = useState({
        name: "",
        email: ""
    });

    function updateForm(field, value){
        setForm(form => ({...form, [field]: value}));
    }

    const [getGrades, setGrades] = useState([])
    
    function updateGrade(index, newGrade){
        setGrades(grades => {
            const newGrades = [...grades];
            newGrades[index] = newGrade;
            return newGrades;
        });
    }

    const [showResponse, setShowResponse] = useState(false);

    const [getAverage, setAverage] = useState(0.0);

    function calculateAverage(values){
        return values.reduce((accumulator, value) => {return accumulator + Number(value)}, 0)/values.length;
    }

    function calculateAverageGrades(){
        setAverage(calculateAverage(getGrades))
        setShowResponse(true)
    }

    function restartForm(){
        setForm({
            name: "",
            email: ""
        });
        setGrades([])
        setShowResponse(false)
    }

    return(
        <View style={styles.containers}>
            <Text style={styles.titles}>Calculadora de Média</Text>
            <TextInput placeholder="Nome" style={styles.fields} value={getForm.name} onChangeText={(text) => updateForm("name", text)}/>
            <TextInput placeholder="E-mail" style={styles.fields} value={getForm.email} onChangeText={(text) => updateForm("email", text)}/>
            <View style={styles.gradeContainers}>
                {Array.from({length: Number(props.numberOfGrades)}).map((_, index) => (
                    <TextInput key={index} placeholder={`Nota ${index + 1}`} style={[styles.fields, styles.gradeFields]} value={String(getGrades[index] ?? "")} onChangeText={(text) => updateGrade(index, Number(text))}/>
                ))}
            </View>
            <View style={styles.buttonContainers}>
                <View style={styles.buttons}>
                    <Button title="Calcular" onPress={calculateAverageGrades}></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title="Reiniciar" color="#ff0000" onPress={restartForm}></Button>
                </View>
            </View>
            {showResponse && (
                <View style={styles.responseContainers}>
                    <Text>Nome: {getForm.name}</Text>
                    <Text>E-mail: {getForm.email}</Text>
                    <Text>Notas: {getGrades.map((grade, index) => (index < getGrades.length-1) ? `${grade}, ` : ` ${grade}`)}</Text>
                    <Text>Média: {getAverage.toFixed(2)}</Text>
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
        responseContainers: {
            backgroundColor: "#c9c9c9",
            width: "100%",
            padding: 20,
        }
    }
)

export default AverageCalculator;