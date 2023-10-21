import express from "express";
const router = express.Router();

router.get("/", (req, res)=> {
    res.json({title: 'Fuck'});
});

// Other API routes can be defined here

export default router;