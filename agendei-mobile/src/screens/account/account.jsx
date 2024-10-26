import { useContext, useState } from "react"
import { Image, Text, TextInput, View, TouchableOpacity, Alert } from "react-native"
import icon from "../../constants/icon"
import { styles } from "./account.style"
import Button from "../../components/button/button"
import api from "../../constants/api"
import { AuthContext } from "../../contexts/auth"

function Account(props) {
    const { setUser } = useContext(AuthContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function executeAccount() {
        try {
            const response = await api.post("/users/register", {
                name,
                email,
                password
            })

            if (response.data) {
                api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token
                setUser(response.data)
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Erro no cadastro. Tente novamente mais tarde!")
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Nome" style={styles.input} onChangeText={(e) => setName(e)} />
                </View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} />
                </View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(e) => setPassword(e)} />
                </View>
                <Button text="Criar conta" onPress={executeAccount} />
            </View>

            <View style={styles.footer}>
                <Text>Já tenho conta.</Text>
                 <TouchableOpacity onPress={() => {
                    props.navigation.navigate("login")
                 }}>
                    <Text style={styles.footerLink}>Fazer login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account
