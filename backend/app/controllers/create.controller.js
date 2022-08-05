const db = require("../configs/db.config");

exports.create = (req, res) => {
  const { user_id, title, note, private } = req.body;

  try {
    db.query(
      "INSERT INTO notes (user_id, title, note, private) VALUES($1,$2,$3,$4)",
      [user_id, title, note, private],
      (err) => {
        if (err) {
          res.status(400).json({ error: "couldnt add" });
        } 
          res.status(201).json({ success: "successfull added" });
        
      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};
