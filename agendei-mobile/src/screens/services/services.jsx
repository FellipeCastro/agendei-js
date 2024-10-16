import { FlatList, Image, Text, View } from "react-native"
import { doctors_services } from "../../constants/data"
import icon from "../../constants/icon"
import { styles } from "./services.style"
import Service from "../../components/service/service"

function Services() {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image source={icon.female}/>
                <Text style={styles.name}>Maria Joaquina</Text>
                <Text style={styles.specialty}>Cirurgiã</Text>
            </View>

            <FlatList 
                data={doctors_services} 
                keyExtractor={(service) => service.id_service} 
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Service 
                            description={item.description}
                            price={item.price}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Services
