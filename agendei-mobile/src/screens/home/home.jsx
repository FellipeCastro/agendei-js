import { useEffect, useState } from "react"
import { Alert, FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/doctor"
import api from "../../constants/api"

function Home(props) {
    const [doctors, setDoctors] = useState([])

    function clickDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_doctor,
            name,
            specialty,
            icon
        })
    }

    useEffect(() => {
        async function loadDoctors() {
            try {
                const response = await api.get("/doctors")
    
                if (response.data) {
                    setDoctors(response.data)
                }
            } catch (error) {
                if (error.response?.data.error) {
                    Alert.alert(error.response.data.error)
                } else {
                    Alert.alert("Erro ao carregar dados. Tente novamente mais tarde!")
                }
            }
        }

        loadDoctors()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Agende seus serviços médicos</Text>

            <FlatList 
                data={doctors} 
                keyExtractor={(doc) => doc.id_doctor} 
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Doctor 
                            id_doctor={item.id_doctor}
                            name={item.name}
                            icon={item.icon}
                            specialty={item.specialty}
                            onPress={clickDoctor}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Home
