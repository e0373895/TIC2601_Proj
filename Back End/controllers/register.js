const handleRegister = db => (req, res) => {
  const { username, password, email, name } = req.body;
  db.connect();
  db.query(
    {
      sql:
        "INSERT INTO userdata(Username,Password,Email,Name) VALUES (?,?,?,?)",
      values: [username, password, email, name]
    },
    function(error, results, fields) {
      if (error) {
        throw error;
        res.status(400).json("Unable to register due to server issue");
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      res.send("Registered Successfully");
    }
  );

  db.end();
};

module.exports = {
  handleRegister: handleRegister
};
