import { consult } from "../database/connection.js"

async function List(id_user) {
    let sql = "SELECT a.id_appointment, s.description AS service, d.name AS doctor, d.specialty, a.booking_date, a.booking_hour, u.name AS user, ds.price  FROM appointments a JOIN services s ON (s.id_service = a.id_service) JOIN doctors d ON (d.id_doctor = a.id_doctor) JOIN users u ON (u.id_user = a.id_user) JOIN doctors_services ds ON (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service) WHERE a.id_user = ? ORDER BY a.booking_date, a.booking_hour;"

    const appointments = await consult(sql, [id_user])

    return appointments
}

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    let sql = "INSERT INTO appointments (id_user, id_doctor, id_service, booking_date, booking_hour) VALUES (?, ?, ?, ?, ?)"

    const appointment = await consult(sql, [id_user, id_doctor, id_service, booking_date, booking_hour])

    return { id_appointment: appointment.insertId }
}

export default { List, Insert }
