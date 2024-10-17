import { consult } from "../database/connection.js"

async function List() {
    let sql = "SELECT * FROM doctors ORDER BY name"

    const doctors = await consult(sql) 

    return doctors
}

export default { List }
