import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/model.js";
import { verifyAToken } from "../middleware/AuthenticationUser.js";

const userRouter = express.Router();

userRouter.get("/", verifyAToken, (req, res) => {
  try {
    users.fetchUsers(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve users",
    });
  }
});

userRouter.get("/:id", (req, res) => {
  try {
    users.fetchUser(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a user",
    });
  }
});

userRouter.post("/addUser", bodyParser.json(), (req, res) => {
  try {
    users.createUser(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a new user.",
    });
  }
});

userRouter.delete('/deleteUser/:id', bodyParser.json(), (req, res)=>{
    try {
        users.deleteUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "This user has been deleted"
        })
    }
})
userRouter.patch('/updateUser/:id', bodyParser.json(), (req, res)=>{
    try {
        users.updateUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "The user has been updated"
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req,res)=>{
    try {
        users.login(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to log in"
        })
    }
})

export { userRouter, express };
