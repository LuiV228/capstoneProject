import { connection as db } from "../config/config.js";
class Agents {
  fetchAgents(req, res) {
    const qry = `
        select agentID,
        agentCodeName,
        agentPortfolio,
        agentRole,
        agentRoleDescription,
        agentPrice
        from Agents;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchAgent(req, res) {
    const qry = `
        select agentID,
        agentCodeName,
        agentPortfolio,
        agentRole,
        agentRoleDescription,
        agentPrice
        from Agents
        where agentID = '${req.params.id}';
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }
  addAgent(req, res) {
    const qry = `
        insert into Agents
        set ?;
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Agent has been added.",
      });
    });
  }
  deleteAgent(req, res) {
    const qry = `
        delete from Agents
        where agentID = ${req.params.id}
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The agent has been removed.",
      });
    });
  }
  updateAgent(req, res) {
    const qry = `
        update Agents
        set ?
        where agentID = ?
        `;
    db.query(qry, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The agent's details have been updated.",
      });
    });
  }
}

export { Agents };
