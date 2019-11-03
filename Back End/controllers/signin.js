const handleSignin = db => (req, res) => {
  const { username, password } = req.body;
  db.query(
    {
      sql: "SELECT Username,Password FROM userdata WHERE Username = ?",
      values: [username]
    },
    function(error, results, fields) {
      if (error) {
        console.log("SQL Sign in not working");
        throw error;
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      // console.log(results);
      if (!results) {
        res.status(400).json("User does not exist");
      } else {
        // const isValid = bcrypt.compareSync(password, dboutput[0].Password);
        if (results[0].Password == password) {
          res.send(results[0]);
        } else {
          res.status(400).json("Wrong Crendentials");
        }
      }
    }
  );
};

module.exports = {
  handleSignin: handleSignin
};
