import { Router } from "express"

import jwt from "./token.js"

import controllerDoctor from "./controllers/controller.doctor.js"
import controllerUser from "./controllers/controller.user.js"
import controllerAppointment from "./controllers/controller.appointment.js"

const router = Router()

// Users
router.post("/users/register", controllerUser.Register)
router.post("/users/login", controllerUser.Login)
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile)

// Doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.List)
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Insert)
router.put("/doctors/:id_doctor", jwt.ValidateToken,controllerDoctor.Edit)
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Delete)
router.get("/doctors/:id_doctor/services", jwt.ValidateToken, controllerDoctor.ListServices)

// Apponintments
router.get("/appointments", jwt.ValidateToken, controllerAppointment.ListByUser)
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Insert)
router.delete("/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.Delete)

export default router
