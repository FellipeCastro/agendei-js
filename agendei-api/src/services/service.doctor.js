import repositoryDoctor from "../repositories/repository.doctor.js"

async function List() {
    const doctors = await repositoryDoctor.List()

    return doctors
}

export default { List }
