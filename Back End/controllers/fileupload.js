const handleFileupload = (db, fs) => (req, res, next) => {
  const up_file = req.files.file;
  const { AlbumName, ArtistName, SongName } = req.body;
  // console.log(AlbumName);

  if (!up_file) {
    res.status(400).json("NO file");
  }

  const filepath = "./Albums/" + AlbumName + "/";

  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
  }

  up_file.mv(filepath + up_file.name, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json("Uploaded!");
  });
};

module.exports = {
  handleFileupload: handleFileupload
};
