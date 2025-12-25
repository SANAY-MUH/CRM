import Customer from "../model/Customer.model.js"

export const addCustomer = async (req, res) => {
    const {name, email, phone, status} = req.body
    if(!name || !email || !phone || !status){
        return res.json({message: "All the fields are required"})
    }
    const customer = new Customer(req.body)
    await customer.save()

    res.json({message: "Customer Added Successfully!"})
}

export const readCustomer = async(req, res) => {
    try{
        const customers = await Customer.find()
    res.json({message: "Reading All Customers!"})
    customers
    }
    catch(error){
        console.log(error)
        res.json({message: "Controller Error!"})
    }
}