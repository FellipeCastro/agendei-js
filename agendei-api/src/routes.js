import { Router } from "express"
import controllerDoctor from "./controllers/controller.doctor.js"

const router = Router()

// Doctors
router.get("/doctors", controllerDoctor.List)
router.post("/doctors", controllerDoctor.Insert)
router.put("/doctors/:id_doctor", controllerDoctor.Edit)
router.delete("/doctors/:id_doctor", controllerDoctor.Delete)

export default router
