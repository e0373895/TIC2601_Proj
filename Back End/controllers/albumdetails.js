const handleAlbumdetails = db => (req, res) => {
  const { title } = req.body;
  db.query(
    {
      sql: "SELECT * from song;",
      values: {}
    },
    function(error, results, fields) {
      if (error) {
        throw error;
        console.log(sql);
      }
      // const isValid = bcrypt.compareSync(password, results[0].Password);
      if (!results) {
        res.status(400).json("Such Keyword does not exists");
      } else {
        // const isValid = bcrypt.compareSync(password, dboutput[0].Password);
        res.send(JSON.stringify(results));
      }
    }
  );
};

module.exports = {
  handleAlbumdetails: handleAlbumdetails
};
