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

export default router;