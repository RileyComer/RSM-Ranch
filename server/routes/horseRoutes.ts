import express from "express";
const router = express.Router();
const Horse= require('../models/horse');

router.post("/", (req, res) => {
  const horse = Horse({
    name: 'Sam',
    breed: 'Thoroughbred',
    height: 10,
    discripton: 'Small Horse',
    gender: 'Mare',
    registration: 123456,
    dob: 'Oct 11 2022',
    price: 500,
  })
  horse.save()
  .then((result: any)=>{
    res.send(result)
  })
  .catch((err: any)=>{
    console.log(err)
  });
});

router.get("/:id", (req, res) => {
  const horseId = req.params.id;
  Horse.findById(horseId)
  .then((result: any)=>{
    res.send(result)
  })
  .catch((err: any)=>{
    console.log(err)
  });
});

router.get("/", (req, res) => {
  Horse.find()
  .then((result: any)=>{
    res.send(result)
  })
  .catch((err: any)=>{
    console.log(err)
  });
});

// Other API routes can be defined here

export default router;