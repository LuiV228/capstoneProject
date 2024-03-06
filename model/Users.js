import { connection as db } from "../config/config.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticationUser.js";

class Users {
  fetchUsers(req, res) {
    const qry = `
            select userID,
            userFirstName,
            userLastName,
            userEmail,
            userPassword,
            userContact,
            userRole
            from Users;
            `;
    db.query(qry, (err, results) => {
      if (err) console.log(err);
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const qry = `
            select userID,
            userFirstName,
            userLastName,
            userEmail,
            userPassword,
            userContact,
            userRole
            from Users
            where userID = ${req.params.id};
            `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    let data = req.body;
    data.userPassword = await hash(data?.userPassword, 10);
    let user = {
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    };
    const qry = `
        insert into Users
        set ?;
        `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "This email address already exists.",
        });
      } else {
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered!",
        });
      }
    });
  }
  async deleteUser(req, res) {
    const qry = `
    delete from Users
    where userID = ${req.params.id};
    `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The User has been deleted",
      });
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPassword) {
      data.userPassword = await hash(data?.userPassword, 10);
    }
    const qry = `
    update Users
    set ?
    where userID = ${req.params.id}
    `;
    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user's details have been updated",
      });
    });
  }

  login(req, res) {
    const { userEmail, userPassword } = req.body;
    const qry = `
            select userID,
            userFirstName,
            userLastName,
            userEmail,
            userPassword,
            userContact,
            userRole
            from Users
            where userEmail = '${userEmail}';
    `;
    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: statusCode,
          msg: "Wrong email address or password provided",
        });
      } else {
        const validPass = await compare(userPassword, result[0].userPassword);
        if (validPass) {
          const token = createToken({
            userEmail,
            userPassword,
          });
          res.json({
            status: res.statusCode,
            msg: "you're logged in",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password",
          });
        }
      }
    });
  }
}

export { Users };
