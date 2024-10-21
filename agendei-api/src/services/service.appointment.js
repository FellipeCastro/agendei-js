import repositoryAppointment from "../repositories/repository.appointment.js"

async function List(id_user) {
    const appointments = await repositoryAppointment.List(id_user)
 
    return appointments
}

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    const appointment = await repositoryAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour)

    return appointment
}

async function Delete(id_user, id_appointment) {
    const appointment = await repositoryAppointment.Delete(id_user, id_appointment)

    return appointment
}

export default { List, Insert, Delete }
