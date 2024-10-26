import { useEffect, useState } from "react"
import { Alert, FlatList, View, Text } from "react-native"
import { styles } from "./calendar.style"
import Appointment from "../../components/appointment/appointment"
import api from "../../constants/api"

function Calendar() {
    const [appointments, setAppointments] = useState([])

    async function loadAppointments() {
        try {
            const response = await api.get("/appointments")

            if (response.data) {
                setAppointments(response.data)
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Erro ao carregar dados. Tente novamente mais tarde")
            }
        }
    }

    async function deleteAppointment(id_appointment) {
        try {
            const response = await api.delete("/appointments/" + id_appointment)

            if (response.data?.id_appointment) {
                loadAppointments()
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Erro ao deletar dados. Tente novamente mais tarde")
            }
        }
    }

    useEffect(() => {
        loadAppointments()
    }, [])

    return (
        <View style={styles.container}>
            {appointments.length === 0 && <Text style={styles.text}>Nenhuma reserva agendada!</Text>}
            <FlatList
                data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Appointment
                            id_appointment={item.id_appointment}
                            doctor={item.doctor}
                            service={item.service}
                            specialty={item.specialty}
                            bookingDate={item.booking_date}
                            bookingHour={item.booking_hour}
                            onPress={deleteAppointment}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Calendar
