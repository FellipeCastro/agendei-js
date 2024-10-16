import { View, Text } from "react-native"
import { styles } from "./service.style"
import Button from "../button/button"

function Service(props) {
    return (
        <View style={styles.service}>
            <View style={styles.containerText}>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.price}>
                    {new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(props.price)}
                </Text>
            </View>

            <View style={styles.containerButton}>
                <Button text="Agendar" />
            </View>
        </View>
    )
}

export default Service
