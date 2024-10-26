import { useContext, useState } from "react"
import { Image, Text, TextInput, View, TouchableOpacity, Alert } from "react-native"
import icon from "../../constants/icon"
import { styles } from "./login.style"
import Button from "../../components/button/button"
import api from "../../constants/api"
import { AuthContext } from "../../contexts/auth"

function Login(props) {
    const { setUser } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function executeLogin() {      
        try {
            const response = await api.post("/users/login", {
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
                Alert.alert("Erro no Login. Tente novamente mais tarde!")
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
                    <TextInput placeholder="E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} value={email} />
                </View>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(e) => setPassword(e)} value={password} />
                </View>
                <Button text="Acessar" onPress={executeLogin} />
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta.</Text>
                 <TouchableOpacity onPress={() => {
                    props.navigation.navigate("account")
                 }}>
                    <Text style={styles.footerLink}>Criar conta agora</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
