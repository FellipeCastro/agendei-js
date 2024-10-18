import serviceDoctor from "../services/service.doctor.js"

async function List(req, res) {
    const name = req.query.name
    const doctors = await serviceDoctor.List(name)

    res.status(200).json(doctors)
}

async function Insert(req, res) {
    const { name, specialty, icon } = req.body

    const doctor = await serviceDoctor.Insert(name, specialty, icon)

    // status 201 = criado com sucesso
    res.status(201).json(doctor)
}

async function Edit(req, res) {
    const id_doctor = req.params.id_doctor
    const { name, specialty, icon } = req.body

    const doctor = await serviceDoctor.Edit(id_doctor, name, specialty, icon)

    res.status(200).json(doctor)
}

async function Delete(req, res) {
    const id_doctor = req.params.id_doctor

    const doctor = await serviceDoctor.Delete(id_doctor)

    res.status(200).json(doctor)
}

export default { List, Insert, Edit, Delete }
