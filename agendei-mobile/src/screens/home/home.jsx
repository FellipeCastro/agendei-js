import { FlatList, Text, View } from "react-native"
import { doctors } from "../../constants/data"
import icon from "../../constants/icon"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/doctor"

function Home() {
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
                            name={item.name}
                            icon={item.icon === "M" ? icon.male : icon.female}
                            specialty={item.specialty}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Home
