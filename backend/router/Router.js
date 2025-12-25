import express from "express"

const router = express.Router()

import { addCustomer, readCustomer } from "../controller/Customer.controller.js"

router.route("/Customer").get(readCustomer)
router.route("/Customer").post(addCustomer)

export default router;