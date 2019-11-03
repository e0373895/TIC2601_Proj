import React from "react";

const AlbumCard = ({
  key,
  title,
  songtitle,
  artist,
  imglink,
  downloadlink
}) => {
  const imgsrc = "http://localhost:3000/albumimages/" + imglink;
  return (
    <div className="grow" style={{ float: "left" }}>
      <a className="db center mw5 black link dim" href="#">
        <img className="db ba b--black-10" alt="Album Artwork" src={imgsrc} />

        <dl className="mt2 f6 lh-copy">
          <dt className="clip">SongTitle</dt>
          <dd className="ml0 fw9">{songtitle}</dd>
          <dt className="clip">Title</dt>
          <dd className="ml0 gray">{title}</dd>
        </dl>
      </a>
      <p className="f6 blue">Download</p>
    </div>
  );
};

export default AlbumCard;
