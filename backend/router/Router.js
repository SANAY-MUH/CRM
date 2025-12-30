import express from "express"

const router = express.Router()

import { addCustomer, deleteCustomer, readCustomer, updateCustomer } from "../controller/Customer.controller.js"

router.route("/Customer").get(readCustomer)
router.route("/Customer").post(addCustomer)
router.route("/Customer/:id").put(updateCustomer)
router.route("/Customer/:id").delete(deleteCustomer)

export default router;