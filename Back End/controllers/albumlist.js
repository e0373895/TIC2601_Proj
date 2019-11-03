const handleSearch = db => (req, res) => {
  const { keyword } = req.body;
  const val = "%" + keyword + "%";
  db.query(
    {
      sql:
        "SELECT  a.Album_Artwork, a.Album_Title, a.Description, a.Date, a.Price, b.Song_Title, b.File_Location, b.Price, b.Date, c.Name FROM album a, song b , artist c WHERE a.Album_Title LIKE ? AND (b.ArtistID = c.ArtistID AND b.AlbumID = a.AlbumID);",
      values: [val]
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
  handleSearch: handleSearch
};