import { useContext, useEffect, useState } from "react"
import { Alert, Text, View } from "react-native"
import { styles } from "./profile.style"
import api from "../../constants/api"
import Button from "../../components/button/button"
import { AuthContext } from "../../contexts/auth"

function Profile() {
    const { setUser } = useContext(AuthContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function logout() {
        api.defaults.headers.common["Authorization"] = ""
        setUser({})
    }

    async function loadProfile() {
        try {
            const response = await api.get("users/profile")

            if (response.data?.name) {
                setName(response.data.name)
                setEmail(response.data.email)
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Erro ao carregar dados. Tente novamente mais tarde")
            }
        }
    }

    useEffect(() => {
        loadProfile()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>Nome: </Text>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>E-mail: </Text>
                <Text style={styles.text}>{email}</Text>
            </View>

            <Button text="Logout" theme="danger" onPress={logout} />
        </View>
    )
}

export default Profile
