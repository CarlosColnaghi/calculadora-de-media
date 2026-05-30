import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function MediaCalculator(props){
    return(
        <View style={styles.containers}>
            <Text style={styles.titles}>Calculadora de Média</Text>
            <TextInput placeholder="Nome" style={styles.fields}/>
            <TextInput placeholder="Email" style={styles.fields}/>
            <View style={styles.gradeContainers}>
                <TextInput placeholder="Nota 1" style={[styles.fields, styles.gradeFields]}/>
                <TextInput placeholder="Nota 2" style={[styles.fields, styles.gradeFields]}/>
                <TextInput placeholder="Nota 3" style={[styles.fields, styles.gradeFields]}/>
            </View>
            <View style={styles.buttonContainers}>
                <View style={styles.buttons}>
                    <Button title="Calcular"></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title="Reiniciar" color="#ff0000"></Button>
                </View>
            </View>
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
            marginTop: 20,
        },
        buttons: {
            width: "100%",
            margin: 5,
            flex: 1
        }
    }
)

export default MediaCalculator;