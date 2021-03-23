const express=require('express');
const router=express.Router();
//Pets models
const Pets=require('../models/pets');

//id of all the pets
//@routes GET Pet /pets
//@ GET heroes
router.get('/', async (req, res) => {
    try{
        const pets=await Pets.find();
        if(!pets) throw new Error('Sorry, no Pets.');
        res.status(200).json({pets});
    }catch(err){
        res.status(400).json({msg: err});
    }
})

module.exports=router;