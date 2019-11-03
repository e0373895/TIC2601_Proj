import React from "react";
import Search from "./search.png";
import AlbumCard from "../albumcard/albumCard";
import { Albums } from "../../Albums";

const AlList = [];
class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onKeywordChange = event => {
    this.setState({ keyword: event.target.value });
  };

  onSubmitSearch = () => {
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
          alert(output);
          this.AlList = output;
        }
      });
  };

  render() {
    return (
      <div>
        <div className="flex dt pa3 pa4-ns" style={{ textAlign: "left" }}>
          <h2 className="f3 fw4 mv0" style={{ width: "100px" }}>
            Albums
          </h2>
          <input
            id="name"
            class="w-20 pd5"
            type="search"
            placeholder="Search Albums"
            aria-describedby="name-desc"
            style={{ float: "right" }}
            onChange={this.onKeywordChange}
            //   onChange={searchChange}
          />
          <img
            href="#"
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
        <article style={{ display: "inline" }}>
          {AlList.map((Album, i) => {
            return (
              <AlbumCard
                key={Albums[i].AlbumID}
                title={Albums[i].Album_Title}
                artist="HELLO" //{Albums[i].artist}
                imglink="image" //{Albums[i].imglink}
                downloadlink="Download" //{Albums[i].downloadlink}
              />
            );
          })}
        </article>
      </div>
    );
  }
}

export default AlbumList;
