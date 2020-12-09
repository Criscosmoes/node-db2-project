const express = require('express'); 
const router = express.Router(); 
const CarDealer = require('./cars-model'); 


const validate = (req, res, next) => {

    try {

        const { VIN, make, model, mileage, transmissionType, title } = req.body; 

        if(!VIN || !make || !model) return res.status(400).send({e: "Please provide atleast a VIN, Make, and a Model"}); 

        next(); 

    }
    catch(e){
        res.status(500).send(e); 
    }


}

router.get('/cars', async (req, res) => {
    try {
        const cars = await CarDealer.getAll(); 
        res.status(200).send(cars); 

    }
    catch(e){
        res.status(500).send(); 
    }
})


router.post('/cars', async (req, res) => {
    try {
        
        await CarDealer.insert(req.body); 
        res.status(201).send(req.body); 
    }
    catch(e){
        res.status(500).send(e); 
    }
})




module.exports = router; 