const handleSearch = db => (req, res) => {
  const { keyword } = req.body;
  db.connect();
  db.query(
    {
      sql: "SELECT * FROM album" // Album search SQL
    },
    function(error, results, fields) {
      if (error) {
        throw error;
        res.status(400).json("Unable to Search Albumns");
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      if (!results) {
        res.status(400).json("Such Keyword does not exists");
      } else {
        // const isValid = bcrypt.compareSync(password, dboutput[0].Password);
        res.send(results);
      }
    }
  );

  db.end();
};

module.exports = {
  handleSearch: handleSearch
};
