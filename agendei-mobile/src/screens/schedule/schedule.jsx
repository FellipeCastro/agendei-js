import { useState } from "react"
import { View, Text, Alert } from "react-native"
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar"
import { Picker } from "@react-native-picker/picker"
import Button from "../../components/button/button"
import api from "../../constants/api"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

function Schedule(props) {
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedHour, setSelectedHour] = useState("")

    const id_doctor  = props.route.params.id_doctor
    const id_service  = props.route.params.id_service

    async function clickBooking() {
        try {
            const response = await api.post("/appointments", {
                id_doctor,
                id_service,
                booking_date: selectedDate,
                booking_hour: selectedHour
            })

            if (response.data?.id_appointment) {
                props.navigation.popToTop()
            }
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            } else {
                Alert.alert("Erro ao agendar reserva. Tente novamente mais tarde!")
            }
        }
    }

    const timeSlots = [];
    for (let hour = 6; hour <= 22; hour++) {
        timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
        if (hour < 22) { // evita adicionar 22:30 ao final
            timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Calendar 
                    theme={styles.theme} 
                    onDayPress={(day) => setSelectedDate(day.dateString)} 
                    markedDates={{
                        [selectedDate]: { selected: true }
                    }}
                    minDate={new Date().toDateString()}
                />

                <View>
                    <Text style={styles.textHour}>Horário:</Text>
                </View>
                <View>
                    <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex) => {
                        setSelectedHour(itemValue)
                    }}>
                    {timeSlots.map((time, index) => (
                        <Picker.Item key={index} label={time} value={time} />
                    ))}
                    </Picker>
                </View>
            </View>

            <View>
                <Button text="Confirmar reserva" onPress={clickBooking} />
            </View>
        </View>
    )
}

export default Schedule
