const handleSignin = db => (req, res) => {
  const { username, password } = req.body;
  // console.log(username + password);
  if (!username || !password) {
    return res.status(400).json("incorrect form submission");
  }
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
      if (isEmpty(results)) {
        res.status(400).json("User does not exist");
      } else {
        console.log("HERE");
        if (results[0].Password === password) {
          res.json(results[0]);
        } else {
          res.status(400).json("Wrong Crendentials");
        }
      }
    }
  );
};

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

module.exports = {
  handleSignin: handleSignin
};
