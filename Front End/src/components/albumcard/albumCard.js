import React from "react";

const AlbumCard = ({ title, artist, imglink }) => {
  return (
    <div ClassName="grow" style={{ float: "left" }}>
      <a className="db center mw5 black link dim" href="#">
        <img className="db ba b--black-10" alt="Album Artwork" src={imglink} />

        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 fw9">{title}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray">{artist}</dd>
        </dl>
      </a>
      <p className="f6 blue">Download</p>
    </div>
  );
};

export default AlbumCard;
