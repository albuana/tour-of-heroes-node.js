const express=require('express');
const router=express.Router();
//Heroes models
const Heroes=require('../models/heroes');

//details of the hero specified by the id
//@routes GET Hero heroes
//@desc GET a hero
router.get('/:id', async (req, res) => {
    try{
        const hero=await Heroes.findById(req.params.id);
        if(!hero) throw new Error('No Hero found');
        res.status(200).json({hero});
    }catch(err){
        res.status(400).json({msg: err});
    }
})

// add new hero
//@routes POST Hero heroes
//@ create a hero
router.post('/', async (req, res) => {
    const newHero=new Heroes(req.body)

    try{
        const hero=await newHero.save();
        if(!hero) throw Error('Something went wrong while saving hero.');
        res.status(200).json(hero);
    }catch(err){
        res.status(400).json({msg: err});
    }
});

//update
//@routes PUT Hero heroes
//@desc PUT a hero
router.put('/:id', async (req, res) => {
    try{
        const hero=await Heroes.findByIdAndUpdate(req.params.id, req.body);
        if(!hero) throw new Error('Something went wrong updating.');
        res.status(200).json("Hero Updated!");
    }catch(err){
        res.status(400).json({msg: err});
    }
})

//delete hero
//@routes DELETE Hero heroes
//@desc DELETE a hero
router.delete('/:id', async (req, res) => {
    try{
        const hero=await Heroes.findByIdAndDelete(req.params.id);
        if(!hero) throw new Error('Sorry, no Hero found.');
        res.status(200).json({success: true});
    }catch(err){
        res.status(400).json({msg: err});
    }
})

module.exports=router;