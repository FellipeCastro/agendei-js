import repositoryAppointment from "../repositories/repository.appointment.js"

async function List(id_user) {
    const appointments = await repositoryAppointment.List(id_user)
 
    return appointments
}

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    const appointment = await repositoryAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour)

    return appointment
}

export default { List, Insert }
