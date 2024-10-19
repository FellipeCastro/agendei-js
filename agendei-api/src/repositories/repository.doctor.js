import { consult } from "../database/connection.js"

async function List(name) {
    let filter = []
    
    let sql = "SELECT * FROM doctors "

    if (name) {
        sql += "WHERE name LIKE ? "
        filter.push(`%${name}%`)
    }
    sql += "ORDER BY name"

    const doctors = await consult(sql, filter) 

    return doctors
}

async function Insert(name, specialty, icon) {
    let sql = "INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)"

    const doctor = await consult(sql, [name, specialty, icon]) 

    return { id_doctor: doctor.insertId }
}

async function Edit(id_doctor, name, specialty, icon) {
    let sql = "UPDATE doctors SET name=?, specialty=?, icon=? WHERE id_doctor=?"

    await consult(sql, [name, specialty, icon, id_doctor]) 

    return { id_doctor }
}

async function Delete(id_doctor) {
    let sql = "DELETE FROM doctors WHERE id_doctor=?"

    await consult(sql, [id_doctor]) 

    return { id_doctor }
}

async function ListServices(id_doctor) {
    let sql = "SELECT d.id_service, s.description, d.price FROM doctors_services d JOIN services s ON (s.id_service = d.id_service) WHERE d.id_doctor = ? ORDER BY s.description;"

    const services = await consult(sql, [id_doctor])

    return services
}

export default { List, Insert, Edit, Delete, ListServices }
