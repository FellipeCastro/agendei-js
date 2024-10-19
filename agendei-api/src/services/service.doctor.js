import repositoryDoctor from "../repositories/repository.doctor.js"

async function List(name) {
    const doctors = await repositoryDoctor.List(name)

    return doctors
}

async function Insert(name, specialty, icon) {
    const doctors = await repositoryDoctor.Insert(name, specialty, icon)

    return doctors
}

async function Edit(id_doctor, name, specialty, icon) {
    const doctors = await repositoryDoctor.Edit(id_doctor, name, specialty, icon)

    return doctors
}

async function Delete(id_doctor) {
    const doctors = await repositoryDoctor.Delete(id_doctor)

    return doctors
}

async function ListServices(id_doctor) {
    const services = await repositoryDoctor.ListServices(id_doctor)

    return services
}

export default { List, Insert, Edit, Delete, ListServices }
