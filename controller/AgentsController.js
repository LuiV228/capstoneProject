import express from 'express';
import bodyParser from 'body-parser';
import { agents } from '../model/model.js';

const agentsRouter = express.Router();

agentsRouter.get('/', (req, res)=>{
    try {
        agents.fetchAgents(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve all agents."
        })
    }
})

agentsRouter.get('/:id', (req, res)=>{
    try {
        agents.fetchAgent(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve the agent."
        })
    }
})

agentsRouter.post('/addAgent', bodyParser.json(), (req, res)=>{
    try {
        agents.addAgent(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add the new agent."
        })
    }
})

agentsRouter.delete('/deleteAgent/:id', bodyParser.json(), (req, res)=>{
    try {
        agents.deleteAgent(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete the agent."
        })
    }
})

agentsRouter.patch('/updateAgent/:id', bodyParser.json(), (req, res)=>{
    try {
        agents.updateAgent(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update the agent's details"
        })
    }
})

export {
    agentsRouter
}