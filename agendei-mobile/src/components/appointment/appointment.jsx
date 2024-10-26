import { Image, Text, View } from "react-native"
import { styles } from "./appointment.style"
import icon from "../../constants/icon"
import Button from "../button/button"

function Appointment(props) {
    const date = new Date(props.bookingDate)

    return (
        <View style={styles.appointment}>
            <Text style={styles.name}>{props.service} - {props.doctor}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}>
                        <Image source={icon.calendar} style={styles.icon} />
                        <Text style={styles.bookingDate}>{date.toLocaleDateString()}</Text>
                    </View>
                    <View style={styles.booking}>
                        <Image source={icon.clock} style={styles.icon} />
                        <Text style={styles.bookingHour}>{props.bookingHour}h</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button text="Cancelar reserva" theme="danger" onPress={() => props.onPress(props.id_appointment)} />
                </View>
            </View>
        </View>
    )
}

export default Appointment
