import React from "react";

class AlbumCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      title: this.props.title,
      songtitle: this.props.songtitle,
      artist: this.props.artist,
      imglink: this.props.imglink,
      downloadlink: this.props.downloadlink
    };
  }

  onAlbumClick = () => {
    this.props.loadAlbumDetails(this.state.title);
    this.props.onRouteChange("album");
  };

  render() {
    const imgsrc = "http://localhost:3000/albumimages/" + this.state.imglink;
    return (
      <div className="grow" style={{ float: "left" }}>
        <a className="db center mw5 black link dim">
          <img
            className="db ba b--black-10"
            alt="Album Artwork"
            src={imgsrc}
            onClick={this.onAlbumClick}
          />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">SongTitle</dt>
            <dd className="ml0 fw9">{this.state.songtitle}</dd>
            <dt className="clip">Title</dt>
            <dd className="ml0 gray">{this.state.title}</dd>
          </dl>
        </a>
        <p className="f6 blue">Download</p>
      </div>
    );
  }
}

export default AlbumCard;
