import { FlatList, Text, View } from "react-native"
import { doctors } from "../../constants/data"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/doctor"

function Home(props) {
    function clickDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("services", {
            id_doctor,
            name,
            specialty,
            icon
        })
    }

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
