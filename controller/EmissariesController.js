import express from 'express';
import bodyParser from 'body-parser';
import { Emissaries } from '../model/Emissaries.js';

const emissariesRouter = express.Router();
const emissaries = new Emissaries();

emissariesRouter.get('/', (req, res)=>{
    try {
        emissaries.fetchEmissaries(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve all emissaries."
        })
    }
});

emissariesRouter.post('/addEmissary', bodyParser.json(), (req, res)=>{
    try {
        emissaries.addEmissary(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add the new emissary."
        })
    }
});

export {
    emissariesRouter
};
