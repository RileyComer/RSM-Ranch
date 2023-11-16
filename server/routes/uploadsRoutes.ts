import express from "express";
import isAuthenticated from "../middleware/isAuthenticated";
const router = express.Router();
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';
import path from "path";
const multer = require('multer');
const imgur= require('imgur');
import fs from 'fs';

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
      cb(null, 'uploads/'); // Specify the directory where you want to store the files
    },
    filename: (req: any, file: { originalname: any; fieldname: string; }, cb: (arg0: null, arg1: string) => void) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
  });

const upload = multer({ storage: storage });

router.use(isAuthenticated);

router.post("/", upload.single('image'), isAuthenticated, (req: AuthenticatedRequest, res) => {
    const file = req.file;
    const filePath = file.path;
    //Upload stuff
    imgur.uploadFile(filePath).then((urlObject: any)=>{
        fs.unlinkSync(filePath);
        res.json({
            message: 'File uploaded and saved successfully',
            urlObject: urlObject,
        });
    }).catch((error: any) => {
        console.error(error);
        res.status(500).json({ error: 'Error uploading to Imgur' });
    });
});

export default router;