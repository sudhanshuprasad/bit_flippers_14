const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const fetchUser = require("../middlewere/fetchUser");
const { body, validationResult } = require('express-validator');

//Route:1 
//Get cart details using: GET: "/api/cart/getCart". Login is required
router.get("/getCart", fetchUser, async (req, res) => {
    // console.log(req.user)
    try {
        if(req.user!==undefined){
            const cart = await Cart.find({ user: req.user.id });
            res.json(cart);
        }else{
            console.log("req.user is undefined in cart.js")
        }
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
});


//Route:2 
//Get create a new cart using: POST: "/api/cart/newCart". Login is required
router.post("/newCart", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const cart = new Cart({
            user: req.user.id,
            items
        });

        const saveCart = await cart.save();
        res.json(saveCart);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:3a
//Update cart details using: PUT: "/api/cart/updateCart". Login is required
router.put("/updateCart", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const newCart = {};
        if (items) { newCart.items = items; }
        let cart = await Cart.findOne({ user: req.user.id });

        //if cart is not found, create a new cart
        if (cart == null) {
            try {
                cart = new Cart({
                    user: req.user.id,
                    items
                });

                const saveCart = await cart.save();
                return res.json(saveCart);

            }
            catch (error) {
                console.error(error.message);
                return res.status(500).send("Internal server error");
            }

        }
        //else update the cart
        else {
            cart = await Cart.findByIdAndUpdate(cart.id, { $set: newCart }, { new: true });
        }
        res.json({ "sucess": "The cart has been updated", cart });
        // console.log("cart updated");
        // console.log(cart.id);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:3a.1
//Insert a single element in the cart using: PUT: "/api/cart/insertCart". Login is required
router.put("/insertCart", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const newCart = {};
        if (items){
            newCart.items = items;
        }
        
        let cart = await Cart.findOne({ user: req.user.id });
        
        //if cart is not found, create a new cart
        if (cart == null) {
            try {
                cart = new Cart({
                    user: req.user.id,
                    items
                });
                
                const saveCart = await cart.save();
                return res.json(saveCart);
                
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).send("Internal server error");
            }
            
        }
        //else update the cart
        else {
            cart = await Cart.findByIdAndUpdate(cart.id, { $set: newCart }, { new: true });
        }
        res.json({ "sucess": "The cart has been updated", cart });
        // console.log("cart updated");
        // console.log(cart.id);
        
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:3b
//Update cart details using: PUT: "/api/cart/updateCart/:id". Login is required
router.put("/updateCart/:id", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const newCart = {};
        if (items) { newCart.items = items; }
        let cart = await Cart.findOne({ user: req.user.id });

        //if cart is not found, create a new cart
        if (cart == null) {
            try {
                cart = new Cart({
                    user: req.user.id,
                    items
                });

                const saveCart = await cart.save();
                return res.json(saveCart);

            }
            catch (error) {
                console.error(error.message);
                return res.status(500).send("Internal server error");
            }

        }
        //else check if the cart belongs to the user and update the cart
        else if (req.user.id !== cart.user.toString()) {
            res.status(401).send("Permisssion denied");
        }
        else {
            cart = await Cart.findByIdAndUpdate(cart.id, { $set: newCart }, { new: true });
            res.json({ "sucess": "The cart has been updated", cart });
        }
        console.log(cart.id);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:4a
//Get cart details using: DELETE: "/api/cart/deleteCart". Login is required
router.delete("/deleteCart", fetchUser, async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user.id });
        if (cart == null) {
            console.log("empty");
            return res.status(422).send("The cart is empty");
        } else {
            cart = await Cart.findOneAndDelete({ user: req.user.id });
            res.json({ "sucess": "The cart has been deleted", cart });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:4b
//Get cart details using: DELETE: "/api/cart/deleteCart/:id". Login is required
router.delete("/deleteCart/:id", fetchUser, async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (cart == null) {
            console.log("empty");
            return res.status(422).send("The cart is empty");
        } else if (req.user.id !== cart.user.toString()) {
            res.status(401).send("Permisssion denied");
        } else {
            await Cart.findByIdAndDelete(req.params.id);
            res.json({ "sucess": "The cart has been deleted", cart });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


module.exports = router;