const express = require('express');
const fetchUser = require('../middlewere/fetchUser');
const { body, validationResult } = require('express-validator');
const router = express.Router();
module.exports = router;
const Cloth = require('../models/ClothItem');

//Route:1 
//Get cart details using: GET: "/api/fooditem/getFood". Login is not required
router.get("/getCloth", async (req, res) => {
    try {
        const cloth = await Cloth.find();
        // let newfooditem=[{"homepage": "."}];
        // newfooditem.push(fooditem)
        res.json(cloth);
        // console.log(newfooditem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route:2
//Get cart details using: GET: "/api/fooditem/getCloth/:id". Login is not required
router.get("/getCloth/:id", async (req, res) => {
    try {
        const fooditem = await Cloth.findById(req.params.id);
        res.json(fooditem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route:3
//Create a new food item using: POST: "/api/fooditem/newFood". Login is required
router.post("/newCloth",
    body('name', 'Name too short').isLength({ min: 2 }),
    // body('price', 'price not valid').isNumber(),
    body('description', 'description too short').isLength({ min: 5 }),
    async (req, res) => {

        //If error found, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            
            //Create a new food

            let clothData={
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
            }

            let food = await Cloth.create({
                name: req.body.name,
                price: req.body.price,
                dsc: req.body.description, 
            }).then(
                res.status(200).json(clothData)
            )
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }

});