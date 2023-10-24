import express from "express";
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const clientOrgin = process.env.CLIENT_ORGIN;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/HorseWebsite?retryWrites=true&w=majority&appName=AtlasApp`;

mongoose.connect(uri)
    .then(() =>
        app.listen(port, () => {
            console.log(`Server is Running on port: ${port}`);
        }))
    .catch((err: any) => console.log(err));

import authRoutes from "./routes/authRoutes";
import horseRoutes from "./routes/horseRoutes";
import newsRoutes from "./routes/newsRoutes";

app.use(express.json());
app.use(cors({ credentials: true, origin: clientOrgin }));

app.use("/auth", authRoutes);
app.use("/horses", horseRoutes);
app.use("/news", newsRoutes);

app.use("/", (req, res, next) => {
    res.send("This is the server");
});