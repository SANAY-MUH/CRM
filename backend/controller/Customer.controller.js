import Customer from "../model/Customer.model.js"

export const addCustomer = async (req, res) => {
    try{
    const {name, email, phone, status} = req.body
    if(!name || !email || !phone || !status){
        return res.json({message: "All the fields are required"})
    }
    const customer = new Customer(req.body)
    await customer.save()

    res.json({message: "Customer Added Successfully!"})
    }
    catch(error){
        console.log(error)
        res.json({message: "Customer Adding Error!"})
    }
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

export const updateCustomer = async (req, res) => {
    try{
    const {id} = req.params;
    const existingCustomer = await Customer.findById(id)

    if(!existingCustomer){
        res.json({message: "No Customer Found for the Provided ID!"})
    }

    const UpdatedCustomer = await Customer.findByIdAndUpdate(id, {new: true})
    res.json({message: "Customer Updated!"})
    }
    catch(error){
        console.log(error);

        if(error.name === "CastError"){
            return res.json({message: "Invalid Customer ID Format!"})
        }

        res.json({message: "Product Update Error!"})
    }
}

export const deleteCustomer = async (req, res) => {
    try{
         const {id} = req.params
        const customer = await Customer.findOne({_id: id})

        if(!customer){
            res.json({message: "No Customer Found for the Provided ID!"})
        }

        await Customer.findByIdAndDelete(id)
        res.json({message: "Customer Deleted Successfully!"})
    }
    catch(error){
       console.log(error)

       if(error.name === "CastError"){
        return res.json({message: "Invalid Customer ID Format!"})
       }

       res.json({message: "Customer Deletion Error!"})
    }
}