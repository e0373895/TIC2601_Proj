import React from "react";
import Search from "./search.png";
import AlbumCard from "../albumcard/albumCard";
import AlbumDetails from "../albumdetails/Albumdetails";
import { Albums } from "../../Albums";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      AlList: [],
      showAlbum: false,
      route: "allist",
      AlbumName: ""
    };
  }

  onKeywordChange = event => {
    this.setState({ keyword: event.target.value });
  };

  loadAlbumDetails = data => {
    this.setState({
      AlbumName: data
    });
  };

  onRouteChange = route => {
    if (route === "album") {
      this.setState({ showAlbum: true });
    } else {
      this.setState({ showAlbum: false });
    }
    this.setState({ route: route });
  };

  onSubmitSearch = event => {
    // alert("clicked");
    fetch("http://localhost:3000/searchalb", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: this.state.keyword
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            AlList: output
          });
          console.log(this.state.AlList);
        }
      });
  };

  componentDidMount() {
    fetch("http://localhost:3000/searchalb", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: ""
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            AlList: output
          });
          console.log(this.state.AlList);
        }
      });
  }

  render() {
    const { showAlbum, route } = this.state;
    return (
      <div>
        <div className="flex dt pa3 pa4-ns" style={{ textAlign: "left" }}>
          <h2 className="f3 fw4 mv0" style={{ widtYh: "100px" }}>
            Albums
          </h2>
          <input
            id="name"
            className="w-20 pd5"
            type="search"
            placeholder="Search Albums"
            aria-describedby="name-desc"
            style={{ float: "right" }}
            onChange={this.onKeywordChange}
          />
          <img
            className="b"
            src={Search}
            alt="Search"
            onClick={this.onSubmitSearch}
            style={{
              width: "30px",
              height: "30px",
              padding: "10px,10px,10px,10px"
            }}
          />
        </div>
        {route === "allist" ? (
          <article style={{ display: "inline" }}>
            {this.state.AlList.map((Album, i) => {
              return (
                <AlbumCard
                  onRouteChange={this.onRouteChange}
                  loadAlbumDetails={this.loadAlbumDetails}
                  key={Album.AlbumID}
                  title={Album.Album_Title}
                  songtitle={Album.Song_Title}
                  artist={Album.artist}
                  imglink={Album.Album_Artwork}
                  downloadlink="Download" //{Albums[i].downloadlink}
                />
              );
            })}
          </article>
        ) : (
          <AlbumDetails
            onRouteChange={this.onRouteChange}
            AlbumName={this.loadAlbumDetails}
            title={this.props.AlbumName}
          />
        )}
      </div>
    );
  }
}

export default AlbumList;
