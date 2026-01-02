import express from "express"

const router = express.Router()

import { addCustomer, deleteCustomer, readCustomer, readOneCustomer, updateCustomer } from "../controller/Customer.controller.js"
import { addTeam, deleteTeam, readOneTeam, readTeam, updateTeam } from "../controller/Team.controller.js";

router.route("/Customer").get(readCustomer)
router.get("/Customer/:id", readOneCustomer);
router.route("/Customer").post(addCustomer)
router.route("/Customer/:id").put(updateCustomer)
router.route("/Customer/:id").delete(deleteCustomer)


router.route("/Team").get(readTeam)
router.get("/Team/:id", readOneTeam);
router.route("/Team").post(addTeam)
router.route("/Team/:id").put(updateTeam)
router.route("/Team/:id").delete(deleteTeam)

export default router;