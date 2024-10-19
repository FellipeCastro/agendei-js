import serviceAppointment from "../services/service.appointment.js"

async function ListByUser(req, res) {
    const id_user = req.id_user
    const appointments = await serviceAppointment.List(id_user)

    res.status(200).json(appointments)
}

async function Insert(req, res) {
    const id_user = req.id_user
    const { id_doctor, id_service, booking_date, booking_hour } = req.body

    const appointment = await serviceAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour)

    res.status(201).json(appointment)
}

export default { ListByUser, Insert }
