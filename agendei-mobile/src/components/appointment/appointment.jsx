import { Image, Text, View } from "react-native"
import { styles } from "./appointment.style"
import icon from "../../constants/icon"
import Button from "../button/button"

function Appointment(props) {
    return (
        <View style={styles.appointment}>
            <Text style={styles.name}>{props.service} - {props.doctor}</Text>
            <Text style={styles.specialty}>{props.specialty}</Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}>
                        <Image source={icon.calendar} style={styles.icon} />
                        <Text style={styles.bookingDate}>15/10/2024</Text>
                    </View>
                    <View style={styles.booking}>
                        <Image source={icon.clock} style={styles.icon} />
                        <Text style={styles.bookingHour}>08:30h</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button text="Cancelar reserva" theme="danger" />
                </View>
            </View>
        </View>
    )
}

export default Appointment
