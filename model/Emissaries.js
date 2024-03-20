import { connection as db } from "../config/config.js";

class Emissaries {
  fetchEmissaries(req, res) {
    const qry = `
        SELECT * FROM Emissaries;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  addEmissary(req, res) {
    const qry = `
        INSERT INTO Emissaries SET ?;
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Emissary has been added.",
      });
    });
  }
}

export { Emissaries };
