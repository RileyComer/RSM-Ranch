import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import { AuthenticatedRequest } from "../types/AuthenticatedRequest";
const router = express.Router();
const Horse = require('../models/horse');
const axios = require('axios');

router.get("/:id", (req, res) => {
  const horseId = req.params.id;
  Horse.findById(horseId)
    .then((result: any) => {
      res.send(result)
    })
    .catch((err: any) => {
      console.log(err)
    });
});

router.get("/", (req, res) => {
  Horse.find()
    .then((result: any) => {
      res.send(result)
    })
    .catch((err: any) => {
      console.log(err)
    });
});

router.use(isAuthenticated);

router.post("/", isAuthenticated, (req: AuthenticatedRequest, res) => {
  const horse = Horse(req.body)
  horse.save()
    .then((result: any) => {
      res.send(result)
    })
    .catch((err: any) => {
      console.log(err)
    });
});

router.put("/:id", isAuthenticated, async (req: AuthenticatedRequest, res) => {
  const horseId = req.params.id;
  try {
    // Validate the request body if needed

    // Find the existing horse document
    const existingHorse = await Horse.findById(horseId);

    if (!existingHorse) {
      return res.status(404).send("Horse not found");
    }

    // Update the existing horse document
    existingHorse.set(req.body);

    const updatedHorse = await existingHorse.save();

    res.send(updatedHorse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;