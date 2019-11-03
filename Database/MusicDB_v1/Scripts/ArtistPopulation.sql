
TRUNCATE musicdb.artist;
INSERT INTO musicdb.artist (name) VALUES('Illenium');
INSERT INTO musicdb.artist (name)VALUES('Georgia Ku');
INSERT INTO musicdb.artist (name)VALUES('Jon Bellion');
INSERT INTO musicdb.artist (name)VALUES('GOLDN');
INSERT INTO musicdb.artist (name)VALUES('Foy Vance');
INSERT INTO musicdb.artist (name)VALUES('Oekiin');
INSERT INTO musicdb.artist (name)VALUES('Anna Clendening');
INSERT INTO musicdb.artist (name)VALUES('Echos');
INSERT INTO musicdb.artist (name)VALUES('The Chainsmokers');
INSERT INTO musicdb.artist (name)VALUES('Annika Wells');
INSERT INTO musicdb.artist (name)VALUES('X Ambassadors');
INSERT INTO musicdb.artist (name)VALUES('Bipolar Sunshine');
INSERT INTO musicdb.artist (name)VALUES('Blanke');
INSERT INTO musicdb.artist (name)VALUES('Chandler Leighton');
INSERT INTO musicdb.artist (name)VALUES('Said The Sky');

commit;
#CREATE TRIGGER MyTrigger BEFORE INSERT ON musicdb.artist
#FOR EACH ROW BEGIN

#	SET NEW.ArtistID = COALESCE(NEW.ArtistID, NEW.ArtistID);
  
  
#END