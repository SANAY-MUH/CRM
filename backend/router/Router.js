import express from "express"

const router = express.Router()

import { addCustomer, deleteCustomer, readCustomer, updateCustomer } from "../controller/Customer.controller.js"

router.route("/Customer").get(readCustomer)
router.route("/Customer").post(addCustomer)
router.route("/Customer").put(updateCustomer)
router.route("/Customer").delete(deleteCustomer)

export default router;